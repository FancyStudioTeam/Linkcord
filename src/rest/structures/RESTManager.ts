import type { Client } from "#client/index.js";
import { defineImmutableProperty } from "#utils/functions/defineImmutableProperty.js";
import {
	ClientEvents,
	type MakeRequestOptions,
	REST_URL_BASE,
	REST_USER_AGENT,
	REST_VERSION,
	RESTContentTypes,
	type RESTMethods,
} from "../../index.js";
import { APIManager } from "./APIManager.js";

const NO_CONTENT_STATUS_CODE = 204;
const ONE_SECOND_MILLISECONDS = 1000;
const TOO_MANY_REQUESTS_STATUS_CODE = 429;

/** The REST manager for the client. */
export class RESTManager {
	/** Whether the client is rate limited globally. */
	#globalRateLimit = false;

	/** The API manager to perform requests within the REST manager. */
	declare readonly api: APIManager;
	/** The client of the REST manager. */
	declare readonly client: Client;

	/**
	 * Creates a new {@link RESTManager | `RESTManager`} instance.
	 * @param client - The client that instantiated the REST manager.
	 */
	constructor(client: Client) {
		defineImmutableProperty(this, "api", new APIManager(this));
		defineImmutableProperty(this, "client", client);
	}

	/**
	 * Creates the {@link Headers | `Headers`} object for the request.
	 *
	 * @param options - The options to use when creating the headers.
	 * @returns The created {@link Headers | `Headers`} object.
	 */
	#createRequestHeaders(
		options: CreateRequestHeadersOptions = {
			contentType: RESTContentTypes.ApplicationJSON,
			withAuthorization: true,
		},
	): Headers {
		const { client } = this;
		const { token } = client;

		const headers = new Headers();

		const { contentType, reason, withAuthorization } = options;

		headers.set("User-Agent", REST_USER_AGENT);
		headers.set("Content-Type", String(contentType));

		if (withAuthorization) {
			headers.set("Authorization", `Bot ${token}`);
		}

		if (reason) {
			headers.set("X-Audit-Log-Reason", reason);
		}

		return headers;
	}

	/**
	 * Creates the {@link RequestInit | `RequestInit`} object for the request.
	 *
	 * @param method - The HTTP method to use when making the request.
	 * @param options - The options to use when creating the request.
	 * @returns The created {@link RequestInit | `RequestInit`} object.
	 */
	#createRequestInit(method: RESTMethods, options?: MakeRequestOptions): RequestInit {
		const { json } = options ?? {};

		const headers = this.#createRequestHeaders(options);
		const data: RequestInit = {
			headers,
			method,
		};

		if (json) {
			data.body = JSON.stringify(json);
		}

		return data;
	}

	/**
	 * Creates the {@link URL | `URL`} object for the request.
	 *
	 * @param endpoint - The endpoint to use for the request.
	 * @param queryStringParams - The query string parameters to append to the request URL.
	 * @returns The created {@link URL | `URL`} object.
	 */
	#createRequestURL<QueryStringParams>(endpoint: string, queryStringParams?: QueryStringParams): URL {
		const urlObject = new URL(endpoint, `${REST_URL_BASE}/v${REST_VERSION}`);
		const { searchParams } = urlObject;

		if (queryStringParams && typeof queryStringParams === "object") {
			for (const [key, value] of Object.entries(queryStringParams)) {
				searchParams.append(key, String(value));
			}
		}

		return urlObject;
	}

	/**
	 * Performs a request to the Discord API with the given options.
	 *
	 * @param method - The HTTP method to use for the request.
	 * @param endpoint - The enpoint where the request will be made.
	 * @param options - The options to use when making the request.
	 * @returns The response from the Discord API.
	 *
	 * @typeParam Result - The shape of the response from the Discord API.
	 * @typeParam JSONParams - The shape of the JSON data to send with the request.
	 * @typeParam QueryStringParams - The shape of the query string parameters to append to the request URL.
	 */
	async makeRequest<Result, JSONParams = never, QueryStringParams = never>(
		method: RESTMethods,
		endpoint: string,
		options?: MakeRequestOptions<JSONParams, QueryStringParams>,
	): Promise<Result> {
		const globalRateLimit = this.#globalRateLimit;

		// If the client has a global rate limit, do not proceed with the request.
		if (globalRateLimit) {
			throw new Error("You are being rate limited.");
		}

		const { queryString } = options ?? {};

		const init = this.#createRequestInit(method, options);
		const url = this.#createRequestURL<QueryStringParams>(endpoint, queryString);

		const request = new Request(url, init);
		const response = await fetch(request);

		const { client } = this;
		const { headers, status } = response;

		client.emit(ClientEvents.RestRequest, request, response);

		// Check if the response was rate limited or does not have a content.
		const isRateLimited = status === TOO_MANY_REQUESTS_STATUS_CODE;
		const isNoContent = status === NO_CONTENT_STATUS_CODE;

		if (isRateLimited) {
			const isGlobalRateLimit = headers.has("X-RateLimit-Global");
			const rateLimitResetAfter = headers.get("X-RateLimit-Reset-After");

			if (isGlobalRateLimit) {
				this.#globalRateLimit = true;

				setTimeout(() => {
					this.#globalRateLimit = false;
				}, Number(rateLimitResetAfter) * ONE_SECOND_MILLISECONDS);
			} else {
				setTimeout(
					async () => await this.makeRequest(method, endpoint, options),
					Number(rateLimitResetAfter) * ONE_SECOND_MILLISECONDS,
				);
			}
		}

		if (isNoContent) {
			return undefined as Result;
		}

		return (await response.json()) as Promise<Result>;
	}
}

/** Represents the options to use when creating the request headers. */
type CreateRequestHeadersOptions = Pick<MakeRequestOptions, "contentType" | "reason" | "withAuthorization">;

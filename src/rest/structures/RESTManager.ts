import type { Client } from "#client/index.js";
import { defineInternalProperty } from "#utils/functions/defineInternalProperty.js";
import { LINKCORD_VERSION } from "../../index.js";
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
		defineInternalProperty(this, "api", new APIManager(this));
		defineInternalProperty(this, "client", client);
	}

	/** The default user agent to use when making requests. */
	static DEFAULT_USER_AGENT =
		`Linkcord/${LINKCORD_VERSION} (https://github.com/FancyStudioTeam/Linkcord, v${LINKCORD_VERSION})`;

	/** The base URL of the Discord REST API. */
	static REST_URL_BASE = "https://discord.com/api";

	/** The version of the Discord REST API. */
	static REST_VERSION = 9;

	/**
	 * Creates the {@link Headers | `Headers`} object for the request.
	 * @param options - The options to use when creating the headers.
	 * @returns The created {@link Headers | `Headers`} object.
	 */
	#createRequestHeaders(options?: CreateRequestHeadersOptions): Headers {
		const { client } = this;
		const { token } = client;
		const { DEFAULT_USER_AGENT } = RESTManager;

		const headers = new Headers();

		let { contentType, reason, withAuthorization } = options ?? {};

		// Set the content type to "application/json" by default.
		contentType ??= RESTContentTypes.ApplicationJSON;
		withAuthorization ??= true;

		headers.set("User-Agent", DEFAULT_USER_AGENT);
		headers.set("Content-Type", contentType);

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
	 * @param method - The HTTP method to use when making the request.
	 * @param options - The options to use when creating the request.
	 * @returns The created {@link RequestInit | `RequestInit`} object.
	 */
	#createRequestInit(method: RESTMethods, options?: CreateRequestInitOptions): RequestInit {
		const headers = this.#createRequestHeaders(options);
		const data: RequestInit = {
			headers,
			method,
		};

		return data;
	}

	/**
	 * @internal
	 */
	#createRequestURL<QueryStringParams>(endpoint: string, queryStringParams?: QueryStringParams): string {
		const { REST_URL_BASE, REST_VERSION } = RESTManager;

		const urlObject = new URL(endpoint, `${REST_URL_BASE}/v${REST_VERSION}`);
		const { searchParams } = urlObject;

		if (queryStringParams && typeof queryStringParams === "object") {
			for (const [key, value] of Object.entries(queryStringParams)) {
				searchParams.append(key, String(value));
			}
		}

		return urlObject.toString();
	}

	/**
	 * Performs a `DELETE` request to the Discord API.
	 * @param endpoint - The endpoint where the request will be made.
	 * @param options - The options to use when performing the request.
	 */
	async delete<Result, QueryStringParams = never>(
		endpoint: string,
		options?: RESTDeleteOptions<QueryStringParams>,
	): Promise<Result> {
		return await this.makeRequest<Result, never, QueryStringParams>(RESTMethods.Delete, endpoint, options);
	}

	/**
	 * Performs a `GET` request to the Discord API.
	 * @param endpoint - The endpoint where the request will be made.
	 * @param options - The options to use when performing the request.
	 */
	async get<Result, QueryStringParams = never>(
		endpoint: string,
		options?: RESTGetOptions<QueryStringParams>,
	): Promise<Result> {
		return await this.makeRequest<Result, never, QueryStringParams>(RESTMethods.Get, endpoint, options);
	}

	async makeRequest<Result, JSONParams = never, QueryStringParams = never>(
		method: RESTMethods,
		endpoint: string,
		options?: MakeRequestOptions<JSONParams, QueryStringParams>,
	): Promise<Result> {
		const globalRateLimit = this.#globalRateLimit;

		if (globalRateLimit) {
			throw new Error("You are being rate limited.");
		}

		const { queryString } = options ?? {};

		const init = this.#createRequestInit(method, options);
		const url = this.#createRequestURL<QueryStringParams>(endpoint, queryString);

		const request = await fetch(url, init);
		const { headers, status } = request;

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

		return (await request.json()) as Promise<Result>;
	}

	/**
	 * Performs a `PATCH` request to the Discord API.
	 * @param endpoint - The endpoint where the request will be made.
	 * @param options - The options to use when performing the request.
	 */
	async patch<Result, JSONParams = never, QueryStringParams = never>(
		endpoint: string,
		options?: RESTPatchOptions<JSONParams, QueryStringParams>,
	): Promise<Result> {
		return await this.makeRequest<Result, JSONParams, QueryStringParams>(RESTMethods.Patch, endpoint, options);
	}

	/**
	 * Performs a `POST` request to the Discord API.
	 * @param endpoint - The endpoint where the request will be made.
	 * @param options - The options to use when performing the request.
	 */
	async post<Result, JSONParams = never, QueryStringParams = never>(
		endpoint: string,
		options?: RESTPostOptions<JSONParams, QueryStringParams>,
	): Promise<Result> {
		return await this.makeRequest<Result, JSONParams, QueryStringParams>(RESTMethods.Post, endpoint, options);
	}

	/**
	 * Performs a `PUT` request to the Discord API.
	 * @param endpoint - The endpoint where the request will be made.
	 * @param options - The options to use when performing the request.
	 */
	async put<Result, JSONParams = never, QueryStringParams = never>(
		endpoint: string,
		options?: RESTPutOptions<JSONParams, QueryStringParams>,
	): Promise<Result> {
		return await this.makeRequest<Result, JSONParams, QueryStringParams>(RESTMethods.Put, endpoint, options);
	}
}

/**
 * @public
 */
export interface MakeRequestOptions<JSONParams = unknown, QueryStringParams = unknown> {
	contentType?: RESTContentTypes;
	json?: JSONParams;
	queryString?: QueryStringParams;
	reason?: string;
	withAuthorization?: boolean;
}

/**
 * @internal
 */
type CreateRequestInitOptions = MakeRequestOptions;

/**
 * @internal
 */
type CreateRequestHeadersOptions = Pick<MakeRequestOptions, "contentType" | "reason" | "withAuthorization">;

/**
 * @public
 */
export type RESTDeleteOptions<QueryStringParams = never> = MakeRequestOptions<never, QueryStringParams>;

/**
 * @public
 */
export type RESTGetOptions<QueryStringParams = never> = MakeRequestOptions<never, QueryStringParams>;

/**
 * @public
 */
export type RESTPatchOptions<JSONParams = unknown, QueryStringParams = never> = MakeRequestOptions<
	JSONParams,
	QueryStringParams
>;

/**
 * @public
 */
export type RESTPostOptions<JSONParams = unknown, QueryStringParams = never> = MakeRequestOptions<
	JSONParams,
	QueryStringParams
>;

/**
 * @public
 */
export type RESTPutOptions<JSONParams = unknown, QueryStringParams = never> = MakeRequestOptions<
	JSONParams,
	QueryStringParams
>;

/**
 * @public
 */
export enum RESTContentTypes {
	ApplicationJSON = "application/json",
	ApplicationXWWWFormURLEncoded = "application/x-www-form-urlencoded",
	MultipartFormData = "multipart/form-data",
}

/**
 * @public
 */
export enum RESTMethods {
	Delete = "DELETE",
	Get = "GET",
	Patch = "PATCH",
	Post = "POST",
	Put = "PUT",
}

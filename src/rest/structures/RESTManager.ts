import type { Client } from "#client/index.js";
import { defineImmutableProperty } from "#utils/functions/defineImmutableProperty.js";
import { AssertionUtils } from "#utils/helpers/AssertionUtils.js";
import {
	ChannelsAPI,
	GatewayAPI,
	type MakeRequestOptions,
	MiscellaneousAPI,
	ONE_SECOND_MILLISECONDS,
	REST_URL_BASE,
	REST_USER_AGENT,
	REST_VERSION,
	RESTContentType,
	type RESTMethod,
} from "../../index.js";

const { isObject } = AssertionUtils;

export class RESTManager {
	#globalRateLimit = false;

	declare readonly channels: ChannelsAPI;
	declare readonly client: Client;
	declare readonly gateway: GatewayAPI;
	declare readonly miscellaneous: MiscellaneousAPI;

	constructor(client: Client) {
		defineImmutableProperty(this, "channels", new ChannelsAPI(this));
		defineImmutableProperty(this, "client", client);
		defineImmutableProperty(this, "gateway", new GatewayAPI(this));
		defineImmutableProperty(this, "miscellaneous", new MiscellaneousAPI(this));
	}

	private createRequestHeaders(
		options: CreateRequestHeadersOptions = {
			contentType: RESTContentType.ApplicationJSON,
			withAuthorization: true,
		},
	): Headers {
		const { client } = this;
		const { token } = client;

		const { contentType, reason, withAuthorization } = options;
		const headers = new Headers({
			"Content-Type": contentType ?? RESTContentType.ApplicationJSON,
			"User-Agent": REST_USER_AGENT,
		});

		if (withAuthorization) headers.set("Authorization", `Bot ${token}`);
		if (reason) headers.set("X-Audit-Log-Reason", reason);

		return headers;
	}

	private createRequestInit(method: RESTMethod, options?: MakeRequestOptions): RequestInit {
		const { json } = options ?? {};

		const headers = this.createRequestHeaders(options);
		const data: RequestInit = {
			headers,
			method,
		};

		if (json) {
			data.body = JSON.stringify(json);
		}

		return data;
	}

	createRequestUrl(endpoint: string, queryStringParams?: unknown): URL {
		const urlObject = new URL(endpoint, `${REST_URL_BASE}/v${REST_VERSION}`);
		const { searchParams } = urlObject;

		if (isObject(queryStringParams)) {
			for (const [key, value] of Object.entries(queryStringParams)) {
				searchParams.append(key, String(value));
			}
		}

		return urlObject;
	}

	async makeRequest<Result, JSONParams = never, QueryStringParams = never>(
		method: RESTMethod,
		endpoint: string,
		options?: MakeRequestOptions<JSONParams, QueryStringParams>,
	): Promise<Result> {
		const globalRateLimit = this.#globalRateLimit;

		if (globalRateLimit) {
			throw new Error("You are being globally rate limited");
		}

		const { queryString } = options ?? {};

		const init = this.createRequestInit(method, options);
		const url = this.createRequestUrl(endpoint, queryString);

		const request = new Request(url, init);
		const response = await fetch(request);

		const { headers, status } = response;

		const isRateLimited = status === HTTPStatusCodes.TooManyRequests;
		const isNoContent = status === HTTPStatusCodes.NoContent;

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
					await this.makeRequest.bind(this)(method, endpoint, options),
					Number(rateLimitResetAfter) * ONE_SECOND_MILLISECONDS,
				);
			}
		}

		if (isNoContent) {
			return undefined as Result;
		}

		const jsonResponse = (await response.json()) as Promise<Result>;

		return jsonResponse;
	}
}

type CreateRequestHeadersOptions = Pick<MakeRequestOptions, "contentType" | "reason" | "withAuthorization">;

enum HTTPStatusCodes {
	NoContent = 204,
	Ok = 200,
	TooManyRequests = 429,
}

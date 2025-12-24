import type { Client } from "#client/index.js";
import { normalizeRoute } from "#rest/functions/normalizeRoute.js";
import { defineReadonlyProperty } from "#utils/functions/defineReadonlyProperty.js";
import { APIManager } from "./APIManager.js";
import { BucketManager } from "./BucketManager.js";
import { type MakeRequestOptions, RESTContentType } from "./RESTManager.types.js";

const NO_CONTENT_STATUS_CODE = 204;

export class RESTManager {
	declare readonly api: APIManager;
	declare readonly buckets: BucketManager;
	declare readonly client: Client;

	constructor(client: Client) {
		defineReadonlyProperty(this, "api", new APIManager(this, client));
		defineReadonlyProperty(this, "buckets", new BucketManager());
		defineReadonlyProperty(this, "client", client);
	}

	static REST_URL_BASE = "https://discord.com/api" as const;
	static REST_VERSION = 10 as const;

	#createRequestHeaders(options?: CreateRequestHeadersOptions): Headers {
		const { contentType = RESTContentType.ApplicationJSON, withAuthorization = true } = options ?? {};
		const headers = new Headers();

		headers.set("Content-Type", contentType);

		if (withAuthorization) {
			const { client } = this;
			const { token } = client;

			headers.set("Authorization", `Bot ${token}`);
		}

		return headers;
	}

	#createRequestUrl(endpoint: string): string {
		const { REST_URL_BASE, REST_VERSION } = RESTManager;
		const requestUrl = `${REST_URL_BASE}/v${REST_VERSION}/${endpoint}`;

		return requestUrl;
	}

	makeRequest<Result>(endpoint: string, options: MakeRequestOptions): Promise<Result> {
		const { method } = options;
		const { buckets } = this;

		const headers = this.#createRequestHeaders(options);
		const requestUrl = this.#createRequestUrl(endpoint);

		const normalizedRoute = normalizeRoute(method, endpoint);
		const bucket = buckets.getBucket(normalizedRoute);

		const promise = new Promise<Result>((resolve, reject) =>
			bucket.enqueue(async () => {
				try {
					const response = await fetch(requestUrl, {
						headers,
					});

					const { headers: responseHeaders, status: responseStatus } = response;

					bucket.update(responseHeaders);

					if (responseStatus === NO_CONTENT_STATUS_CODE) {
						return void resolve(undefined as Result);
					}

					const data = await response.json();

					resolve(data);
				} catch (error) {
					reject(error);
				}
			}),
		);

		return promise;
	}
}

type CreateRequestHeadersOptions = Pick<MakeRequestOptions, "contentType" | "withAuthorization">;

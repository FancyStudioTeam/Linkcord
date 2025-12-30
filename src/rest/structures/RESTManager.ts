import { type Client, ClientEvents } from '#client/index.js';
import { normalizeRoute } from '#rest/functions/normalizeRoute.js';
import { defineReadonlyProperty } from '#utils/functions/defineReadonlyProperty.js';
import { BucketManager } from './BucketManager.js';
import { type MakeRequestOptions, RESTMethod } from './RESTManager.types.js';
import { ResourceManager } from './ResourceManager.js';

const NO_CONTENT_STATUS_CODE = 204;
// const OK_STATUS_CODE = 200;

export class RESTManager {
	declare readonly buckets: BucketManager;
	declare readonly client: Client;
	declare readonly resources: ResourceManager;

	constructor(client: Client) {
		defineReadonlyProperty(this, 'buckets', new BucketManager());
		defineReadonlyProperty(this, 'client', client);
		defineReadonlyProperty(this, 'resources', new ResourceManager(this, client));
	}

	static REST_URL_BASE = 'https://discord.com/api' as const;
	static REST_VERSION = 10 as const;

	#createRequestHeaders(options?: CreateRequestHeadersOptions): Headers {
		const { withAuthorization = true } = options ?? {};
		const headers = new Headers();

		if (withAuthorization) {
			const { client } = this;
			const { token } = client;

			headers.set('Authorization', `Bot ${token}`);
		}

		return headers;
	}

	#createRequestUrl(endpoint: string): string {
		const { REST_URL_BASE, REST_VERSION } = RESTManager;
		const requestUrl = `${REST_URL_BASE}/v${REST_VERSION}/${endpoint}`;

		return requestUrl;
	}

	#getRequestBody(options: MakeRequestOptions): BodyInit | undefined {
		const { method } = options;

		const isDeleteMethod = method === RESTMethod.Delete;
		const isGetMethod = method === RESTMethod.Get;

		if (isDeleteMethod || isGetMethod) return;

		const { body } = options;

		return body;
	}

	makeRequest<Result>(endpoint: string, options: MakeRequestOptions): Promise<Result> {
		const { method } = options;
		const { buckets, client } = this;
		const { events } = client;

		const body = this.#getRequestBody(options);
		const headers = this.#createRequestHeaders(options);
		const requestUrl = this.#createRequestUrl(endpoint);

		const normalizedRoute = normalizeRoute(method, endpoint);
		const bucket = buckets.getBucket(normalizedRoute);

		const promise = new Promise<Result>((resolve, reject) =>
			bucket.enqueue(async () => {
				try {
					const response = await fetch(requestUrl, {
						body,
						headers,
						method,
					});

					const { headers: responseHeaders, ok, status, statusText } = response;

					bucket.update(responseHeaders);
					events.emit(ClientEvents.RestRequest, {
						request: {
							method,
						},
						response: {
							ok,
							statusCode: status,
							statusText,
						},
						url: requestUrl,
					});

					if (status === NO_CONTENT_STATUS_CODE) {
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

type CreateRequestHeadersOptions = Pick<MakeRequestOptions, 'withAuthorization'>;

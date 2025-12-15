import type { Client } from "#client/index.js";
import { ApplicationsAPI } from "#rest/api/ApplicationsAPI.js";
import { ChannelsAPI } from "#rest/api/ChannelsAPI.js";
import { GatewayAPI } from "#rest/api/GatewayAPI.js";
import { MiscellaneousAPI } from "#rest/api/MiscellaneousAPI.js";
import { normalizeRoute } from "#rest/functions/normalizeRoute.js";
import type { MakeRequestOptions } from "#rest/types/index.js";
import { REST_URL_BASE } from "#rest/utils/Constants.js";
import { defineImmutableProperty } from "#utils/functions/defineImmutableProperty.js";
import { BucketManager } from "./BucketManager.js";

export class RESTManager {
	declare readonly applications: ApplicationsAPI;
	declare readonly buckets: BucketManager;
	declare readonly channels: ChannelsAPI;
	declare readonly client: Client;
	declare readonly gateway: GatewayAPI;
	declare readonly miscellaneous: MiscellaneousAPI;

	constructor(client: Client) {
		defineImmutableProperty(this, "applications", new ApplicationsAPI(this));
		defineImmutableProperty(this, "buckets", new BucketManager());
		defineImmutableProperty(this, "channels", new ChannelsAPI(this));
		defineImmutableProperty(this, "client", client);
		defineImmutableProperty(this, "gateway", new GatewayAPI(this));
		defineImmutableProperty(this, "miscellaneous", new MiscellaneousAPI(this));
	}

	get token(): string {
		const { client } = this;
		const { token } = client;

		return token;
	}

	makeRequest<Result>(endpoint: string, options: MakeRequestOptions): Promise<Result> {
		const { method } = options;
		const { buckets, token } = this;

		const normalizedRoute = normalizeRoute(method, endpoint);

		const promise = new Promise<Result>((resolve, reject) => {
			const bucket = buckets.getBucket(normalizedRoute);
			const requestFunction = async () => {
				try {
					const response = await fetch(`${REST_URL_BASE}/${endpoint}`, {
						// @ts-expect-error
						body: options.body ?? undefined,
						headers: {
							authorization: `Bot ${token}`,
							"content-type": "application/json",
						},
						method,
					});

					const { headers } = response;

					const bucketId = headers.get("X-RateLimit-Bucket") ?? undefined;
					const bucket = buckets.getBucket(normalizedRoute, bucketId);

					bucket.update(headers);

					const data = await response.json();

					resolve(data);
				} catch (error) {
					reject(error);
				}
			};

			bucket.enqueue(requestFunction);
		});

		return promise;
	}
}

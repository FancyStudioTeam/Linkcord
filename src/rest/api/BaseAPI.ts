import type { Client } from "#client/index.js";
import type { RESTManager } from "#rest/structures/RESTManager.js";
import { type MakeRequestOptions, RESTMethod } from "#rest/types/index.js";
import { defineImmutableProperty } from "#utils/functions/defineImmutableProperty.js";

export class BaseAPI {
	protected declare readonly rest: RESTManager;

	constructor(rest: RESTManager) {
		defineImmutableProperty(this, "rest", rest);
	}

	protected get client(): Client {
		const { rest } = this;
		const { client } = rest;

		return client;
	}

	protected delete<Result, QueryStringParams = never>(
		endpoint: string,
		options?: MakeRequestOptions<never, QueryStringParams>,
	): Promise<Result> {
		const { rest } = this;

		return rest.makeRequest<Result, never, QueryStringParams>(RESTMethod.Delete, endpoint, options);
	}

	protected async get<Result, QueryStringParams = never>(
		endpoint: string,
		options?: MakeRequestOptions<never, QueryStringParams>,
	): Promise<Result> {
		const { rest } = this;

		return await rest.makeRequest<Result, never, QueryStringParams>(RESTMethod.Get, endpoint, options);
	}

	protected async patch<Result, JSONParams = never, QueryStringParams = never>(
		endpoint: string,
		options?: MakeRequestOptions<JSONParams, QueryStringParams>,
	): Promise<Result> {
		const { rest } = this;

		return await rest.makeRequest<Result, JSONParams, QueryStringParams>(RESTMethod.Patch, endpoint, options);
	}

	protected async post<Result, JSONParams = never, QueryStringParams = never>(
		endpoint: string,
		options?: MakeRequestOptions<JSONParams, QueryStringParams>,
	): Promise<Result> {
		const { rest } = this;

		return await rest.makeRequest<Result, JSONParams, QueryStringParams>(RESTMethod.Post, endpoint, options);
	}

	protected async put<Result, JSONParams = never, QueryStringParams = never>(
		endpoint: string,
		options?: MakeRequestOptions<JSONParams, QueryStringParams>,
	): Promise<Result> {
		const { rest } = this;

		return await rest.makeRequest<Result, JSONParams, QueryStringParams>(RESTMethod.Put, endpoint, options);
	}
}

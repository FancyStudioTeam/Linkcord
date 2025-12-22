import type { Client } from "#client/index.js";
import type { RESTManager } from "#rest/structures/RESTManager.js";
import {
	type MakeDeleteRequestOptions,
	type MakeGetRequestOptions,
	type MakePatchRequestOptions,
	type MakePostRequestOptions,
	type MakePutRequestOptions,
	RESTMethod,
} from "#rest/structures/RESTManager.types.js";
import { defineReadonlyProperty } from "#utils/functions/defineReadonlyProperty.js";

export class BaseAPI {
	protected declare readonly client: Client;
	protected declare readonly rest: RESTManager;

	constructor(rest: RESTManager, client: Client) {
		defineReadonlyProperty(this, "client", client);
		defineReadonlyProperty(this, "rest", rest);
	}

	protected delete<Result>(endpoint: string, options?: Omit<MakeDeleteRequestOptions, "method">): Promise<Result> {
		const { rest } = this;

		return rest.makeRequest<Result>(endpoint, {
			...options,
			method: RESTMethod.Delete,
		});
	}

	protected async get<Result>(endpoint: string, options?: Omit<MakeGetRequestOptions, "method">): Promise<Result> {
		const { rest } = this;

		return await rest.makeRequest<Result>(endpoint, {
			...options,
			method: RESTMethod.Get,
		});
	}

	protected async patch<Result>(
		endpoint: string,
		options?: Omit<MakePatchRequestOptions, "method">,
	): Promise<Result> {
		const { rest } = this;

		return await rest.makeRequest<Result>(endpoint, {
			...options,
			method: RESTMethod.Patch,
		});
	}

	protected async post<Result>(endpoint: string, options?: Omit<MakePostRequestOptions, "method">): Promise<Result> {
		const { rest } = this;

		return await rest.makeRequest<Result>(endpoint, {
			...options,
			method: RESTMethod.Post,
		});
	}

	protected async put<Result>(endpoint: string, options?: Omit<MakePutRequestOptions, "method">): Promise<Result> {
		const { rest } = this;

		return await rest.makeRequest<Result>(endpoint, {
			...options,
			method: RESTMethod.Put,
		});
	}
}

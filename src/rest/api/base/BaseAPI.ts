import type { Client } from "#client/Client.js";
import type {
	RESTDeleteOptions,
	RESTGetOptions,
	RESTManager,
	RESTPatchOptions,
	RESTPostOptions,
	RESTPutOptions,
} from "#rest/structures/RESTManager.js";

/**
 * Represents a base class for all API classes.
 *
 * @public
 */
export class BaseAPI {
	/**
	 * The REST manager to perform requests within the API classes.
	 */
	protected readonly rest: RESTManager;

	/**
	 * Creates a new {@link BaseAPI | `BaseAPI`} instance.
	 *
	 * @param rest - The REST manager to perform requests within the API
	 * classes.
	 */
	constructor(rest: RESTManager) {
		this.rest = rest;
	}

	/**
	 * The client to instantiate the returned data into Discord structures.
	 */
	get client(): Client {
		const { rest } = this;
		const { client } = rest;

		return client;
	}

	/**
	 * @internal
	 */
	protected delete<Result, QueryStringParams = never>(
		endpoint: string,
		options?: RESTDeleteOptions<QueryStringParams>,
	): Promise<Result> {
		const { rest } = this;

		return rest.delete<Result, QueryStringParams>(endpoint, options);
	}

	/**
	 * @internal
	 */
	protected async get<Result, QueryStringParams = never>(
		endpoint: string,
		options?: RESTGetOptions<QueryStringParams>,
	): Promise<Result> {
		const { rest } = this;

		return await rest.get<Result, QueryStringParams>(endpoint, options);
	}

	/**
	 * @internal
	 */
	protected async patch<Result, JSONParams = never, QueryStringParams = never>(
		endpoint: string,
		options?: RESTPatchOptions<JSONParams, QueryStringParams>,
	): Promise<Result> {
		const { rest } = this;

		return await rest.patch<Result, JSONParams, QueryStringParams>(endpoint, options);
	}

	/**
	 * @internal
	 */
	protected async post<Result, JSONParams = never, QueryStringParams = never>(
		endpoint: string,
		options?: RESTPostOptions<JSONParams, QueryStringParams>,
	): Promise<Result> {
		const { rest } = this;

		return await rest.post<Result, JSONParams, QueryStringParams>(endpoint, options);
	}

	/**
	 * @internal
	 */
	protected async put<Result, JSONParams = never, QueryStringParams = never>(
		endpoint: string,
		options?: RESTPutOptions<JSONParams, QueryStringParams>,
	): Promise<Result> {
		const { rest } = this;

		return await rest.put<Result, JSONParams, QueryStringParams>(endpoint, options);
	}
}

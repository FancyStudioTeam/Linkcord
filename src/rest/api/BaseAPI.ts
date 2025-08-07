import type { Client } from "#client/index.js";
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
 * @group REST/API
 * @public
 */
export class BaseAPI {
	/**
	 * The REST manager to perform requests within the API classes.
	 */
	protected readonly rest: RESTManager;

	/**
	 * Creates a new {@link BaseAPI | `BaseAPI`} instance.
	 * @param rest - The REST manager that instantiated the API.
	 */
	constructor(rest: RESTManager) {
		this.rest = rest;
	}

	/**
	 * Performs a `DELETE` request to the Discord API.
	 * @param endpoint - The endpoint where the request will be made.
	 * @param options - The options to use when performing the request.
	 * @internal
	 */
	protected __delete__<Result, QueryStringParams = never>(
		endpoint: string,
		options?: RESTDeleteOptions<QueryStringParams>,
	): Promise<Result> {
		const { rest } = this;

		return rest.delete<Result, QueryStringParams>(endpoint, options);
	}

	/**
	 * Performs a `GET` request to the Discord API.
	 * @param endpoint - The endpoint where the request will be made.
	 * @param options - The options to use when performing the request.
	 * @internal
	 */
	protected async __get__<Result, QueryStringParams = never>(
		endpoint: string,
		options?: RESTGetOptions<QueryStringParams>,
	): Promise<Result> {
		const { rest } = this;

		return await rest.get<Result, QueryStringParams>(endpoint, options);
	}

	/**
	 * Performs a `PATCH` request to the Discord API.
	 * @param endpoint - The endpoint where the request will be made.
	 * @param options - The options to use when performing the request.
	 * @internal
	 */
	protected async __patch__<Result, JSONParams = never, QueryStringParams = never>(
		endpoint: string,
		options?: RESTPatchOptions<JSONParams, QueryStringParams>,
	): Promise<Result> {
		const { rest } = this;

		return await rest.patch<Result, JSONParams, QueryStringParams>(endpoint, options);
	}

	/**
	 * Performs a `POST` request to the Discord API.
	 * @param endpoint - The endpoint where the request will be made.
	 * @param options - The options to use when performing the request.
	 * @internal
	 */
	protected async __post__<Result, JSONParams = never, QueryStringParams = never>(
		endpoint: string,
		options?: RESTPostOptions<JSONParams, QueryStringParams>,
	): Promise<Result> {
		const { rest } = this;

		return await rest.post<Result, JSONParams, QueryStringParams>(endpoint, options);
	}

	/**
	 * Performs a `PUT` request to the Discord API.
	 * @param endpoint - The endpoint where the request will be made.
	 * @param options - The options to use when performing the request.
	 * @internal
	 */
	protected async __put__<Result, JSONParams = never, QueryStringParams = never>(
		endpoint: string,
		options?: RESTPutOptions<JSONParams, QueryStringParams>,
	): Promise<Result> {
		const { rest } = this;

		return await rest.put<Result, JSONParams, QueryStringParams>(endpoint, options);
	}

	/**
	 * The client to instantiate the returned data into Discord structures.
	 */
	get client(): Client {
		const { rest } = this;
		const { client } = rest;

		return client;
	}
}

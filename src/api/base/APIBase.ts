import type { MakeRequestOptions, RESTManager, RESTMethods } from "#rest/index.js";

/**
 * @internal
 */
export class APIBase {
	private readonly manager: RESTManager;

	constructor(manager: RESTManager) {
		this.manager = manager;
	}

	/**
	 * @internal
	 */
	protected async makeRequest<Result, JSONParams = never, QueryStringParams = never>(
		method: RESTMethods,
		endpoint: string,
		options?: MakeRequestOptions<JSONParams, QueryStringParams>,
	): Promise<Result> {
		const { manager } = this;

		return await manager.makeRequest<Result, JSONParams, QueryStringParams>(
			method,
			endpoint,
			options,
		);
	}
}

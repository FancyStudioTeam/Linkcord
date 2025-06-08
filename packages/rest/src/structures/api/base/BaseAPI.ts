import type {
  DeleteOptions,
  GetOptions,
  PatchOptions,
  PostOptions,
  PutOptions,
  RESTManager,
} from "../../RESTManager.js";

/**
 * @public
 */
export class BaseAPI {
  protected rest: RESTManager;

  constructor(restManager: RESTManager) {
    this.rest = restManager;
  }

  protected async delete<Result>(endpoint: string, options?: DeleteOptions): Promise<Result> {
    const { reason } = options ?? {};
    const { rest } = this;
    const request = await rest.delete<Result>(endpoint, {
      reason,
    });

    return request;
  }

  protected async get<Result, QueryStringParams = never>(
    endpoint: string,
    options?: GetOptions<QueryStringParams>,
  ): Promise<Result> {
    const { query } = options ?? {};
    const { rest } = this;
    const request = await rest.get<Result, QueryStringParams>(endpoint, {
      query,
    });

    return request;
  }

  protected async patch<Result, JSONParams = never>(
    endpoint: string,
    options?: PatchOptions<JSONParams>,
  ): Promise<Result> {
    const { json, reason } = options ?? {};
    const { rest } = this;
    const request = await rest.patch<Result, JSONParams>(endpoint, {
      json,
      reason,
    });

    return request;
  }

  protected async post<Result, JSONParams = never>(
    endpoint: string,
    options?: PostOptions<JSONParams>,
  ): Promise<Result> {
    const { json, reason } = options ?? {};
    const { rest } = this;
    const request = await rest.post<Result, JSONParams>(endpoint, {
      json,
      reason,
    });

    return request;
  }

  protected async put<Result, JSONParams = never>(endpoint: string, options?: PutOptions<JSONParams>): Promise<Result> {
    const { json, reason } = options ?? {};
    const { rest } = this;
    const request = await rest.put<Result, JSONParams>(endpoint, {
      json,
      reason,
    });

    return request;
  }
}

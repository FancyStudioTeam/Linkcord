import type { MakeRequestOptions, RESTManager, RequestParams } from "../../RESTManager.js";

/**
 * @public
 */
export class BaseAPI {
  protected rest: RESTManager;

  constructor(restManager: RESTManager) {
    this.rest = restManager;
  }

  protected async delete<Result, QueryStringParams = RequestParams>(
    endpoint: string,
    options?: MakeRequestOptions<never, QueryStringParams>,
  ): Promise<Result> {
    const { reason } = options ?? {};
    const { rest } = this;
    const request = await rest.delete<Result>(endpoint, {
      reason,
    });

    return request;
  }

  protected async get<Result, QueryStringParams = RequestParams>(
    endpoint: string,
    options?: MakeRequestOptions<never, QueryStringParams>,
  ): Promise<Result> {
    const { query } = options ?? {};
    const { rest } = this;
    const request = await rest.get<Result, QueryStringParams>(endpoint, {
      query,
    });

    return request;
  }

  protected async patch<Result, JSONParams = RequestParams, QueryStringParams = RequestParams>(
    endpoint: string,
    options?: MakeRequestOptions<JSONParams, QueryStringParams>,
  ): Promise<Result> {
    const { json, reason } = options ?? {};
    const { rest } = this;
    const request = await rest.patch<Result, JSONParams>(endpoint, {
      json,
      reason,
    });

    return request;
  }

  protected async post<Result, JSONParams = RequestParams, QueryStringParams = RequestParams>(
    endpoint: string,
    options?: MakeRequestOptions<JSONParams, QueryStringParams>,
  ): Promise<Result> {
    const { json, reason } = options ?? {};
    const { rest } = this;
    const request = await rest.post<Result, JSONParams>(endpoint, {
      json,
      reason,
    });

    return request;
  }

  protected async put<Result, JSONParams = RequestParams, QueryStringParams = RequestParams>(
    endpoint: string,
    options?: MakeRequestOptions<JSONParams, QueryStringParams>,
  ): Promise<Result> {
    const { json, reason } = options ?? {};
    const { rest } = this;
    const request = await rest.put<Result, JSONParams>(endpoint, {
      json,
      reason,
    });

    return request;
  }
}

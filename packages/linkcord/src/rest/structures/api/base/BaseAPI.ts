import type { MakeRequestOptions, RESTManager } from "../../RESTManager.js";

/**
 * @public
 */
export class BaseAPI {
  protected rest: RESTManager;

  constructor(restManager: RESTManager) {
    this.rest = restManager;
  }

  protected async delete<Result, QueryStringParams = never>(
    endpoint: string,
    options?: MakeRequestOptions<never, QueryStringParams, never>,
  ): Promise<Result> {
    const { reason } = options ?? {};
    const { rest } = this;
    const request = await rest.delete<Result, QueryStringParams>(endpoint, {
      reason,
    });

    return request;
  }

  protected async get<Result, QueryStringParams = never>(
    endpoint: string,
    options?: MakeRequestOptions<never, QueryStringParams, never>,
  ): Promise<Result> {
    const { query } = options ?? {};
    const { rest } = this;
    const request = await rest.get<Result, QueryStringParams>(endpoint, {
      query,
    });

    return request;
  }

  protected async patch<Result, JSONParams = never, QueryStringParams = never>(
    endpoint: string,
    options?: MakeRequestOptions<JSONParams, QueryStringParams, never>,
  ): Promise<Result> {
    const { json, reason } = options ?? {};
    const { rest } = this;
    const request = await rest.patch<Result, JSONParams, QueryStringParams>(endpoint, {
      json,
      reason,
    });

    return request;
  }

  protected async post<Result, JSONParams = never, QueryStringParams = never, FormParams = never>(
    endpoint: string,
    options?: MakeRequestOptions<JSONParams, QueryStringParams, FormParams>,
  ): Promise<Result> {
    const { form, json, reason } = options ?? {};
    const { rest } = this;
    const request = await rest.post<Result, JSONParams, QueryStringParams, FormParams>(endpoint, {
      form,
      json,
      reason,
    });

    return request;
  }

  protected async put<Result, JSONParams = never, QueryStringParams = never>(
    endpoint: string,
    options?: MakeRequestOptions<JSONParams, QueryStringParams, never>,
  ): Promise<Result> {
    const { json, reason } = options ?? {};
    const { rest } = this;
    const request = await rest.put<Result, JSONParams, QueryStringParams>(endpoint, {
      json,
      reason,
    });

    return request;
  }
}

import type { MakeRequestOptions } from "../RESTManager.js";

/**
 * @internal
 */
export interface CreateHeadersOptions extends Pick<MakeRequestOptions, "includeAuthorization" | "reason"> {
  contentType?: CreateHeadersContentType;
}

/**
 * @internal
 */
export interface CreateRequestData {
  init: RequestInit;
  url: string;
}

/**
 * @public
 */
export interface RequestFile {
  blob: Blob;
  fileName: string;
  id: string;
}

/**
 * @public
 */
export interface RESTManagerEventsMap {
  request: [data: RESTManagerRequestEventData];
}

/**
 * @public
 */
export interface RESTManagerOptions {
  token: string;
}

/**
 * @public
 */
export interface RESTManagerRequestEventData {
  endpoint: string;
  headers: Headers;
  method: RESTMethods;
  status: number;
  statusText: string;
  url: string;
}

/**
 * @internal
 */
export type CreateHeadersContentType = "application/json" | "multipart/form-data";

/**
 * @internal
 */
export interface CreateRequestDataOptions<JSONParams = never, QueryStringParams = never> {
  files?: RequestFile[];
  includeAuthorization?: boolean;
  json?: JSONParams;
  query?: QueryStringParams;
  reason?: string;
}

/**
 * @public
 */
export enum RESTMethods {
  Delete = "DELETE",
  Get = "GET",
  Patch = "PATCH",
  Post = "POST",
  Put = "PUT",
}

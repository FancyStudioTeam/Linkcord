import type { JSONErrorCodes, RESTStatusCodes } from "#types";

export class RESTError extends Error {
  readonly response: RESTErrorResponse;
  readonly statusCode: number;
  readonly url: string;

  constructor(message: string, options: RESTErrorOptions) {
    super(message);

    const { response, statusCode, url } = options;

    this.response = response;
    this.statusCode = statusCode;
    this.url = url;
  }
}

interface RESTErrorOptions {
  response: RESTErrorResponse;
  statusCode: RESTStatusCodes;
  url: string;
}

interface RESTErrorResponse {
  code: JSONErrorCodes;
  message: string;
}

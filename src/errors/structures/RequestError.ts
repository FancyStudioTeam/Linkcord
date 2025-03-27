export class RequestError extends Error {
  /** The received Discord error response. */
  readonly response: CreateRequestErrorResponseOptions;
  /** The status code of the request. */
  readonly statusCode: number;
  /** The url of the request. */
  readonly url: string;

  constructor(message: string, options: CreateRequestErrorOptions) {
    super(message);

    const { response, statusCode, url } = options;

    this.response = response;
    this.statusCode = statusCode;
    this.url = url;
  }
}

interface CreateRequestErrorOptions {
  /** The received Discord error response. */
  response: CreateRequestErrorResponseOptions;
  /** The status code of the request. */
  statusCode: number;
  /** The url of the request. */
  url: string;
}

interface CreateRequestErrorResponseOptions {
  /** The received Discord error code. */
  code: number;
  /** The received Discord error message. */
  message: string;
}

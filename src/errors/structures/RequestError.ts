export class RequestError extends Error {
  /** The status code of the request. */
  statusCode: number;
  /** The url of the request. */
  url: string;

  constructor(message: string, options: CreateRequestErrorOptions) {
    super(message);

    const { statusCode, url } = options;

    this.statusCode = statusCode;
    this.url = url;
  }
}

interface CreateRequestErrorOptions {
  /** The status code of the request. */
  statusCode: number;
  /** The url of the request. */
  url: string;
}

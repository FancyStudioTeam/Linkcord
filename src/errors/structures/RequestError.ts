export class RequestError extends Error {
  /** The status code of the request. */
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);

    this.statusCode = statusCode;
  }
}

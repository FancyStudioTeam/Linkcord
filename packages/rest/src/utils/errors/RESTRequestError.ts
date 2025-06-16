import type { RESTMethods } from "../../structures/index.js";

/**
 * @public
 */
export class RESTRequestError extends Error {
  readonly code: number;
  readonly method: RESTMethods;
  readonly url: string;

  constructor(message: string, code: number, method: RESTMethods, url: string) {
    super(message);

    this.code = code;
    this.method = method;
    this.url = url;
  }
}

import type { Client } from "#client";
import type { RESTManager } from "#rest";

export class Transformer {
  protected readonly _client: Client;

  constructor(client: Client) {
    this._client = client;
  }

  /** @internal */
  getRESTManager(): RESTManager {
    const { _client } = this;
    const { rest } = _client;

    return rest;
  }
}

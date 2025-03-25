import { EventEmitter } from "ws";
import { GatewayManager } from "#gateway";
import { RESTManager } from "#rest";
import type { ClientEvents, CreateClientOptions } from "#types/client";

export class Client extends EventEmitter<ClientEvents> {
  protected _token: string;
  /** The client gateway manager. */
  gateway: GatewayManager;
  /** The options used to create the client instance. */
  options: CreateClientOptions;
  /** The client REST manager. */
  rest: RESTManager;

  constructor(options: CreateClientOptions) {
    super();

    const { gateway, token } = options;
    const { intents, shards } = gateway;

    this._token = token;
    this.gateway = new GatewayManager(this, {
      intents,
      shards,
      token,
    });
    this.options = options;
    this.rest = new RESTManager(this, {
      token,
    });
  }

  /** Connects the client to the Discord gateway. */
  async connect(): Promise<void> {
    const { gateway } = this;

    await gateway.spawnShards();
  }
}

import { EventEmitter } from "node:events";
import { GatewayManager, type GatewayManagerOptions } from "@fancystudioteam/linkcord-gateway";

/**
 * @public
 */
export class Client<Ready extends boolean = false> extends EventEmitter<ClientEvents> {
  readonly gateway: GatewayManager;
  readonly options: ClientOptions;
  ready: Ready;

  constructor(options: ClientOptions) {
    super();

    const { gateway, token } = options;
    const gatewayOptions: GatewayManagerOptions = {
      ...gateway,
      token,
    };

    this.gateway = new GatewayManager(gatewayOptions);
    this.options = options;
    this.ready = false as Ready;
  }

  async connect(): Promise<void> {
    await this.gateway.spawnShards();
  }

  isReady(): this is Client<true> {
    return this.ready;
  }
}

/**
 * @public
 */
export interface ClientEvents {
  debug: [shardId: number, message: string];
  hello: [shardId: number, heartbeatInterval: number];
}

/**
 * @public
 */
export interface ClientGatewayOptions extends Omit<GatewayManagerOptions, "token"> {}

/**
 * @public
 */
export interface ClientOptions {
  gateway: ClientGatewayOptions;
  token: string;
}

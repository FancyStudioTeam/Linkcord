import { EventEmitter } from "node:events";
import { GatewayManager, type GatewayManagerOptions } from "@fancystudioteam/linkcord-gateway";
import type { Snowflake } from "@fancystudioteam/linkcord-types";
import { VoiceManager, type VoiceManagerOptions } from "@fancystudioteam/linkcord-voice";

/**
 * @public
 */
export class Client<Ready extends boolean = false> extends EventEmitter<ClientEvents> {
  readonly gateway: GatewayManager;
  readonly options: ClientOptions;
  readonly unavailableGuilds: Map<Snowflake, boolean> = new Map();
  readonly voice: VoiceManager;

  ready: Ready;

  constructor(options: ClientOptions) {
    super();

    const { gateway, intents, token, voice } = options;

    this.gateway = new GatewayManager({
      ...gateway,
      intents,
      token,
    });
    this.options = options;
    this.ready = false as Ready;
    this.voice = new VoiceManager({
      ...voice,
      gatewayManager: this.gateway,
    });
  }

  async connect(): Promise<void> {
    const { gateway } = this;

    await gateway.spawnShards();
  }

  isReady(): this is Client<true> {
    return this.ready;
  }
}

/**
 * @public
 */
export interface ClientEvents {
  debug: [message: string, shardId?: number];
  hello: [heartbeatInterval: number, shardId: number];
}

/**
 * @public
 */
export interface ClientGatewayOptions extends Omit<GatewayManagerOptions, "intents" | "token"> {}

/**
 * @public
 */
export interface ClientVoiceOptions extends Omit<VoiceManagerOptions, "gatewayManager"> {}

/**
 * @public
 */
export interface ClientOptions {
  gateway?: ClientGatewayOptions;
  intents: number;
  token: string;
  voice?: ClientVoiceOptions;
}

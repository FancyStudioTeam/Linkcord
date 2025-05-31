import { EventEmitter } from "node:events";
import { GatewayManager, type GatewayManagerOptions, type GatewayShard } from "@fancystudioteam/linkcord-gateway";
import type { GatewayEvent, If, Snowflake } from "@fancystudioteam/linkcord-types";
import { VoiceManager, type VoiceManagerOptions } from "@fancystudioteam/linkcord-voice";
import type { User } from "../types/index.js";
import { handlers } from "./handlers/handlers.js";

/**
 * @public
 */
export class Client<Ready extends boolean = boolean> extends EventEmitter<ClientEvents> {
  readonly gateway: GatewayManager;
  readonly options: ClientOptions;
  readonly unavailableGuilds: Map<Snowflake, boolean> = new Map();
  readonly voice: VoiceManager;

  ready: Ready;
  user: If<Ready, User, null> = null as If<Ready, User, null>;

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
    this._watchGateway();
  }

  /**
   * @internal
   */
  private _watchGateway(): void {
    this.gateway.on("packet", this._handleOnGatewayPacket.bind(this));
  }

  /**
   * @internal
   */
  private _handleOnGatewayPacket(packet: GatewayEvent, gatewayShard: GatewayShard): void {
    const handler = handlers[packet.op];

    handler?.(this, gatewayShard, packet as never);
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
  debug: [message: string, gatewayShard?: GatewayShard];
  ready: [gatewayShard: GatewayShard];
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

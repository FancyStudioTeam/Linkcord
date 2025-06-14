import { EventEmitter } from "node:events";
import {
  GatewayManager,
  type GatewayManagerEvents,
  type GatewayManagerOptions,
  type GatewayShard,
} from "@fancystudioteam/linkcord-gateway";
import { RESTManager, type RESTManagerOptions } from "@fancystudioteam/linkcord-rest";
import type { If, Snowflake } from "@fancystudioteam/linkcord-types";
import { VoiceManager, type VoiceManagerOptions } from "@fancystudioteam/linkcord-voice";
import type { ChatInputCommandInteraction } from "../structures/discord/ChatInputCommandInteraction.js";
import type { User } from "../structures/index.js";
import { handlers } from "./handlers/handlers.js";

/**
 * @public
 */
export class Client<Ready extends boolean = boolean> extends EventEmitter<ClientEvents> {
  readonly gateway: GatewayManager;
  readonly options: ClientOptions;
  readonly rest: RESTManager;
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
    this.rest = new RESTManager({
      token,
    });
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
  private _handleOnGatewayPacket({ gatewayShard, packet }: GatewayManagerEvents["packet"][0]): void {
    const { op } = packet;
    const handler = handlers[op];

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
  interactionCreate: [interaction: ChatInputCommandInteraction];
}

/**
 * @public
 */
export interface ClientGatewayOptions extends Omit<GatewayManagerOptions, "intents" | "token"> {}

/**
 * @public
 */
export interface ClientRestOptions extends Omit<RESTManagerOptions, "token"> {}

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
  rest?: ClientRestOptions;
  token: string;
  voice?: ClientVoiceOptions;
}

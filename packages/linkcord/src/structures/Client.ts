import { EventEmitter } from "node:events";
import { GatewayManager, type GatewayManagerOptions } from "@fancystudioteam/linkcord-gateway";
import { type JoinVoiceChannelOptions, VoiceManager, type VoiceManagerOptions } from "@fancystudioteam/linkcord-voice";

/**
 * @public
 */
export class Client<Ready extends boolean = false> extends EventEmitter<ClientEvents> {
  readonly gateway: GatewayManager;
  readonly options: ClientOptions;
  readonly voice: VoiceManager;
  ready: Ready;

  constructor(options: ClientOptions) {
    super();

    const { gateway, intents, token, voice } = options;
    const gatewayOptions: GatewayManagerOptions = {
      ...gateway,
      intents,
      token,
    };

    this.gateway = new GatewayManager(gatewayOptions);
    this.options = options;
    this.ready = false as Ready;
    this.voice = new VoiceManager({
      ...voice,
      gatewayManager: this.gateway,
    });
  }

  async connect(): Promise<void> {
    await this.gateway.spawnShards();
  }

  isReady(): this is Client<true> {
    return this.ready;
  }

  joinVoiceChannel(channelId: string, guildId: string, options?: JoinVoiceChannelOptions): void {
    this.voice.joinVoiceChannel(channelId, guildId, options);
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

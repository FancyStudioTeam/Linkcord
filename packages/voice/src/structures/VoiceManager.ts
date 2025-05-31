import { EventEmitter } from "node:events";
import { calculateShardIdFromGuildId } from "@fancystudioteam/linkcord";
import type { GatewayManager, JoinVoiceChannelOptions } from "@fancystudioteam/linkcord-gateway";
import type { VoiceEvent, VoiceVersion } from "@fancystudioteam/linkcord-types";
import { VoiceManagerError } from "../utils/index.js";
import { VoiceConnection } from "./VoiceConnection.js";

/**
 * @public
 */
export class VoiceManager extends EventEmitter<VoiceManagerEvents> {
  readonly gatewayManager: GatewayManager;
  readonly options: VoiceManagerOptions;
  readonly version: VoiceVersion;

  constructor(options: VoiceManagerOptions) {
    super();

    const { gatewayManager } = options;

    this.gatewayManager = gatewayManager;
    this.options = options;
    this.version = 8;
  }

  async joinVoiceChannel(
    channelId: string,
    guildId: string,
    options: JoinVoiceChannelOptions = {
      selfDeaf: true,
      selfMute: false,
    },
  ): Promise<VoiceConnection> {
    const { gatewayManager } = this;
    const { shardCount, shards } = gatewayManager;
    const shardId = calculateShardIdFromGuildId(shardCount, guildId);
    const shard = shards.get(shardId);

    if (!shard) {
      throw new VoiceManagerError(`Cannot find shard for guild "${guildId}".`);
    }

    this.emit("debug", `Found shard ${shardId} for guild "${guildId}".`);

    const { endpoint, sessionId, token, userId } = await shard.joinVoiceChannel(channelId, guildId, options);
    const voiceConnection = new VoiceConnection(this, {
      endpoint,
      guildId,
      sessionId,
      token,
      userId,
    });

    return voiceConnection;
  }
}

/**
 * @public
 */
export interface VoiceManagerEvents {
  close: [code: number, reason: string, reconnectable: boolean];
  debug: [message: string];
  hello: [heartbeatInterval: number];
  packet: [packet: VoiceEvent];
}

/**
 * @public
 */
export interface VoiceManagerOptions {
  gatewayManager: GatewayManager;
}

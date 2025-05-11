import { EventEmitter } from "node:events";
import type { GatewayManager, JoinVoiceChannelOptions } from "@fancystudioteam/linkcord-gateway";
import type { VoiceVersion } from "@fancystudioteam/linkcord-types";
import { VoiceManagerError } from "#utils";
import { VoiceConnection } from "./VoiceConnection.js";

/**
 * @public
 */
export class VoiceManager extends EventEmitter<VoiceManagerEvents> {
  readonly gateway: GatewayManager;
  readonly options: VoiceManagerOptions;
  readonly version: VoiceVersion;

  constructor(options: VoiceManagerOptions) {
    super();

    let { version, gatewayManager } = options;

    version ??= 8;

    if (version < 4) {
      throw new VoiceManagerError("Voice versions below 4 are currently deprecated and they should not be used.");
    }

    if (version > 8) {
      throw new VoiceManagerError("Invalid voice gateway version.");
    }

    this.gateway = gatewayManager;
    this.options = options;
    this.version = version;
  }

  async joinVoiceChannel(
    channelId: string,
    guildId: string,
    options: JoinVoiceChannelOptions = {
      selfDeaf: true,
      selfMute: false,
    },
  ): Promise<VoiceConnection> {
    const { shards } = this.gateway;
    const shardId = this.gateway.getShardIdByGuildId(guildId);
    const shard = shards.get(shardId);
    const emitMessages = [
      `Found shard id "${shardId}" for guild "${guildId}".`,
      `Current shards from gateway manager: ${shards.size}.`,
    ];

    this.emit("debug", emitMessages.join("\n"));

    if (!shard) {
      throw new VoiceManagerError(`Cannot find shard for guild "${guildId}".`);
    }

    const { endpoint, token } = await shard.joinVoiceChannel(channelId, guildId, options);
    const voiceConnection = new VoiceConnection(this, endpoint, token);

    return voiceConnection;
  }
}

/**
 * @public
 */
export interface VoiceManagerEvents {
  debug: [message: string];
}

/**
 * @public
 */
export interface VoiceManagerOptions {
  gatewayManager: GatewayManager;
  version?: VoiceVersion;
}

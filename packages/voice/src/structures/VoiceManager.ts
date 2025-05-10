import type { GatewayManager } from "@fancystudioteam/linkcord-gateway";
import {
  GatewayOpcodes,
  type GatewayVoiceStateUpdatePayload,
  type VoiceVersion,
} from "@fancystudioteam/linkcord-types";
import { VoiceManagerError } from "#utils";

/**
 * @public
 */
export class VoiceManager {
  readonly gateway: GatewayManager;
  readonly options: VoiceManagerOptions;
  readonly version: VoiceVersion;

  constructor(options: VoiceManagerOptions) {
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

  joinVoiceChannel(
    channelId: string,
    guildId: string,
    options: JoinVoiceChannelOptions = {
      selfDeaf: true,
      selfMute: false,
    },
  ): void {
    const { shards, getShardIdByGuildId } = this.gateway;
    const shardId = getShardIdByGuildId.bind(this.gateway)(guildId);
    const shard = shards.get(shardId);

    if (!shard) {
      throw new VoiceManagerError(`Cannot find shard for guild ${guildId}.`);
    }

    const voiceStateUpdatePayload: GatewayVoiceStateUpdatePayload = {
      // biome-ignore lint/style/useNamingConvention:
      channel_id: channelId,
      // biome-ignore lint/style/useNamingConvention:
      guild_id: guildId,
      // biome-ignore lint/style/useNamingConvention:
      self_deaf: options.selfDeaf,
      // biome-ignore lint/style/useNamingConvention:
      self_mute: options.selfMute,
    };

    shard.send(GatewayOpcodes.VoiceStateUpdate, voiceStateUpdatePayload);
  }
}

/**
 * @public
 */
export interface JoinVoiceChannelOptions {
  selfDeaf: boolean;
  selfMute: boolean;
}

export interface VoiceManagerOptions {
  gatewayManager: GatewayManager;
  version?: VoiceVersion;
}

import type { GatewayManager } from "@fancystudioteam/linkcord-gateway";
import { GatewayOpcodes, type GatewayVoiceStateUpdatePayload } from "@fancystudioteam/linkcord-types";
import { VoiceManagerError } from "#util";

/**
 * @public
 */
export class VoiceManager {
  gateway: GatewayManager;

  constructor(gatewayManager: GatewayManager) {
    this.gateway = gatewayManager;
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

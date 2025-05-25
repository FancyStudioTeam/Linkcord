import type { GatewayDispatchVoiceServerUpdatePayload } from "@fancystudioteam/linkcord-types";
import { GatewayShardError } from "../../../utils/index.js";
import type { GatewayShard } from "../../GatewayShard.js";

export const VOICE_SERVER_UPDATE = (gatewayShard: GatewayShard, data: GatewayDispatchVoiceServerUpdatePayload) => {
  const { endpoint, guild_id, token } = data;
  const { voiceServerUpdates } = gatewayShard;
  const pendingVoiceServerUpdate = voiceServerUpdates.get(guild_id);

  if (pendingVoiceServerUpdate) {
    const { data, resolve } = pendingVoiceServerUpdate;

    if (!endpoint) {
      throw new GatewayShardError("The voice server update endpoint is missing.", gatewayShard.id);
    }

    data.endpoint = endpoint;
    data.guildId = guild_id;
    data.token = token;

    resolve(data);
    voiceServerUpdates.delete(guild_id);
  }
};

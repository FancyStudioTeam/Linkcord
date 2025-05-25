import type { GatewayDispatchVoiceStateUpdatePayload } from "@fancystudioteam/linkcord-types";
import type { GatewayShard } from "../../GatewayShard.js";

export const VOICE_STATE_UPDATE = (gatewayShard: GatewayShard, data: GatewayDispatchVoiceStateUpdatePayload) => {
  const { guild_id, session_id, user_id } = data;
  const { voiceServerUpdates } = gatewayShard;
  const pendingVoiceServerUpdate = voiceServerUpdates.get(guild_id ?? "");

  if (pendingVoiceServerUpdate) {
    const { data } = pendingVoiceServerUpdate;

    data.sessionId = session_id;
    data.userId = user_id;

    if (guild_id) {
      data.guildId = guild_id;
    }
  }
};

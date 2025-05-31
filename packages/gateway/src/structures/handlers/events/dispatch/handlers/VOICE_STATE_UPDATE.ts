import type { GatewayDispatchVoiceStateUpdatePayload } from "@fancystudioteam/linkcord-types";
import type { DispatchHandler } from "../dispatchHandlers.js";

/**
 * @internal
 */
export const VOICE_STATE_UPDATE: DispatchHandler<GatewayDispatchVoiceStateUpdatePayload> = (
  gatewayShard,
  { guild_id, session_id, user_id },
) => {
  const { voiceServerUpdates } = gatewayShard;
  const pendingVoiceServerUpdate = voiceServerUpdates.get(guild_id ?? "");

  if (pendingVoiceServerUpdate) {
    const { data } = pendingVoiceServerUpdate;

    data.sessionId = session_id;
    data.userId = user_id;
  }
};

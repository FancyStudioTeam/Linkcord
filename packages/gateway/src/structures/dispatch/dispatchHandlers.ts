import { type GatewayDispatch, GatewayDispatchEvents } from "@fancystudioteam/linkcord-types";
import type { GatewayShard } from "../GatewayShard.js";
import { VOICE_SERVER_UPDATE } from "./handlers/voiceServerUpdate.js";
import { VOICE_STATE_UPDATE } from "./handlers/voiceStateUpdate.js";

export const dispatchHandlers: Partial<DispatchHandlers> = {
  [GatewayDispatchEvents.VoiceServerUpdate]: VOICE_SERVER_UPDATE,
  [GatewayDispatchEvents.VoiceStateUpdate]: VOICE_STATE_UPDATE,
};

type DispatchHandlers = {
  [Event in GatewayDispatch as Event["t"]]: (gatewayShard: GatewayShard, data: Event["d"]) => void;
};

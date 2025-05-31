import { type GatewayDispatch, GatewayDispatchEvents } from "@fancystudioteam/linkcord-types";
import type { GatewayShard } from "../GatewayShard.js";
import { READY } from "./handlers/READY.js";
import { VOICE_SERVER_UPDATE } from "./handlers/VOICE_SERVER_UPDATE.js";
import { VOICE_STATE_UPDATE } from "./handlers/VOICE_STATE_UPDATE.js";

export const dispatchHandlers: Partial<DispatchHandlers> = {
  [GatewayDispatchEvents.Ready]: READY,
  [GatewayDispatchEvents.VoiceServerUpdate]: VOICE_SERVER_UPDATE,
  [GatewayDispatchEvents.VoiceStateUpdate]: VOICE_STATE_UPDATE,
};

type DispatchHandlers = {
  [Event in GatewayDispatch as Event["t"]]: (gatewayShard: GatewayShard, data: Event["d"]) => void;
};

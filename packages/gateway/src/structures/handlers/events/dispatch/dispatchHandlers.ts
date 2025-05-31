import { type GatewayDispatch, GatewayDispatchEvents } from "@fancystudioteam/linkcord-types";
import type { GatewayShard } from "../../../GatewayShard.js";
import { READY } from "./handlers/READY.js";
import { VOICE_SERVER_UPDATE } from "./handlers/VOICE_SERVER_UPDATE.js";
import { VOICE_STATE_UPDATE } from "./handlers/VOICE_STATE_UPDATE.js";

/**
 * @internal
 */
export const dispatchHandlers: Partial<DispatchHandlers> = {
  [GatewayDispatchEvents.Ready]: READY,
  [GatewayDispatchEvents.VoiceServerUpdate]: VOICE_SERVER_UPDATE,
  [GatewayDispatchEvents.VoiceStateUpdate]: VOICE_STATE_UPDATE,
};

/**
 * @internal
 */
export type DispatchHandler<Data> = (gatewayShard: GatewayShard, data: Data) => void;

/**
 * @internal
 */
type DispatchHandlers = {
  [Event in GatewayDispatch as Event["t"]]: DispatchHandler<Event["d"]>;
};

import type { GatewayEventBase } from "../base/event.js";
import type { GatewayOpcodes } from "../event.js";
import type { GatewayPresence } from "../presence.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#update-presence
 */
export type GatewayPresenceUpdate = GatewayEventBase<GatewayOpcodes.PresenceUpdate, GatewayPresenceUpdatePayload>;

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#update-presence-gateway-presence-update-structure
 */
export type GatewayPresenceUpdatePayload = GatewayPresence;

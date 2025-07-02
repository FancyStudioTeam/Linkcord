import type { GatewayEventBase } from "../base/event.js";
import type { GatewayOpcodes } from "../event.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#invalid-session
 */
export type GatewayInvalidSession = GatewayEventBase<
	GatewayOpcodes.InvalidSession,
	GatewayInvalidSessionPayload
>;

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#invalid-session-example-gateway-invalid-session
 */
export type GatewayInvalidSessionPayload = boolean;

import type { GatewayEventBase } from "../base/event.js";
import type { GatewayOpcodes } from "../event.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#reconnect
 */
export type GatewayReconnect = GatewayEventBase<GatewayOpcodes.Reconnect, GatewayReconnectPayload>;

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#reconnect-example-gateway-reconnect
 */
export type GatewayReconnectPayload = boolean | null;

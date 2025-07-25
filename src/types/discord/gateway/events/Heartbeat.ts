import type { GatewayEventBase } from "../base/event.js";
import type { GatewayOpcodes } from "../event.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#heartbeat
 */
export type GatewayHeartbeat = GatewayEventBase<GatewayOpcodes.Heartbeat, GatewayHeartbeatPayload>;

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#heartbeat-example-heartbeat
 */
export type GatewayHeartbeatPayload = number | null;

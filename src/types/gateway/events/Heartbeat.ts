import type { GatewayOpcodes } from '../enums.js';
import type { GatewayEventBase } from './Base.js';

/**
 * @see https://discord.com/developers/docs/events/gateway-events#heartbeat
 */
export type GatewayHeartbeatEvent = GatewayEventBase<GatewayOpcodes.Heartbeat, GatewayHeartbeatEventPayload>;

/**
 * @see hhttps://discord.com/developers/docs/events/gateway-events#heartbeat-example-heartbeat
 */
export type GatewayHeartbeatEventPayload = number | null;

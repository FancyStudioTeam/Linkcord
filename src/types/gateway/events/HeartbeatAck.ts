import type { GatewayOpcodes } from '../enums.js';
import type { GatewayEventBase } from './Base.js';

/**
 * @see https://discord.com/developers/docs/events/gateway#heartbeat-interval-example-heartbeat-ack
 */
export type GatewayHeartbeatAckEvent = Omit<GatewayEventBase<GatewayOpcodes.HeartbeatAck, GatewayHeartbeatAckEventPayload>, 'd'>;

/**
 * @see https://discord.com/developers/docs/events/gateway#heartbeat-interval-example-heartbeat-ack
 */
export type GatewayHeartbeatAckEventPayload = never;

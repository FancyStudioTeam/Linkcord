import type { GatewayOpcodes } from '../enums.js';
import type { GatewayEventBase } from './Base.js';

/**
 * @see https://discord.com/developers/docs/events/gateway-events#hello-hello-structure
 */
export interface GatewayHelloEventPayload {
	heartbeat_interval: number;
}

/**
 * @see https://discord.com/developers/docs/events/gateway-events#hello
 */
export type GatewayHelloEvent = GatewayEventBase<GatewayOpcodes.Hello, GatewayHelloEventPayload>;

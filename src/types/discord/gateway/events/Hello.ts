import type { GatewayEventBase } from "../base/event.js";
import type { GatewayOpcodes } from "../event.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#hello-hello-structure
 */
export interface GatewayHelloPayload {
	heartbeat_interval: number;
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#hello
 */
export type GatewayHello = GatewayEventBase<GatewayOpcodes.Hello, GatewayHelloPayload>;

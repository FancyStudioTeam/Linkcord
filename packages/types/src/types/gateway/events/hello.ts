import type { GatewayEventBase } from "../base/event.js";
import type { GatewayOpcodes } from "../event.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#hello
 */
export interface GatewayHelloEvent extends GatewayEventBase<GatewayOpcodes.Hello, GatewayHelloEventData> {}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#hello-hello-structure
 */
export interface GatewayHelloEventData {
  heartbeat_interval: number;
}

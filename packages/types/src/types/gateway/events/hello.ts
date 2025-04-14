import type { GatewayEventBase } from "../base/event.js";
import type { GatewayOpcodes } from "../event.js";

/**
 * Represents the Discord gateway payload for the `HELLO` opcode.
 * @see https://discord.com/developers/docs/events/gateway-events#hello
 */
export interface GatewayHelloEvent extends GatewayEventBase<GatewayOpcodes.Hello, GatewayHelloEventData> {}

/**
 * Represents the Discord gateway payload data for the `HELLO` opcode.
 * @see https://discord.com/developers/docs/events/gateway-events#hello-hello-structure
 */
export interface GatewayHelloEventData {
  /** The time interval at which the heartbeat should be sent.  */
  heartbeat_interval: number;
}

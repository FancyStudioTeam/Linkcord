import type { GatewayOpcodes } from "./enums.js";

/**
 * Represents the base structure of a Discord gateway event.
 * @see https://discord.com/developers/docs/events/gateway-events#payload-structure
 */
export interface GatewayEventBase<Opcode extends GatewayOpcodes, Data = null> {
	/** The data of the event. */
	d: Data;
	/** The opcode of the event. */
	op: Opcode;
}

/**
 * Represents the payload of the {@link GatewayOpcodes.Hello | `HELLO`} event from the Discord gateway.
 * @see https://discord.com/developers/docs/events/gateway-events#hello-hello-structure
 */
export interface GatewayHelloEventPayload {
	/** The interval at which heartbeats should be sent. */
	heartbeat_interval: number;
}

/**
 * Represents the events from the Discord gateway.
 * @see https://discord.com/developers/docs/events/gateway-events
 */
export type GatewayEvent = GatewayHelloEvent;

/**
 * Represents the {@link GatewayOpcodes.Hello | `HELLO`} event from the Discord gateway.
 * @see https://discord.com/developers/docs/events/gateway-events#hello
 */
export type GatewayHelloEvent = GatewayEventBase<GatewayOpcodes.Hello, GatewayHelloEventPayload>;

import type { GatewayDispatchReadyEvent } from "./dispatch.js";
import type { GatewayDispatchEvents, GatewayOpcodes } from "./enums.js";

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
 * Represents the base structure of a Discord gateway dispatch event.
 * @see https://discord.com/developers/docs/events/gateway-events#payload-structure
 */
export interface GatewayEventDispatchBase<Event extends GatewayDispatchEvents, Data>
	extends GatewayEventBase<GatewayOpcodes.Dispatch, Data> {
	/** The sequence of the event. */
	s: number | null;
	/** The type of the event. */
	t: Event;
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
 * Represents the payload of the {@link GatewayOpcodes.Identify | `IDENTIFY`} event from the Discord gateway.
 * @see https://discord.com/developers/docs/events/gateway-events#identify-identify-structure
 */
export interface GatewayIdentifyEventPayload {
	/** Whether to compress the payloads from the client. */
	compress?: boolean;
	/** The intents of the client. */
	intents: number;
	/** The number of members where the gateway will stop sending offline members. */
	large_threshold?: number;
	/** The presence of the session of the client. */
	// TODO: Add "presence" to "GatewayIdentifyEventPayload".
	// presence?: GatewayPresence;
	/** The connection properties of the session of the client. */
	properties: GatewayIdentifyEventPayloadProperties;
	/** The shard information of the session of the client. */
	shard?: [number, number];
	/** The token of the client. */
	token: string;
}

/**
 * Represents the connection properties of the {@link GatewayOpcodes.Identify | `IDENTIFY`} event from the Discord gateway.
 * @see https://discord.com/developers/docs/events/gateway-events#identify-identify-connection-properties
 */
export interface GatewayIdentifyEventPayloadProperties {
	/** The browser of the client. */
	browser: string;
	/** The device of the client. */
	device: string;
	/** The operating system of the client. */
	os: string;
}

/**
 * Represents the {@link GatewayOpcodes.Dispatch | `DISPATCH`} event from the Discord gateway.
 * @see https://discord.com/developers/docs/events/gateway-events#receive-events
 */
export type GatewayDispatchEvent = GatewayDispatchReadyEvent;

/**
 * Represents the events from the Discord gateway.
 * @see https://discord.com/developers/docs/events/gateway-events
 */
export type GatewayEvent = GatewayReceiveEvent | GatewaySendEvent;

/**
 * Represents the {@link GatewayOpcodes.HeartbeatAck | `HEARTBEAT_ACK`} event from the Discord gateway.
 * @see https://discord.com/developers/docs/events/gateway#heartbeat-interval-example-heartbeat-ack
 */
export type GatewayHeartbeatAckEvent = Omit<
	GatewayEventBase<GatewayOpcodes.HeartbeatAck, GatewayHeartbeatAckEventPayload>,
	"d"
>;

/**
 * Represents the payload of the {@link GatewayOpcodes.HeartbeatAck | `HEARTBEAT_ACK`} event from the Discord gateway.
 * @see https://discord.com/developers/docs/events/gateway#heartbeat-interval-example-heartbeat-ack
 */
export type GatewayHeartbeatAckEventPayload = never;

/**
 * Represents the {@link GatewayOpcodes.Heartbeat | `HEARTBEAT`} event from the Discord gateway.
 * @see https://discord.com/developers/docs/events/gateway-events#heartbeat
 */
export type GatewayHeartbeatEvent = GatewayEventBase<
	GatewayOpcodes.Heartbeat,
	GatewayHeartbeatEventPayload
>;

/**
 * Represents the payload of the {@link GatewayOpcodes.Heartbeat | `HEARTBEAT`} event from the Discord gateway.
 * @see hhttps://discord.com/developers/docs/events/gateway-events#heartbeat-example-heartbeat
 */
export type GatewayHeartbeatEventPayload = number | null;

/**
 * Represents the {@link GatewayOpcodes.Hello | `HELLO`} event from the Discord gateway.
 * @see https://discord.com/developers/docs/events/gateway-events#hello
 */
export type GatewayHelloEvent = GatewayEventBase<GatewayOpcodes.Hello, GatewayHelloEventPayload>;

/**
 * Represents the {@link GatewayOpcodes.Identify | `IDENTIFY`} event from the Discord gateway.
 * @see https://discord.com/developers/docs/events/gateway-events#identify
 */
export type GatewayIdentifyEvent = GatewayEventBase<
	GatewayOpcodes.Identify,
	GatewayIdentifyEventPayload
>;

/**
 * Represents the {@link GatewayOpcodes.InvalidSession | `INVALID_SESSION`} event from the Discord gateway.
 * @see https://discord.com/developers/docs/events/gateway-events#invalid-session
 */
export type GatewayInvalidSessionEvent = GatewayEventBase<
	GatewayOpcodes.InvalidSession,
	GatewayInvalidSessionEventPayload
>;

/**
 * Represents the payload of the {@link GatewayOpcodes.InvalidSession | `INVALID_SESSION`} event from the Discord gateway.
 * @see https://discord.com/developers/docs/events/gateway-events#invalid-session-example-gateway-invalid-session
 */
export type GatewayInvalidSessionEventPayload = boolean;

/**
 * Represents the events that can be received from the Discord gateway.
 * @see https://discord.com/developers/docs/events/gateway-events#receive-events
 */
export type GatewayReceiveEvent =
	| GatewayDispatchEvent
	| GatewayHeartbeatAckEvent
	| GatewayHelloEvent
	| GatewayInvalidSessionEvent
	| GatewayReconnectEvent;

/**
 * Represents the {@link GatewayOpcodes.Reconnect | `RECONNECT`} event from the Discord gateway.
 * @see https://discord.com/developers/docs/events/gateway-events#reconnect
 */
export type GatewayReconnectEvent = GatewayEventBase<
	GatewayOpcodes.Reconnect,
	GatewayReconnectEventPayload
>;

/**
 * Represents the payload of the {@link GatewayOpcodes.Reconnect | `RECONNECT`} event from the Discord gateway.
 * @see https://discord.com/developers/docs/events/gateway-events#reconnect-example-gateway-reconnect
 */
export type GatewayReconnectEventPayload = null;

/**
 * Represents the events that can be sent to the Discord gateway.
 * @see https://discord.com/developers/docs/events/gateway-events#send-events
 */
export type GatewaySendEvent = GatewayHeartbeatEvent | GatewayIdentifyEvent;

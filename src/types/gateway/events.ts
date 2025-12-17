import type { GatewayDispatchMessageCreateEvent, GatewayDispatchReadyEvent } from "./dispatch.js";
import type { GatewayDispatchEvents, GatewayOpcodes } from "./enums.js";

/**
 * @see https://discord.com/developers/docs/events/gateway-events#payload-structure
 */
export interface GatewayEventBase<Opcode extends GatewayOpcodes, Data = null> {
	d: Data;
	op: Opcode;
}

/**
 * @see https://discord.com/developers/docs/events/gateway-events#payload-structure
 */
export interface GatewayEventDispatchBase<Event extends GatewayDispatchEvents, Data>
	extends GatewayEventBase<GatewayOpcodes.Dispatch, Data> {
	s: number | null;
	t: Event;
}

/**
 * @see https://discord.com/developers/docs/events/gateway-events#hello-hello-structure
 */
export interface GatewayHelloEventPayload {
	heartbeat_interval: number;
}

/**
 * @see https://discord.com/developers/docs/events/gateway-events#identify-identify-structure
 */
export interface GatewayIdentifyEventPayload {
	compress?: boolean;
	intents: number;
	large_threshold?: number;
	properties: GatewayIdentifyEventPayloadProperties;
	shard?: [
		number,
		number,
	];
	token: string;
}

/**
 * @see https://discord.com/developers/docs/events/gateway-events#identify-identify-connection-properties
 */
export interface GatewayIdentifyEventPayloadProperties {
	browser: string;
	device: string;
	os: string;
}

/**
 * @see https://discord.com/developers/docs/events/gateway-events#resume-resume-structure
 */
export interface GatewayResumeEventPayload {
	seq: number;
	session_id: string;
	token: string;
}

/**
 * @see https://discord.com/developers/docs/events/gateway-events#receive-events
 */
export type GatewayDispatchEvent = GatewayDispatchMessageCreateEvent | GatewayDispatchReadyEvent;

/**
 * @see https://discord.com/developers/docs/events/gateway-events
 */
export type GatewayEvent = GatewayReceiveEvent | GatewaySendEvent;

/**
 * @see https://discord.com/developers/docs/events/gateway#heartbeat-interval-example-heartbeat-ack
 */
export type GatewayHeartbeatAckEvent = Omit<
	GatewayEventBase<GatewayOpcodes.HeartbeatAck, GatewayHeartbeatAckEventPayload>,
	"d"
>;

/**
 * @see https://discord.com/developers/docs/events/gateway#heartbeat-interval-example-heartbeat-ack
 */
export type GatewayHeartbeatAckEventPayload = never;

/**
 * @see https://discord.com/developers/docs/events/gateway-events#heartbeat
 */
export type GatewayHeartbeatEvent = GatewayEventBase<GatewayOpcodes.Heartbeat, GatewayHeartbeatEventPayload>;

/**
 * @see hhttps://discord.com/developers/docs/events/gateway-events#heartbeat-example-heartbeat
 */
export type GatewayHeartbeatEventPayload = number | null;

/**
 * @see https://discord.com/developers/docs/events/gateway-events#hello
 */
export type GatewayHelloEvent = GatewayEventBase<GatewayOpcodes.Hello, GatewayHelloEventPayload>;

/**
 * @see https://discord.com/developers/docs/events/gateway-events#identify
 */
export type GatewayIdentifyEvent = GatewayEventBase<GatewayOpcodes.Identify, GatewayIdentifyEventPayload>;

/**
 * @see https://discord.com/developers/docs/events/gateway-events#invalid-session
 */
export type GatewayInvalidSessionEvent = GatewayEventBase<
	GatewayOpcodes.InvalidSession,
	GatewayInvalidSessionEventPayload
>;

/**
 * @see https://discord.com/developers/docs/events/gateway-events#invalid-session-example-gateway-invalid-session
 */
export type GatewayInvalidSessionEventPayload = boolean;

/**
 * @see https://discord.com/developers/docs/events/gateway-events#receive-events
 */
export type GatewayReceiveEvent =
	| GatewayDispatchEvent
	| GatewayHeartbeatAckEvent
	| GatewayHeartbeatEvent
	| GatewayHelloEvent
	| GatewayInvalidSessionEvent
	| GatewayReconnectEvent;

/**
 * @see https://discord.com/developers/docs/events/gateway-events#reconnect
 */
export type GatewayReconnectEvent = GatewayEventBase<GatewayOpcodes.Reconnect, GatewayReconnectEventPayload>;

/**
 * @see https://discord.com/developers/docs/events/gateway-events#reconnect-example-gateway-reconnect
 */
export type GatewayReconnectEventPayload = null;

/**
 * @see https://discord.com/developers/docs/events/gateway-events#resume
 */
export type GatewayResumeEvent = GatewayEventBase<GatewayOpcodes.Resume, GatewayResumeEventPayload>;

/**
 * @see https://discord.com/developers/docs/events/gateway-events#send-events
 */
export type GatewaySendEvent = GatewayHeartbeatEvent | GatewayIdentifyEvent | GatewayResumeEvent;

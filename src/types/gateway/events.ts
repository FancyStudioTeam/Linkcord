import type { GatewayDispatchEvent } from './events/Dispatch.js';
import type { GatewayHeartbeatEvent } from './events/Heartbeat.js';
import type { GatewayHeartbeatAckEvent } from './events/HeartbeatAck.js';
import type { GatewayHelloEvent } from './events/Hello.js';
import type { GatewayIdentifyEvent } from './events/Identify.js';
import type { GatewayInvalidSessionEvent } from './events/InvalidSession.js';
import type { GatewayReconnectEvent } from './events/Reconnect.js';
import type { GatewayResumeEvent } from './events/Resume.js';

/**
 * @see https://discord.com/developers/docs/events/gateway-events
 */
export type GatewayEvent = GatewayReceiveEvent | GatewaySendEvent;

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
 * @see https://discord.com/developers/docs/events/gateway-events#send-events
 */
export type GatewaySendEvent = GatewayHeartbeatEvent | GatewayIdentifyEvent | GatewayResumeEvent;

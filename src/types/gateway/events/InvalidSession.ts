import type { GatewayOpcodes } from '../enums.js';
import type { GatewayEventBase } from './Base.js';

/**
 * @see https://discord.com/developers/docs/events/gateway-events#invalid-session
 */
export type GatewayInvalidSessionEvent = GatewayEventBase<GatewayOpcodes.InvalidSession, GatewayInvalidSessionEventPayload>;

/**
 * @see https://discord.com/developers/docs/events/gateway-events#invalid-session-example-gateway-invalid-session
 */
export type GatewayInvalidSessionEventPayload = boolean;

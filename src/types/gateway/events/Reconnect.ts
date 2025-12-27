import type { GatewayOpcodes } from '../enums.js';
import type { GatewayEventBase } from './Base.js';

/**
 * @see https://discord.com/developers/docs/events/gateway-events#reconnect
 */
export type GatewayReconnectEvent = GatewayEventBase<GatewayOpcodes.Reconnect, GatewayReconnectEventPayload>;

/**
 * @see https://discord.com/developers/docs/events/gateway-events#reconnect-example-gateway-reconnect
 */
export type GatewayReconnectEventPayload = null;

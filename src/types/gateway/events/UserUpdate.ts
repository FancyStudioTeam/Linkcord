import type { RawUser } from '#types/resources/index.js';
import type { GatewayDispatchEvents } from '../enums.js';
import type { GatewayDispatchEventBase } from './Dispatch.js';

/**
 * @see https://discord.com/developers/docs/events/gateway-events#user-update
 */
export type GatewayDispatchUserUpdateEvent = GatewayDispatchEventBase<
	GatewayDispatchEvents.UserUpdate,
	GatewayDispatchUserUpdateEventPayload
>;

/**
 * @see https://discord.com/developers/docs/events/gateway-events#user-update
 */
export type GatewayDispatchUserUpdateEventPayload = RawUser;

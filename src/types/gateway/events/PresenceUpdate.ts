import type { RawUser } from '#types/resources/index.js';
import type { GatewayDispatchEvents } from '../enums.js';
import type { GatewayDispatchEventBase } from './Dispatch.js';

/**
 * @see https://discord.com/developers/docs/events/gateway-events#presence-update-presence-update-event-fields
 */
export interface GatewayDispatchPresenceUpdateEventPayload {
	user: GatewayDispatchPresenceUpdateUser;
}

/**
 * @see https://discord.com/developers/docs/events/gateway-events#presence-update
 */
export type GatewayDispatchPresenceUpdateEvent = GatewayDispatchEventBase<
	GatewayDispatchEvents.PresenceUpdate,
	GatewayDispatchPresenceUpdateEventPayload
>;

/**
 * @see https://discord.com/developers/docs/events/gateway-events#presence-update
 */
export type GatewayDispatchPresenceUpdateUser = Required<Partial<RawUser>, 'id'>;

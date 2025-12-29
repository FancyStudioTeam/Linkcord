import type { GatewayDispatchEvents, GatewayOpcodes } from '../enums.js';
import type { GatewayEventBase } from './Base.js';
import type { GatewayDispatchGuildCreateEvent } from './GuildCreate.js';
import type { GatewayDispatchGuildMemberUpdateEvent } from './GuildMemberUpdate.js';
import type { GatewayDispatchGuildUpdateEvent } from './GuildUpdate.js';
import type { GatewayDispatchMessageCreateEvent } from './MessageCreate.js';
import type { GatewayDispatchPresenceUpdateEvent } from './PresenceUpdate.js';
import type { GatewayDispatchReadyEvent } from './Ready.js';
import type { GatewayDispatchUserUpdateEvent } from './UserUpdate.js';

/**
 * @see https://discord.com/developers/docs/events/gateway-events#payload-structure
 */
export interface GatewayDispatchEventBase<Event extends GatewayDispatchEvents, Data>
	extends GatewayEventBase<GatewayOpcodes.Dispatch, Data> {
	s: number | null;
	t: Event;
}

/**
 * @see https://discord.com/developers/docs/events/gateway-events#receive-events
 */
export type GatewayDispatchEvent =
	| GatewayDispatchGuildCreateEvent
	| GatewayDispatchGuildMemberUpdateEvent
	| GatewayDispatchGuildUpdateEvent
	| GatewayDispatchMessageCreateEvent
	| GatewayDispatchPresenceUpdateEvent
	| GatewayDispatchReadyEvent
	| GatewayDispatchUserUpdateEvent;

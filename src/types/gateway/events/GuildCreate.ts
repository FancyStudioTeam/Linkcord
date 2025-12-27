import type { APIGuild, APIGuildMember } from '#types/resources/index.js';
import type { GatewayDispatchEvents } from '../enums.js';
import type { GatewayDispatchEventBase } from './Dispatch.js';

/**
 * @see https://discord.com/developers/docs/events/gateway-events#guild-create-guild-create-extra-fields
 */
export interface GatewayDispatchGuildCreateEventPayload extends APIGuild {
	large: boolean;
	members: APIGuildMember[];
	unavailable?: boolean;
}

/**
 * @see https://discord.com/developers/docs/events/gateway-events#guild-create
 */
export type GatewayDispatchGuildCreateEvent = GatewayDispatchEventBase<
	GatewayDispatchEvents.GuildCreate,
	GatewayDispatchGuildCreateEventPayload
>;

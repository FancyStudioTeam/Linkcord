import type { APIGuild } from '#types/resources/index.js';
import type { GatewayDispatchEvents } from '../enums.js';
import type { GatewayDispatchEventBase } from './Dispatch.js';

/**
 * @see https://discord.com/developers/docs/events/gateway-events#guild-update
 */
export type GatewayDispatchGuildUpdateEvent = GatewayDispatchEventBase<
	GatewayDispatchEvents.GuildUpdate,
	GatewayDispatchGuildUpdateEventPayload
>;

/**
 * @see https://discord.com/developers/docs/events/gateway-events#guild-update
 */
export type GatewayDispatchGuildUpdateEventPayload = APIGuild;

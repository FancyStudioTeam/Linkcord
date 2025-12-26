import type { APIVersion, Snowflake } from '#types/miscellaneous/discord.js';
import type { APIGatewayApplication, APIMessage, APIUnavailableGuild, APIUser } from '#types/resources/index.js';
import type { GatewayDispatchEvents } from './enums.js';
import type { GatewayEventDispatchBase } from './events.js';

/**
 * @see https://discord.com/developers/docs/events/gateway-events#message-create-message-create-extra-fields
 */
export interface GatewayDispatchMessageCreateEventPayload extends APIMessage {
	guild_id?: Snowflake;
}

/**
 * @see https://discord.com/developers/docs/events/gateway-events#ready-ready-event-fields
 */
export interface GatewayDispatchReadyEventPayload {
	application: APIGatewayApplication;
	guilds: APIUnavailableGuild[];
	resume_gateway_url: string;
	session_id: string;
	shard: [
		number,
		number,
	];
	user: APIUser;
	v: APIVersion;
}

/**
 * @see https://discord.com/developers/docs/events/gateway-events#message-create
 */
export type GatewayDispatchMessageCreateEvent = GatewayEventDispatchBase<
	GatewayDispatchEvents.MessageCreate,
	GatewayDispatchMessageCreateEventPayload
>;

/**
 * @see https://discord.com/developers/docs/events/gateway-events#ready
 */
export type GatewayDispatchReadyEvent = GatewayEventDispatchBase<GatewayDispatchEvents.Ready, GatewayDispatchReadyEventPayload>;

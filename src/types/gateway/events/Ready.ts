import type { APIVersion } from '#types/miscellaneous/discord.js';
import type { APIGatewayApplication, APIUnavailableGuild, RawUser } from '#types/resources/index.js';
import type { GatewayDispatchEvents } from '../enums.js';
import type { GatewayDispatchEventBase } from './Dispatch.js';

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
	user: RawUser;
	v: APIVersion;
}

/**
 * @see https://discord.com/developers/docs/events/gateway-events#ready
 */
export type GatewayDispatchReadyEvent = GatewayDispatchEventBase<GatewayDispatchEvents.Ready, GatewayDispatchReadyEventPayload>;

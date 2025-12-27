import type { Snowflake } from '#types/miscellaneous/discord.js';
import type { APIMessage } from '#types/resources/index.js';
import type { GatewayDispatchEvents } from '../enums.js';
import type { GatewayDispatchEventBase } from './Dispatch.js';

/**
 * @see https://discord.com/developers/docs/events/gateway-events#message-create-message-create-extra-fields
 */
export interface GatewayDispatchMessageCreateEventPayload extends APIMessage {
	guild_id?: Snowflake;
}

/**
 * @see https://discord.com/developers/docs/events/gateway-events#message-create
 */
export type GatewayDispatchMessageCreateEvent = GatewayDispatchEventBase<
	GatewayDispatchEvents.MessageCreate,
	GatewayDispatchMessageCreateEventPayload
>;

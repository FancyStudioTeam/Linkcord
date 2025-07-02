import type { Snowflake } from "#types/raw/shared/discord.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../Dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#webhooks-update-webhooks-update-event-fields
 */
export interface GatewayDispatchWebhooksUpdatePayload {
	channel_id: Snowflake;
	guild_id: Snowflake;
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#webhooks-update
 */
export type GatewayDispatchWebhooksUpdate = GatewayDispatchEventBase<
	GatewayDispatchEvents.WebhooksUpdate,
	GatewayDispatchWebhooksUpdatePayload
>;

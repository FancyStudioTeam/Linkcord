import type { GatewayDispatchEvents } from "#types/gateway";
import type { GatewayDispatchEventBase } from "#types/gateway/base/event";
import type { Snowflake } from "#types/shared";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#webhooks-update
 */
export interface GatewayDispatchWebhooksUpdateEvent
  extends GatewayDispatchEventBase<GatewayDispatchEvents.WebhooksUpdate, GatewayDispatchWebhooksUpdateEventData> {}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#webhooks-update-webhooks-update-event-fields
 */
export interface GatewayDispatchWebhooksUpdateEventData {
  channel_id: Snowflake;
  guild_id: Snowflake;
}

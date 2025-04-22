import type { Snowflake } from "#types/shared";
import type { GatewayDispatchEventBase } from "../base/event.js";
import type { GatewayDispatchEvents } from "../event.js";

/**
 * Represents the Discord gateway payload for the `WEBHOOKS_UPDATE` event.
 * @see https://discord.com/developers/docs/events/gateway-events#webhooks-update
 */
export interface GatewayDispatchWebhooksUpdateEvent
  extends GatewayDispatchEventBase<GatewayDispatchEvents.WebhooksUpdate, GatewayDispatchWebhooksUpdateEventData> {}

/**
 * Represents the Discord gateway payload data for the `WEBHOOKS_UPDATE` event.
 * @see https://discord.com/developers/docs/events/gateway-events#webhooks-update-webhooks-update-event-fields
 */
export interface GatewayDispatchWebhooksUpdateEventData {
  /** The id of the channel parent. */
  channel_id: Snowflake;
  /** The id of the guild at which the webhooks were updated. */
  guild_id: Snowflake;
}

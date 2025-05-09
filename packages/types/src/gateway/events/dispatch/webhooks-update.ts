import type { Snowflake } from "#shared";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../dispatch.js";

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

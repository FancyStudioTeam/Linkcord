import type { GatewayDispatchEvents } from "#types/gateway";
import type { GatewayDispatchEventBase } from "#types/gateway/base/event";
import type { Snowflake } from "#types/shared";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#message-delete-bulk
 */
export interface GatewayDispatchMessageDeleteBulkEvent
  extends GatewayDispatchEventBase<
    GatewayDispatchEvents.MessageDeleteBulk,
    GatewayDispatchMessageDeleteBulkEventData
  > {}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#message-delete-bulk-message-delete-bulk-event-fields
 */
export interface GatewayDispatchMessageDeleteBulkEventData {
  channel_id: Snowflake;
  guild_id?: Snowflake;
  ids: Snowflake[];
}

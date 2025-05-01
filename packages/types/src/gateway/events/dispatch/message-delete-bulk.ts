import type { Snowflake } from "#shared";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../dispatch.js";

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

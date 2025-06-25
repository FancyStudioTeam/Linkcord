import type { Snowflake } from "#types/raw/shared/discord.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../Dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#message-delete-bulk-message-delete-bulk-event-fields
 */
export interface GatewayDispatchMessageDeleteBulkPayload {
  channel_id: Snowflake;
  guild_id?: Snowflake;
  ids: Snowflake[];
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#message-delete-bulk
 */
export type GatewayDispatchMessageDeleteBulk = GatewayDispatchEventBase<
  GatewayDispatchEvents.MessageDeleteBulk,
  GatewayDispatchMessageDeleteBulkPayload
>;

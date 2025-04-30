import type { APIUser } from "#payloads";
import type { Snowflake } from "#shared";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../dispatch.js";

/**
 * @see https://discord.com/developers/docs/events/gateway-events#guild-member-remove
 */
export interface GatewayDispatchGuildMemberRemoveEvent
  extends GatewayDispatchEventBase<
    GatewayDispatchEvents.GuildMemberRemove,
    GatewayDispatchGuildMemberRemoveEventData
  > {}

/**
 * @see https://discord.com/developers/docs/events/gateway-events#guild-member-remove-guild-member-remove-event-fields
 */
export interface GatewayDispatchGuildMemberRemoveEventData {
  guild_id: Snowflake;
  user: APIUser;
}

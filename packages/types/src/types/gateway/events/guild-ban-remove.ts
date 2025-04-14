import type { APIUser } from "#types/payloads";
import type { Snowflake } from "#types/shared";
import type { GatewayDispatchEventBase } from "../base/event.js";
import type { GatewayDispatchEvents } from "../event.js";

/**
 * Represents the Discord gateway payload for the `GUILD_BAN_REMOVE` event.
 * @see https://discord.com/developers/docs/events/gateway-events#guild-ban-remove
 */
export interface GatewayDispatchGuildBanRemoveEvent
  extends GatewayDispatchEventBase<GatewayDispatchEvents.GuildBanRemove, GatewayDispatchGuildBanRemoveEventData> {}

/**
 * Represents the Discord gateway payload data for the `GUILD_BAN_REMOVE` event.
 * @see https://discord.com/developers/docs/events/gateway-events#guild-ban-remove-guild-ban-remove-event-fields
 */
export interface GatewayDispatchGuildBanRemoveEventData {
  /** The id of the guild where the ban was removed. */
  guild_id: Snowflake;
  /** The user who was unbanned. */
  user: APIUser;
}

import type { APIUser } from "#types/payloads";
import type { Snowflake } from "#types/shared";
import type { GatewayDispatchEventBase } from "../base/event.js";
import type { GatewayDispatchEvents } from "../event.js";

/**
 * Represents the Discord gateway payload for the `GUILD_BAN_ADD` event.
 * @see https://discord.com/developers/docs/events/gateway-events#guild-ban-add
 */
export interface GatewayDispatchGuildBanAddEvent
  extends GatewayDispatchEventBase<GatewayDispatchEvents.GuildBanAdd, GatewayDispatchGuildBanAddEventData> {}

/**
 * Represents the Discord gateway payload data for the `GUILD_BAN_ADD` event.
 * @see https://discord.com/developers/docs/events/gateway-events#guild-ban-add-guild-ban-add-event-fields
 */
export interface GatewayDispatchGuildBanAddEventData {
  /** The id of the guild where the ban was added. */
  guild_id: Snowflake;
  /** The user who was banned. */
  user: APIUser;
}

import type { GatewayDispatchEvents } from "#types/gateway";
import type { GatewayDispatchEventBase } from "#types/gateway/base/event";
import type { APIUser } from "#types/payloads";
import type { Snowflake } from "#types/shared";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-ban-add
 */
export interface GatewayDispatchGuildBanAddEvent
  extends GatewayDispatchEventBase<GatewayDispatchEvents.GuildBanAdd, GatewayDispatchGuildBanAddEventData> {}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-ban-add-guild-ban-add-event-fields
 */
export interface GatewayDispatchGuildBanAddEventData {
  guild_id: Snowflake;
  user: APIUser;
}

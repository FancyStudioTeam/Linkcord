import type { GatewayDispatchEvents } from "#types/gateway";
import type { GatewayDispatchEventBase } from "#types/gateway/base/event";
import type { APIUser } from "#types/payloads";
import type { Snowflake } from "#types/shared";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-ban-remove
 */
export interface GatewayDispatchGuildBanRemoveEvent
  extends GatewayDispatchEventBase<GatewayDispatchEvents.GuildBanRemove, GatewayDispatchGuildBanRemoveEventData> {}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-ban-remove-guild-ban-remove-event-fields
 */
export interface GatewayDispatchGuildBanRemoveEventData {
  guild_id: Snowflake;
  user: APIUser;
}

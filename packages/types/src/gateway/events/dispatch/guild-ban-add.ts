import type { APIUser } from "#payloads";
import type { Snowflake } from "#shared";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../../event.js";

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

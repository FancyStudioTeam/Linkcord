import type { APIUser } from "#payloads";
import type { Snowflake } from "#shared";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../dispatch.js";

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

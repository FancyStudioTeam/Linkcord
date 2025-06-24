import type { APIUser } from "../../../payloads/user.js";
import type { Snowflake } from "../../../shared/discord.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-ban-remove-guild-ban-remove-event-fields
 */
export interface GatewayDispatchGuildBanRemovePayload {
  guild_id: Snowflake;
  user: APIUser;
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-ban-remove
 */
export type GatewayDispatchGuildBanRemove = GatewayDispatchEventBase<
  GatewayDispatchEvents.GuildBanRemove,
  GatewayDispatchGuildBanRemovePayload
>;

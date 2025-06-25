import type { APIUser } from "#types/raw/payloads/Users.js";
import type { Snowflake } from "#types/raw/shared/discord.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../Dispatch.js";

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

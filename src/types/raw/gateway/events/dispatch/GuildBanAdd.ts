import type { APIUser } from "#types/raw/payloads/Users.js";
import type { Snowflake } from "#types/raw/shared/discord.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../Dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-ban-add-guild-ban-add-event-fields
 */
export interface GatewayDispatchGuildBanAddPayload {
  guild_id: Snowflake;
  user: APIUser;
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-ban-add
 */
export type GatewayDispatchGuildBanAdd = GatewayDispatchEventBase<
  GatewayDispatchEvents.GuildBanAdd,
  GatewayDispatchGuildBanAddPayload
>;

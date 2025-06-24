import type { APIUser } from "../../../payloads/user.js";
import type { Snowflake } from "../../../shared/discord.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../dispatch.js";

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

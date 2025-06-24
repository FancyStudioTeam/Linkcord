import type { APIUser } from "../../../payloads/user.js";
import type { Snowflake } from "../../../shared/discord.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-member-remove-guild-member-remove-event-fields
 */
export interface GatewayDispatchGuildMemberRemovePayload {
  guild_id: Snowflake;
  user: APIUser;
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-member-remove
 */
export type GatewayDispatchGuildMemberRemove = GatewayDispatchEventBase<
  GatewayDispatchEvents.GuildMemberRemove,
  GatewayDispatchGuildMemberRemovePayload
>;

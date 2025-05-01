import type { APIGuildMember } from "#payloads";
import type { Snowflake } from "#shared";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-member-add
 */
export interface GatewayDispatchGuildMemberAddEvent
  extends GatewayDispatchEventBase<GatewayDispatchEvents.GuildMemberAdd, GatewayDispatchGuildMemberAddEventData> {}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-member-add-guild-member-add-extra-fields
 */
export interface GatewayDispatchGuildMemberAddEventData extends APIGuildMember {
  guild_id: Snowflake;
}

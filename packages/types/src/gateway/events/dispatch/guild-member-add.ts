import type { APIGuildMember } from "../../../payloads/guild.js";
import type { Snowflake } from "../../../shared/discord.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-member-add-guild-member-add-extra-fields
 */
export interface GatewayDispatchGuildMemberAddPayload extends APIGuildMember {
  guild_id: Snowflake;
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-member-add
 */
export type GatewayDispatchGuildMemberAdd = GatewayDispatchEventBase<
  GatewayDispatchEvents.GuildMemberAdd,
  GatewayDispatchGuildMemberAddPayload
>;

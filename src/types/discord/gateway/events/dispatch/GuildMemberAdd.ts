import type { APIGuildMember } from "#types/raw/payloads/Guilds.js";
import type { Snowflake } from "#types/raw/shared/discord.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../Dispatch.js";

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

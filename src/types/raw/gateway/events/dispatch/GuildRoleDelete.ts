import type { Snowflake } from "#types/raw/shared/discord.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../Dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-role-delete-guild-role-delete-event-fields
 */
export interface GatewayDispatchGuildRoleDeletePayload {
	guild_id: Snowflake;
	role_id: Snowflake;
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-role-delete
 */
export type GatewayDispatchGuildRoleDelete = GatewayDispatchEventBase<
	GatewayDispatchEvents.GuildRoleDelete,
	GatewayDispatchGuildRoleDeletePayload
>;

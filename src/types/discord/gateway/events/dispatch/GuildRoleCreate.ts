import type { APIRole } from "#types/discord/payloads/Permissions.js";
import type { Snowflake } from "#types/discord/shared/discord.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../Dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-role-create-guild-role-create-event-fields
 */
export interface GatewayDispatchGuildRoleCreatePayload {
	guild_id: Snowflake;
	role: APIRole;
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-role-create
 */
export type GatewayDispatchGuildRoleCreate = GatewayDispatchEventBase<
	GatewayDispatchEvents.GuildRoleCreate,
	GatewayDispatchGuildRoleCreatePayload
>;

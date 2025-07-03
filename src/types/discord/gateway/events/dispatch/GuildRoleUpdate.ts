import type { APIRole } from "#types/raw/payloads/Permissions.js";
import type { Snowflake } from "#types/raw/shared/discord.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../Dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-role-delete-guild-role-delete-event-fields
 */
export interface GatewayDispatchGuildRoleUpdatePayload {
	guild_id: Snowflake;
	role: APIRole;
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-role-update
 */
export type GatewayDispatchGuildRoleUpdate = GatewayDispatchEventBase<
	GatewayDispatchEvents.GuildRoleUpdate,
	GatewayDispatchGuildRoleUpdatePayload
>;

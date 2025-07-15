import type { APIAuditLogEntry } from "#types/discord/payloads/AuditLogs.js";
import type { Snowflake } from "#types/discord/shared/discord.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../Dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-audit-log-entry-create-guild-audit-log-entry-create-event-extra-fields
 */
export interface GatewayDispatchGuildAuditLogEntryCreatePayload extends APIAuditLogEntry {
	guild_id: Snowflake;
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-audit-log-entry-create
 */
export type GatewayDispatchGuildAuditLogEntryCreate = GatewayDispatchEventBase<
	GatewayDispatchEvents.GuildAuditLogEntryCreate,
	GatewayDispatchGuildAuditLogEntryCreatePayload
>;

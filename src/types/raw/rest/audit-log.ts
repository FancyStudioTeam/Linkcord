import type { APIAuditLog, AuditLogEvents } from "../payloads/audit-log.js";
import type { Snowflake } from "../shared/discord.js";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/audit-log#get-guild-audit-log-query-string-params
 */
export interface RESTGetGuildAuditLogStringParams {
  action_type?: AuditLogEvents;
  after?: Snowflake;
  before?: Snowflake;
  limit?: number;
  user_id?: Snowflake;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/audit-log#get-guild-audit-log
 */
export type RESTGetGuildAuditLog = APIAuditLog;

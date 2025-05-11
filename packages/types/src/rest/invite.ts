import type { APIInvite } from "#payloads";
import type { Snowflake } from "#shared";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/invite#get-invite-query-string-params
 */
export interface RESTGetInviteStringParams {
  guild_scheduled_event_id?: Snowflake;
  with_counts?: boolean;
  with_expiration?: boolean;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/invite#get-invite
 */
export type RESTGetInvite = APIInvite;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/invite#delete-invite
 */
export type RESTDeleteInvite = undefined;

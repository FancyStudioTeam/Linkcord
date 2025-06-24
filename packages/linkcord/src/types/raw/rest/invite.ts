import type { APIInvite } from "../payloads/index.js";
import type { Snowflake } from "../shared/discord.js";

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
 * @see https://discord.com/developers/docs/resources/invite#delete-invite
 */
export type RESTDeleteInvite = APIInvite;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/invite#get-invite
 */
export type RESTGetInvite = APIInvite;

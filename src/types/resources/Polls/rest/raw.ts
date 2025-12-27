import type { Snowflake } from '#types/miscellaneous/discord.js';
import type { RawUser } from '#types/resources/Users/index.js';

/**
 * @see https://discord.com/developers/docs/resources/poll#get-answer-voters
 */
export interface RESTGetAPIPollAnswerVoters {
	users: RawUser[];
}

/**
 * @see https://discord.com/developers/docs/resources/poll#get-answer-voters-query-string-params
 */
export interface RESTGetAPIPollAnswerVotersQueryStringParams {
	after?: Snowflake;
	limit?: number;
}

/**
 * @see https://discord.com/developers/docs/resources/poll#end-poll
 */
export type RESTPostAPIPollExpire = undefined;

import type { Snowflake } from '#types/miscellaneous/discord.js';
import type { APIUser } from '#types/resources/Users/index.js';

/**
 * @see https://discord.com/developers/docs/resources/poll#get-answer-voters
 */
export interface RESTGetAPIPollAnswerVoters {
	users: APIUser[];
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

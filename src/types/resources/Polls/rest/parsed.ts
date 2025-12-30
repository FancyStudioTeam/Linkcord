import type { User } from '#structures/User.js';
import type { Snowflake } from '#types/miscellaneous/discord.js';

/**
 * @see https://discord.com/developers/docs/resources/poll#get-answer-voters-query-string-params
 */
export interface GetPollAnswerVotersOptions {
	after?: User | Snowflake;
	limit?: number;
}

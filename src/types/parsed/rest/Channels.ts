import type { Snowflake } from "#types/discord/index.js";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/poll#get-answer-voters-query-string-params
 */
export interface GetChannelPollAnswerVotersOptions {
	/**
	 * The users to fetch after the given user ID.
	 */
	after?: Snowflake;
	/**
	 * The maximum number of users to fetch.
	 */
	limit?: number;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/soundboard#send-soundboard-sound-json-params
 */
export interface SendSoundboardSoundOptions {
	/**
	 * The ID of the soundboard sound to send.
	 */
	soundId: Snowflake;
	/**
	 * The ID of the guild that the soundboard sound belongs to.
	 */
	sourceGuildId?: Snowflake;
}

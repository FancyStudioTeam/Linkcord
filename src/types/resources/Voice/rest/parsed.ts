import type { ISO8601Date, Snowflake } from '#types/miscellaneous/discord.js';

/**
 * @see https://discord.com/developers/docs/resources/voice#modify-current-user-voice-state-json-params
 */
export interface EditCurrentVoiceStateOptions {
	channelId?: Snowflake;
	requestToSpeakTimestamp?: ISO8601Date | null;
	supress?: boolean;
}

/**
 * @see https://discord.com/developers/docs/resources/voice#modify-user-voice-state-json-params
 */
export interface EditVoiceStateOptions {
	channelId?: Snowflake;
	supress?: boolean;
}

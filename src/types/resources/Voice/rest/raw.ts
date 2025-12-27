import type { ISO8601Date, Snowflake } from '#types/miscellaneous/discord.js';

/**
 * @see https://discord.com/developers/docs/resources/voice#modify-current-user-voice-state-json-params
 */
export interface RawEditCurrentVoiceStateOptions {
	channel_id?: Snowflake;
	request_to_speak_timestamp?: ISO8601Date | null;
	supress?: boolean;
}

/**
 * @see https://discord.com/developers/docs/resources/voice#modify-user-voice-state-json-params
 */
export interface RawEditVoiceStateOptions {
	channel_id?: Snowflake;
	supress?: boolean;
}

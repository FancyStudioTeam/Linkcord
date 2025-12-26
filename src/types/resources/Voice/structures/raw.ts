import type { ISO8601Date, Snowflake } from '#types/miscellaneous/discord.js';
import type { APIGuildMember } from '#types/resources/Guilds/index.js';

/**
 * @see https://discord.com/developers/docs/resources/voice#voice-region-object-voice-region-structure
 */
export interface APIVoiceRegion {
	custom: boolean;
	deprecated: boolean;
	id: string;
	name: string;
	optimal: boolean;
}

/**
 * @see https://discord.com/developers/docs/resources/voice#voice-state-object-voice-state-structure
 */
export interface APIVoiceState {
	channel_id: Snowflake | null;
	deaf: boolean;
	guild_id?: Snowflake;
	member?: APIGuildMember;
	mute: boolean;
	request_to_speak_timestamp: ISO8601Date | null;
	self_deaf: boolean;
	self_mute: boolean;
	self_stream?: boolean;
	self_video: boolean;
	session_id: string;
	suppress: boolean;
	user_id: Snowflake;
}

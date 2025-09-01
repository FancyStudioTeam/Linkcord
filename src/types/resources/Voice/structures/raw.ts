import type { ISO8601Date, Snowflake } from "#types/miscellaneous/discord.js";
// import type { APIGuildMember } from "#types/resources/guilds/index.js";

/**
 * Represents a Discord voice region object.
 * @see https://discord.com/developers/docs/resources/voice#voice-region-object-voice-region-structure
 */
export interface APIVoiceRegion {
	/** Whether the voice region is custom. */
	custom: boolean;
	/** Whether the voice region is deprecated. */
	deprecated: boolean;
	/** The ID of the voice region. */
	id: string;
	/** The name of the voice region. */
	name: string;
	/** Whether the voice region is optimal. */
	optimal: boolean;
}

/**
 * Represents a Discord voice state object.
 * @see https://discord.com/developers/docs/resources/voice#voice-state-object-voice-state-structure
 */
export interface APIVoiceState {
	/** The ID of the channel where the user is connected. */
	channel_id: Snowflake | null;
	/** Whether the user is server deafened. */
	deaf: boolean;
	/** The ID of the guild where the user is connected. */
	guild_id?: Snowflake;
	/** The member of the guild. */
	// TODO: Add "member" to "APIVoiceState".
	// member?: APIGuildMember;
	/** Whether the user is server muted. */
	mute: boolean;
	/** The timestamp at which the user requested to speak. */
	request_to_speak_timestamp: ISO8601Date | null;
	/** Whether the user is self deafened. */
	self_deaf: boolean;
	/** Whether the user is self muted. */
	self_mute: boolean;
	/** Whether the user is sharing its screen. */
	self_stream?: boolean;
	/** Whether the user is sharing its camera. */
	self_video: boolean;
	/** The ID of the session. */
	session_id: string;
	/** Whether the user is suppressed. */
	suppress: boolean;
	/** The ID of the user. */
	user_id: Snowflake;
}

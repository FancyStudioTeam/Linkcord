import type { ISO8601Date, Snowflake } from "#types/miscellaneous/discord.js";
import type { APIVoiceRegion, APIVoiceState } from "../structures/raw.js";

/**
 * @see https://discord.com/developers/docs/resources/voice#modify-current-user-voice-state-json-params
 */
export interface RESTPatchAPICurrentVoiceStateJSONParams {
	channel_id?: Snowflake;
	request_to_speak_timestamp?: ISO8601Date | null;
	supress?: boolean;
}

/**
 * @see https://discord.com/developers/docs/resources/voice#modify-user-voice-state-json-params
 */
export interface RESTPatchAPIVoiceStateJSONParams {
	channel_id?: Snowflake;
	supress?: boolean;
}

/**
 * @see https://discord.com/developers/docs/resources/voice#get-user-voice-state
 */
export type RESTGetAPICurrentVoiceState = APIVoiceState;

/**
 * @see https://discord.com/developers/docs/resources/voice#list-voice-regions
 */
export type RESTGetAPIVoiceRegions = APIVoiceRegion[];

/**
 * @see https://discord.com/developers/docs/resources/voice#get-user-voice-state
 */
export type RESTGetAPIVoiceState = APIVoiceState;

/**
 * @see https://discord.com/developers/docs/resources/voice#modify-current-user-voice-state
 */
export type RESTPatchAPICurrentVoiceState = APIVoiceState;

/**
 * @see https://discord.com/developers/docs/resources/voice#modify-user-voice-state
 */
export type RESTPatchAPIVoiceState = APIVoiceState;

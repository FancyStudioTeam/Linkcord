import type { APIVoiceRegion, APIVoiceState } from "#types/payloads";
import type { ISO8601Date, Nullable, Snowflake } from "#types/shared";

/**
 * https://discord.com/developers/docs/resources/voice#modify-current-user-voice-state-json-params
 */
export interface RESTModifyCurrentUserVoiceStateJSONParams {
  channel_id?: Snowflake;
  request_to_speak_timestamp?: Nullable<ISO8601Date>;
  suppress?: boolean;
}

/**
 * https://discord.com/developers/docs/resources/voice#modify-user-voice-state-json-params
 */
export interface RESTModifyUserVoiceStateJSONParams {
  channel_id: Snowflake;
  supress?: boolean;
}

/**
 * https://discord.com/developers/docs/resources/voice#get-current-user-voice-state
 */
export type RESTGetCurrentUserVoiceState = APIVoiceState;

/**
 * https://discord.com/developers/docs/resources/voice#get-user-voice-state
 */
export type RESTGetUserVoiceState = APIVoiceState;

/**
 * https://discord.com/developers/docs/resources/voice#list-voice-regions
 */
export type RESTListVoiceRegions = APIVoiceRegion[];

/**
 * https://discord.com/developers/docs/resources/voice#modify-current-user-voice-state
 */
export type RESTModifyCurrentUserVoiceState = undefined;

/**
 * https://discord.com/developers/docs/resources/voice#modify-user-voice-state
 */
export type RESTModifyUserVoiceState = undefined;

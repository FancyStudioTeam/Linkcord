import type { APIVoiceRegion, APIVoiceState } from "#types/payloads";
import type { ISO8601Date, Nullable, Snowflake } from "#types/shared";

/**
 * https://discord.com/developers/docs/resources/voice#modify-current-user-voice-state-json-params
 */
export interface RESTModifyCurrentUserVoiceStateJSONParams extends RESTModifyUserVoiceStateJSONParams {
  /**
   * The time at which the user requested to speak.
   * @remarks You are able to set `request_to_speak_timestamp` to any present or future time.
   */
  request_to_speak_timestamp?: Nullable<ISO8601Date>;
}

/**
 * https://discord.com/developers/docs/resources/voice#modify-user-voice-state-json-params
 */
export interface RESTModifyUserVoiceStateJSONParams {
  /** The id of the channel to which the user is connected. */
  channel_id: Snowflake;
  /** Whether the user should be suppressed from speaking. */
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

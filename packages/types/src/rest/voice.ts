import type { APIVoiceRegion, APIVoiceState } from "#payloads";
import type { ISO8601Date, Nullable } from "#shared";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/voice#modify-current-user-voice-state-json-params
 */
export interface RESTModifyCurrentUserVoiceStateJSONParams {
  channel_id?: string;
  request_to_speak_timestamp?: Nullable<ISO8601Date>;
  suppress?: boolean;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/voice#modify-user-voice-state-json-params
 */
export interface RESTModifyUserVoiceStateJSONParams {
  channel_id: string;
  suppress?: boolean;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/voice#get-voice-state
 */
export type RESTGetCurrentUserVoiceState = APIVoiceState;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/voice#get-user-voice-state
 */
export type RESTGetUserVoiceState = APIVoiceState;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/voice#list-voice-regions
 */
export type RESTListVoiceRegions = APIVoiceRegion[];

/**
 * @public
 * @see https://discord.com/developers/docs/resources/voice#modify-current-user-voice-state
 */
export type RESTModifyCurrentUserVoiceState = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/voice#modify-user-voice-state
 */
export type RESTModifyUserVoiceState = undefined;

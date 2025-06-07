import type { APIVoiceRegion, APIVoiceState } from "../payloads/voice.js";
import type { ISO8601Date } from "../shared/discord.js";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/voice#modify-current-user-voice-state-json-params
 */
export interface RESTPatchCurrentUserVoiceStateJSONParams {
  channel_id?: string;
  request_to_speak_timestamp?: ISO8601Date | null;
  suppress?: boolean;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/voice#modify-user-voice-state-json-params
 */
export interface RESTPatchUserVoiceStateJSONParams {
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
export type RESTGetVoiceRegions = APIVoiceRegion[];

/**
 * @public
 * @see https://discord.com/developers/docs/resources/voice#modify-current-user-voice-state
 */
export type RESTPatchCurrentUserVoiceState = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/voice#modify-user-voice-state
 */
export type RESTPatchUserVoiceState = undefined;

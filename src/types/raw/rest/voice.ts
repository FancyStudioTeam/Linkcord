import type { APIVoiceRegion, APIVoiceState } from "../payloads/Voice.js";
import type { ISO8601Date } from "../shared/discord.js";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/voice#modify-current-user-voice-state-json-params
 */
export interface RESTPatchGuildVoiceStateCurrentJSONParams {
  channel_id?: string;
  request_to_speak_timestamp?: ISO8601Date | null;
  suppress?: boolean;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/voice#modify-user-voice-state-json-params
 */
export interface RESTPatchGuildVoiceStateJSONParams {
  channel_id: string;
  suppress?: boolean;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/voice#get-user-voice-state
 */
export type RESTGetGuildVoiceState = APIVoiceState;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/voice#get-current-user-voice-state
 */
export type RESTGetGuildVoiceStateCurrent = APIVoiceState;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/voice#list-voice-regions
 */
export type RESTGetVoiceRegions = APIVoiceRegion[];

/**
 * @public
 * @see https://discord.com/developers/docs/resources/voice#modify-user-voice-state
 */
export type RESTPatchGuildVoiceState = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/voice#modify-current-user-voice-state
 */
export type RESTPatchGuildVoiceStateCurrent = undefined;

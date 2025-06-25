import type { APIGateway, APIGatewayBot } from "../payloads/Gateway.js";
import type { APIDefaultSoundboardSound } from "../payloads/Soundboards.js";
import type { APIVoiceRegion } from "../payloads/Voice.js";

/**
 * @alpha
 */
export interface APIRefreshedAttachment {
  original: string;
  refreshed: string;
}

/**
 * @alpha
 */
export interface RESTPostRefreshAttachments {
  refreshed_urls: APIRefreshedAttachment[];
}

/**
 * @alpha
 */
export interface RESTPostRefreshAttachmentsJSONParams {
  attachment_urls: string[];
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/soundboard#list-default-soundboard-sounds
 */
export type RESTGetDefaultSoundboardSounds = APIDefaultSoundboardSound[];

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway#get-gateway
 */
export type RESTGetGateway = APIGateway;

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway#get-gateway-bot
 */
export type RESTGetGatewayBot = APIGatewayBot;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/voice#list-voice-regions
 */
export type RESTGetVoiceRegions = APIVoiceRegion[];

import type { APIVoiceRegion } from "../structures/raw.js";

/**
 * Represents the response of the {@link RESTGetAPIVoiceRegions | `GET /voice/regions`} endpoint.
 * @see https://discord.com/developers/docs/resources/voice#list-voice-regions
 */
export type RESTGetAPIVoiceRegions = APIVoiceRegion[];

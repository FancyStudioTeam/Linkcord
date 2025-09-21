import { Endpoints } from "#rest/endpoints/Endpoints.js";
import { parseVoiceRegions } from "#transformers/Voice.js";
import type { RESTGetAPIVoiceRegions, VoiceRegion } from "#types/index.js";
import { BaseAPI } from "./BaseAPI.js";

/**
 * API class that handles all miscellaneous requests.
 * @group REST/API
 */
export class MiscellaneousAPI extends BaseAPI {
	/**
	 * Performs a {@link RESTGetAPIVoiceRegions | `GET /voice/regions`} request to the Discord API.
	 *
	 * @returns The parsed list of {@link VoiceRegion | `VoiceRegion`} objects.
	 * @see https://discord.com/developers/docs/resources/voice#list-voice-regions
	 */
	async getVoiceRegions(): Promise<VoiceRegion[]> {
		const voiceRegionsResponseData = await super.get<RESTGetAPIVoiceRegions>(Endpoints.voiceRegions());
		const voiceRegionsData = parseVoiceRegions(voiceRegionsResponseData);

		return voiceRegionsData;
	}
}

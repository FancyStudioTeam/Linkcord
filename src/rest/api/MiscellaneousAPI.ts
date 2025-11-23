import { Endpoints } from "#rest/endpoints/Endpoints.js";
import { parseVoiceRegions } from "#transformers/Voice.js";
import type { RESTGetAPIVoiceRegions, VoiceRegion } from "#types/index.js";
import { BaseAPI } from "./BaseAPI.js";

const { voiceRegions } = Endpoints;

export class MiscellaneousAPI extends BaseAPI {
	/**
	 * @see https://discord.com/developers/docs/resources/voice#list-voice-regions
	 */
	async getVoiceRegions(): Promise<VoiceRegion[]> {
		const voiceRegionsResponseData = await super.get<RESTGetAPIVoiceRegions>(voiceRegions());
		const voiceRegionsData = parseVoiceRegions(voiceRegionsResponseData);

		return voiceRegionsData;
	}
}

import { VOICE_REGIONS_ENDPOINT } from "#rest/endpoints/Endpoints.js";
import { RESTMethod } from "#rest/structures/RESTManager.types.js";
import { deserializeVoiceRegionsArray } from "#transformers/Voice/Deserializer.js";
import type { RESTGetAPIVoiceRegions, VoiceRegion } from "#types/index.js";
import { BaseAPI } from "./BaseAPI.js";

export class VoiceAPI extends BaseAPI {
	/**
	 * @see https://discord.com/developers/docs/resources/voice#list-voice-regions
	 */
	async getVoiceRegions(): Promise<VoiceRegion[]> {
		const { rest } = this;

		const voiceRegionsResponseData = await rest.makeRequest<RESTGetAPIVoiceRegions>(VOICE_REGIONS_ENDPOINT(), {
			method: RESTMethod.Get,
		});
		const voiceRegionsData = deserializeVoiceRegionsArray(voiceRegionsResponseData);

		return voiceRegionsData;
	}
}

import { Endpoints } from "#rest/endpoints/Endpoints.js";
import { VoiceTransformer } from "#transformers/VoiceTransformer.js";
import type { RESTGetAPIVoiceRegions, VoiceRegion } from "#types/index.js";
import { BaseAPI } from "./BaseAPI.js";

/** API class that handles all miscellaneous requests. */
export class MiscellaneousAPI extends BaseAPI {
	/**
	 * Performs a {@link RESTGetAPIVoiceRegions | `GET /voice/regions`} request to the Discord API.
	 * @returns The {@link VoiceRegion | `VoiceRegion`} objects.
	 * @see https://discord.com/developers/docs/resources/voice#list-voice-regions
	 */
	async getVoiceRegions(): Promise<VoiceRegion[]> {
		const voiceRegionsResponseData = await super.get<RESTGetAPIVoiceRegions>(Endpoints.voiceRegions());
		const voiceRegionsData = voiceRegionsResponseData.map((voiceRegion) =>
			VoiceTransformer.transformVoiceRegionToParsed(voiceRegion),
		);

		return voiceRegionsData;
	}
}

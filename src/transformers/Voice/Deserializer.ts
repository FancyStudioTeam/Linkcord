import type { RawVoiceRegion, VoiceRegion } from '#types/index.js';

/**
 * @see https://discord.com/developers/docs/resources/voice#voice-region-object-voice-region-structure
 */
export function deserializeVoiceRegion(voiceRegion: RawVoiceRegion): VoiceRegion {
	return {
		custom: voiceRegion.custom,
		deprecated: voiceRegion.deprecated,
		id: voiceRegion.id,
		name: voiceRegion.name,
		optimal: voiceRegion.optimal,
	};
}

/**
 * @see https://discord.com/developers/docs/resources/voice#voice-region-object-voice-region-structure
 */
export function deserializeVoiceRegionsArray(voiceRegionsArray: RawVoiceRegion[]): VoiceRegion[] {
	return voiceRegionsArray.map(deserializeVoiceRegion);
}

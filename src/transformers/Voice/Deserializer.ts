import type { RawVoiceRegion, VoiceRegion } from '#types/index.js';

/**
 * @see https://discord.com/developers/docs/resources/voice#voice-region-object-voice-region-structure
 */
export function deserializeVoiceRegion(rawVoiceRegion: RawVoiceRegion): VoiceRegion {
	const { custom, deprecated, id, name, optimal } = rawVoiceRegion;
	const voiceRegion: VoiceRegion = {
		custom,
		deprecated,
		id,
		name,
		optimal,
	};

	return voiceRegion;
}

/**
 * @see https://discord.com/developers/docs/resources/voice#voice-region-object-voice-region-structure
 */
export function deserializeVoiceRegionsArray(rawVoiceRegionsArray: RawVoiceRegion[]): VoiceRegion[] {
	return rawVoiceRegionsArray.map(deserializeVoiceRegion);
}

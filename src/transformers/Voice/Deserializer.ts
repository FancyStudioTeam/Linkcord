import type { APIVoiceRegion, VoiceRegion } from "#types/index.js";

/**
 * @see https://discord.com/developers/docs/resources/voice#voice-region-object-voice-region-structure
 */
export function deserializeVoiceRegion(serializedVoiceRegion: APIVoiceRegion): VoiceRegion {
	const { custom, deprecated, id, name, optimal } = serializedVoiceRegion;
	const deserializedVoiceRegion: VoiceRegion = {
		custom,
		deprecated,
		id,
		name,
		optimal,
	};

	return deserializedVoiceRegion;
}

/**
 * @see https://discord.com/developers/docs/resources/voice#voice-region-object-voice-region-structure
 */
export function deserializeVoiceRegions(serializedVoiceRegions: APIVoiceRegion[]): VoiceRegion[] {
	return serializedVoiceRegions.map(deserializeVoiceRegion);
}

import type { APIVoiceRegion, VoiceRegion } from "#types/index.js";

export function deserializeVoiceRegion(voiceRegion: APIVoiceRegion): VoiceRegion {
	const { custom, deprecated, id, name, optimal } = voiceRegion;
	const deserializedVoiceRegion: VoiceRegion = {
		custom,
		deprecated,
		id,
		name,
		optimal,
	};

	return deserializedVoiceRegion;
}

export function deserializeVoiceRegions(voiceRegions: APIVoiceRegion[]): VoiceRegion[] {
	return voiceRegions.map(deserializeVoiceRegion);
}

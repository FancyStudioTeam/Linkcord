import type { APIVoiceRegion, VoiceRegion } from "#types/index.js";

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

export function deserializeVoiceRegions(serializedVoiceRegions: APIVoiceRegion[]): VoiceRegion[] {
	return serializedVoiceRegions.map(deserializeVoiceRegion);
}

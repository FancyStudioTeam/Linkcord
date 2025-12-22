import type { APIVoiceRegion, VoiceRegion } from "#types/index.js";

/**
 * Transforms an {@link APIVoiceRegion} object into a {@link VoiceRegion} object.
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
 * Transforms an array of {@link APIVoiceRegion} objects into an array of {@link VoiceRegion} objects.
 */
export function deserializeVoiceRegions(serializedVoiceRegions: APIVoiceRegion[]): VoiceRegion[] {
	return serializedVoiceRegions.map(deserializeVoiceRegion);
}

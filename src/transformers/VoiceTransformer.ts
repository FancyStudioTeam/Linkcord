import type { APIVoiceRegion, VoiceRegion } from "#types/index.js";

/**
 * Transforms an {@link APIVoiceRegion | `APIVoiceRegion`} object into a {@link VoiceRegion | `VoiceRegion`} object.
 * @param voiceRegion - The {@link APIVoiceRegion | `APIVoiceRegion`} object to transform.
 * @returns The transformed {@link VoiceRegion | `VoiceRegion`} object.
 */
function transformVoiceRegionToParsed(voiceRegion: APIVoiceRegion): VoiceRegion {
	const { custom, deprecated, id, name, optimal } = voiceRegion;

	return {
		custom,
		deprecated,
		id,
		name,
		optimal,
	};
}

/** Transformers for voice objects. */
export const VoiceTransformer = Object.freeze({
	transformVoiceRegionToParsed,
});

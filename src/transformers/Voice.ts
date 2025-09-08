import type { APIVoiceRegion, VoiceRegion } from "#types/index.js";

/**
 * Parses the given {@link APIVoiceRegion | `APIVoiceRegion`} object into a {@link VoiceRegion | `VoiceRegion`} object.
 * @param voiceRegion - The {@link APIVoiceRegion | `APIVoiceRegion`} object to parse.
 * @returns The parsed {@link VoiceRegion | `VoiceRegion`} object.
 */
export function parseVoiceRegion(voiceRegion: APIVoiceRegion): VoiceRegion {
	const { custom, deprecated, id, name, optimal } = voiceRegion;
	const voiceRegionData: VoiceRegion = {
		custom,
		deprecated,
		id,
		name,
		optimal,
	};

	return voiceRegionData;
}

/**
 * Parses the given list of {@link APIVoiceRegion | `APIVoiceRegion`} objects into a list of {@link VoiceRegion | `VoiceRegion`} objects.
 * @param voiceRegions - The list of {@link APIVoiceRegion | `APIVoiceRegion`} objects to parse.
 * @returns The parsed list of {@link VoiceRegion | `VoiceRegion`} objects.
 */
export function parseVoiceRegions(voiceRegions: APIVoiceRegion[]): VoiceRegion[] {
	return voiceRegions.map(parseVoiceRegion);
}

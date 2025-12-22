import type { APIVoiceRegion, VoiceRegion } from "#types/index.js";

export function parseVoiceRegion(voiceRegion: APIVoiceRegion): VoiceRegion {
	const { custom, deprecated, id, name, optimal } = voiceRegion;
	const parsedVoiceRegion: VoiceRegion = {
		custom,
		deprecated,
		id,
		name,
		optimal,
	};

	return parsedVoiceRegion;
}

export function parseVoiceRegions(voiceRegions: APIVoiceRegion[]): VoiceRegion[] {
	return voiceRegions.map(parseVoiceRegion);
}

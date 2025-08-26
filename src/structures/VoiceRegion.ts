import type { APIVoiceRegion } from "#types/index.js";

/**
 * Represents a Discord voice region.
 * @see https://discord.com/developers/docs/resources/voice#voice-region-object-voice-region-structure
 */
export class VoiceRegion {
	/** Whether the voice region is custom. */
	readonly custom: boolean;
	/** Whether the voice region is deprecated. */
	readonly deprecated: boolean;
	/** The ID of the voice region. */
	readonly id: string;
	/** The name of the voice region. */
	readonly name: string;
	/** Whether the voice region is optimal. */
	readonly optimal: boolean;

	/**
	 * Creates a new {@link VoiceRegion | `VoiceRegion`} instance.
	 * @param data - The {@link APIVoiceRegion | `APIVoiceRegion`} object from the Discord API.
	 */
	constructor(data: APIVoiceRegion) {
		const { custom, deprecated, id, name, optimal } = data;

		this.custom = custom;
		this.deprecated = deprecated;
		this.id = id;
		this.name = name;
		this.optimal = optimal;
	}
}

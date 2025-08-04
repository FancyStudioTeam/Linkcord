import type { APIVoiceRegion } from "#types/index.js";
import type { JSONVoiceRegion } from "#types/parsed/Voice.js";

/**
 * Represents a Discord voice region.
 * @see https://discord.com/developers/docs/resources/voice#voice-region-object-voice-region-structure
 * @group Discord/Structures
 * @public
 */
export class VoiceRegion {
	/**
	 * Whether the voice region is custom.
	 */
	readonly custom: boolean;
	/**
	 * Whether the voice region is deprecated.
	 */
	readonly deprecated: boolean;
	/**
	 * The ID of the voice region.
	 */
	readonly id: string;
	/**
	 * The name of the voice region.
	 */
	readonly name: string;
	/**
	 * Whether the voice region is optimal.
	 */
	readonly optimal: boolean;

	/**
	 * Creates a new {@link VoiceRegion | `VoiceRegion`} instance.
	 * @param data - The {@link APIVoiceRegion | `APIVoiceRegion`} object from
	 * the Discord API.
	 */
	constructor(data: APIVoiceRegion) {
		const { custom, deprecated, id, name, optimal } = data;

		this.custom = custom;
		this.deprecated = deprecated;
		this.id = id;
		this.name = name;
		this.optimal = optimal;
	}

	/**
	 * Converts the {@link VoiceRegion | `VoiceRegion`} instance to a
	 * {@link JSONVoiceRegion | `JSONVoiceRegion`} object.
	 * @returns The {@link JSONVoiceRegion | `JSONVoiceRegion`} object.
	 */
	toJSON(): JSONVoiceRegion {
		const { custom, deprecated, id, name, optimal } = this;

		return Object.freeze({
			custom,
			deprecated,
			id,
			name,
			optimal,
		});
	}
}

import type { APIVoiceRegion } from "#types/index.js";
import type { JSONVoiceRegion } from "#types/parsed/Voice.js";

/**
 * Represents a Discord voice region.
 *
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
	 * Creates a new {@link VoiceRegion} instance from raw Discord API data.
	 *
	 * @param data - The raw Discord API voice region data.
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
	 * Converts the {@link VoiceRegion} instance to a JSON object.
	 *
	 * @returns The JSON voice region data.
	 */
	toJSON(): JSONVoiceRegion {
		const { custom, deprecated, id, name, optimal } = this;

		return {
			custom,
			deprecated,
			id,
			name,
			optimal,
		};
	}
}

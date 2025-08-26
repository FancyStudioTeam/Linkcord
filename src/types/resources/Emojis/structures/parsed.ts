import type { Snowflake } from "#types/miscellaneous/discord.js";

/**
 * Represents a partial emoji.
 * @see https://discord.com/developers/docs/resources/emoji#emoji-object-emoji-structure
 */
export interface PartialEmoji {
	/** Whether the emoji is animated. */
	animated?: boolean;
	/** The ID of the emoji. */
	id?: Snowflake | null;
	/** The name of the emoji. */
	name?: string | null;
}

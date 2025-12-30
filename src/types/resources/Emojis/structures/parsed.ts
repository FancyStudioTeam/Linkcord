import type { Snowflake } from '#types/miscellaneous/discord.js';

/**
 * @see https://discord.com/developers/docs/resources/emoji#emoji-object-emoji-structure
 */
export interface PartialEmoji {
	animated?: boolean;
	id?: Snowflake | null;
	name?: string | null;
}

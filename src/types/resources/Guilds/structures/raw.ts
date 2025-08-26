import type { Snowflake } from "#types/miscellaneous/discord.js";

/**
 * Represents an unavailable guild.
 * @see https://discord.com/developers/docs/resources/guild#unavailable-guild-object-example-unavailable-guild
 */
export interface APIUnavailableGuild {
	/** The ID of the guild. */
	id: Snowflake;
	/** Whether the guild is unavailable. */
	unavailable: boolean;
}

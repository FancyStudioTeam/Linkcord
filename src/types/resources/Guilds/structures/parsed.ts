import type { Snowflake } from '#types/miscellaneous/discord.js';

/**
 * @see https://discord.com/developers/docs/resources/guild#incidents-data-object-incidents-data-structure
 */
export interface GuildIncidentsData {
	dmSpamDetectedAt: Date | null;
	dmsDisabledUntil: Date | null;
	invitesDisabledUntil: Date | null;
	raidDetectedAt: Date | null;
}

/**
 * @see https://discord.com/developers/docs/resources/guild#unavailable-guild-object-example-unavailable-guild
 */
export interface UnavailableGuild {
	/** The ID of the guild. */
	id: Snowflake;
	/** Whether the guild is unavailable. */
	unavailable: boolean;
}

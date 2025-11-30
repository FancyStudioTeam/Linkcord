import type { Snowflake } from "#types/miscellaneous/discord.js";

/**
 * @see https://discord.com/developers/docs/topics/permissions#role-object-role-colors-object
 */
export interface RoleColors {
	primaryColor: number;
	secondaryColor: number | null;
	tertiaryColor: number | null;
}

/**
 * @see https://discord.com/developers/docs/topics/permissions#role-object-role-tags-structure
 */
export interface RoleTags {
	availableForPurchase?: true;
	botId?: Snowflake;
	guildConnections?: true;
	integrationId?: Snowflake;
	premiumSubscriber?: true;
	subscriptionListingId?: Snowflake;
}

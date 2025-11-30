import type { Snowflake } from "#types/miscellaneous/discord.js";
import type { RoleFlags } from "../enums.js";

/**
 * @see https://discord.com/developers/docs/topics/permissions#role-object-role-structure
 */
export interface APIRole {
	colors: APIRoleColors;
	flags: RoleFlags;
	hoist: boolean;
	icon?: string | null;
	id: Snowflake;
	managed: boolean;
	mentionable: boolean;
	name: string;
	permissions: string;
	position: number;
	tags?: APIRoleTags;
	unicode_emoji?: string | null;
}

/**
 * @see https://discord.com/developers/docs/topics/permissions#role-object-role-colors-object
 */
export interface APIRoleColors {
	primary_color: number;
	secondary_color: number | null;
	tertiary_color: number | null;
}

/**
 * @see https://discord.com/developers/docs/topics/permissions#role-object-role-tags-structure
 */
export interface APIRoleTags {
	available_for_purchase?: null;
	bot_id?: Snowflake;
	guild_connections?: null;
	integration_id?: Snowflake;
	premium_subscriber?: null;
	subscription_listing_id?: Snowflake;
}

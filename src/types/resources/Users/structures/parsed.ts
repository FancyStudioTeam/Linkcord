import type { Snowflake } from "#types/miscellaneous/discord.js";
import type { GuildFeatures } from "#types/resources/Guilds/enums.js";
// import type { PartialIntegration } from "#types/resources/Guilds/index.js";
import type { ConnectionService, ConnectionVisibilityType, DisplayNameEffect, DisplayNameFont, NameplatePalette } from "../enums.js";

/**
 * @see https://discord.com/developers/docs/resources/user#application-role-connection-object-application-role-connection-structure
 */
export interface ApplicationRoleConnection {
	metadata: Record<string, string>;
	platformName: string;
	platformUsername: string;
}

/**
 * @see https://discord.com/developers/docs/resources/user#avatar-decoration-data-object-avatar-decoration-data-structure
 */
export interface AvatarDecorationData {
	asset: string;
	skuId: Snowflake;
}

/**
 * @see https://discord.com/developers/docs/resources/user#collectibles-collectible-structure
 */
export interface Collectibles {
	nameplate: Nameplate | null;
}

/**
 * @see https://discord.com/developers/docs/resources/user#connection-object-connection-structure
 */
export interface Connection {
	friendSync: boolean;
	id: string;
	//integrations?: PartialIntegration[];
	name: string;
	revoked: boolean;
	showActivity: boolean;
	type: ConnectionService;
	twoWayLink: boolean;
	verified: boolean;
	visibility: ConnectionVisibilityType;
}

/**
 * @undocumented
 */
export interface DisplayNameStyles {
	colors: [
		number,
		number,
	];
	effectId: DisplayNameEffect;
	fontId: DisplayNameFont;
}

/**
 * @see https://discord.com/developers/docs/resources/user#nameplate-nameplate-structure
 */
export interface Nameplate {
	asset: string;
	label: string;
	palette: NameplatePalette;
	skuId: Snowflake;
}

/**
 * @see https://discord.com/developers/docs/resources/user#user-object-user-primary-guild
 */
export interface PrimaryGuild {
	badge: string | null;
	identityEnabled: boolean | null;
	identityGuildId: Snowflake | null;
	tag: string | null;
}

/**
 * @see https://discord.com/developers/docs/resources/user#get-current-user-guilds-example-partial-guild
 */
export interface UserGuild {
	approximateMemberCount: number;
	approximatePresenceCount: number;
	banner: string | null;
	features: GuildFeatures[];
	icon: string | null;
	id: Snowflake;
	name: string;
	owner: boolean;
	permissions: string;
}

import type { Snowflake } from "#types/miscellaneous/discord.js";
import type { GuildFeatures } from "#types/resources/Guilds/enums.js";
import type { ConnectionServices, ConnectionVisibilityTypes, NameplatePalette } from "../enums.js";

/**
 * Represents a Discord application role connection object.
 * @see https://discord.com/developers/docs/resources/user#application-role-connection-object-application-role-connection-structure
 */
export interface ApplicationRoleConnection {
	/** The metadata of the platform. */
	metadata: Record<string, string>;
	/** The name of the platform. */
	platformName: string;
	/** The username of the platform. */
	platformUsername: string;
}

/**
 * Represents a Discord avatar decoration data object.
 * @see https://discord.com/developers/docs/resources/user#avatar-decoration-data-object-avatar-decoration-data-structure
 *
 * @group Structures/Interfaces
 */
export interface AvatarDecorationData {
	/** The asset of the avatar decoration. */
	asset: string;
	/** The ID of the sku of the avatar decoration. */
	skuId: Snowflake;
}

/**
 * Represents a Discord collectibles object.
 * @see https://discord.com/developers/docs/resources/user#collectibles-collectible-structure
 *
 * @group Structures/Interfaces
 */
export interface Collectibles {
	/** The nameplate of the user. */
	nameplate?: Nameplate;
}

/**
 * Represents a Discord connection object.
 * @see https://discord.com/developers/docs/resources/user#connection-object-connection-structure
 */
export interface Connection {
	/** Whether the friend sync is enabled. */
	friendSync: boolean;
	/** The ID of the connection. */
	id: string;
	/** The integrations of the connection. */
	// TODO: Add "integrations" to "Connection".
	// integrations?: APIPartialIntegration[];
	/** The username of the connection. */
	name: string;
	/** Whether the connection is revoked. */
	revoked: boolean;
	/** Whether the activities related to the connection are shown in the presence. */
	showActivity: boolean;
	/** The type of the connection. */
	type: ConnectionServices;
	/** Whether the connection has third party OAuth2 token. */
	twoWayLink: boolean;
	/** Whether the connection is verified. */
	verified: boolean;
	/** The visibility of the connection. */
	visibility: ConnectionVisibilityTypes;
}

/**
 * Represents a Discord nameplate object.
 * @see https://discord.com/developers/docs/resources/user#nameplate-nameplate-structure
 *
 * @group Structures/Interfaces
 */
export interface Nameplate {
	/** The asset of the nameplate. */
	asset: string;
	/** The label of the nameplate. */
	label: string;
	/** The palette of the nameplate. */
	palette: NameplatePalette;
	/** The ID of the sku of the nameplate. */
	skuId: Snowflake;
}

/**
 * Represents a Discord primary guild object.
 * @see https://discord.com/developers/docs/resources/user#user-object-user-primary-guild
 *
 * @group Structures/Interfaces
 */
export interface PrimaryGuild {
	/** The badge of the guild. */
	badge: string | null;
	/** Whether the user is displaying the guild tag. */
	identityEnabled: boolean | null;
	/** The ID of the guild. */
	identityGuildId: Snowflake | null;
	/** The tag of the guild. */
	tag: string | null;
}

/**
 * Represents a Discord user guild object.
 * @see https://discord.com/developers/docs/resources/user#get-current-user-guilds-example-partial-guild
 */
export interface UserGuild {
	/** The approximate number of members in the guild. */
	approximateMemberCount: number;
	/** The approximate number of online members in the guild. */
	approximatePresenceCount: number;
	/** The banner of the guild. */
	banner: string | null;
	/** The features of the guild. */
	features: GuildFeatures[];
	/** The icon of the guild. */
	icon: string | null;
	/** The ID of the guild. */
	id: Snowflake;
	/** The name of the guild. */
	name: string;
	/** Whether the user is the owner of the guild. */
	owner: boolean;
	/** The permissions of the user in the guild. */
	permissions: string;
}

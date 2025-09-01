import type { Snowflake } from "#types/miscellaneous/discord.js";
import type { Locales } from "#types/miscellaneous/enums.js";
import type { GuildFeatures } from "#types/resources/Guilds/enums.js";
import type {
	ConnectionServices,
	ConnectionVisibilityTypes,
	NameplatePalette,
	UserFlags,
	UserPremiumTypes,
} from "../enums.js";

/**
 * Represents a Discord application role connection object.
 * @see https://discord.com/developers/docs/resources/user#application-role-connection-object-application-role-connection-structure
 */
export interface APIApplicationRoleConnection {
	/** The metadata of the platform. */
	metadata: Record<string, string>;
	/** The name of the platform. */
	platform_name: string;
	/** The username of the platform. */
	platform_username: string;
}

/**
 * Represents a Discord avatar decoration data object.
 * @see https://discord.com/developers/docs/resources/user#avatar-decoration-data-object-avatar-decoration-data-structure
 */
export interface APIAvatarDecorationData {
	/** The asset of the avatar decoration data. */
	asset: string;
	/** The ID of the sku of the avatar decoration. */
	sku_id: Snowflake;
}

/**
 * Represents a Discord collectibles object.
 * @see https://discord.com/developers/docs/resources/user#collectibles-collectible-structure
 */
export interface APICollectibles {
	/** The nameplate of the user. */
	nameplate?: APINameplate;
}

/**
 * Represents a Discord connection object.
 * @see https://discord.com/developers/docs/resources/user#connection-object-connection-structure
 */
export interface APIConnection {
	/** Whether the friend sync is enabled. */
	friend_sync: boolean;
	/** The ID of the connection. */
	id: string;
	/** The integrations of the connection. */
	// TODO: Add "integrations" to "APIConnection".
	// integrations?: APIPartialIntegration[];
	/** The username of the connection. */
	name: string;
	/** Whether the connection is revoked. */
	revoked?: boolean;
	/** Whether the activities related to the connection are shown in the presence. */
	show_activity: boolean;
	/** The type of the connection. */
	type: ConnectionServices;
	/** Whether the connection has third party OAuth2 token. */
	two_way_link: boolean;
	/** Whether the connection is verified. */
	verified?: boolean;
	/** The visibility of the connection. */
	visibility: ConnectionVisibilityTypes;
}

/**
 * Represents a Discord primary guild object.
 * @see https://discord.com/developers/docs/resources/user#user-object-user-primary-guild
 */
export interface APIPrimaryGuild {
	/** The badge of the guild. */
	badge: string | null;
	/** Whether the user is displaying the guild tag. */
	identity_enabled: boolean | null;
	/** The ID of the guild. */
	identity_guild_id: Snowflake | null;
	/** The tag of the guild. */
	tag: string | null;
}

/**
 * Represents a Discord nameplate object.
 * @see https://discord.com/developers/docs/resources/user#nameplate-nameplate-structure
 */
export interface APINameplate {
	/** The asset of the nameplate. */
	asset: string;
	/** The label of the nameplate. */
	label: string;
	/** The palette of the nameplate. */
	palette: NameplatePalette;
	/** The ID of the sku of the nameplate. */
	sku_id: Snowflake;
}

/**
 * Represents a Discord user object.
 * @see https://discord.com/developers/docs/resources/user#user-object-user-structure
 */
export interface APIUser {
	/** The accent color of the user. */
	accent_color?: number | null;
	/** The avatar of the user. */
	avatar: string | null;
	/** The decoration of the avatar of the user. */
	avatar_decoration_data?: APIAvatarDecorationData | null;
	/** The banner of the user. */
	banner?: string | null;
	/** Whether the user is a bot. */
	bot?: boolean;
	/** The collectibles of the user. */
	collectibles?: APICollectibles | null;
	/** The discriminator of the user. */
	discriminator: string;
	/** The email of the user. */
	email?: string | null;
	/** The flags of the user. */
	flags?: UserFlags;
	/** The global name of the user. */
	global_name: string | null;
	/** The ID of the user. */
	id: Snowflake;
	/** The locale of the user. */
	locale?: Locales;
	/** Whether the user has two factor enabled. */
	mfa_enabled?: boolean;
	/** The type of the subscription of the user. */
	premium_type?: UserPremiumTypes;
	/** The primary guild of the user. */
	primary_guild?: APIPrimaryGuild | null;
	/** The public flags of the user. */
	public_flags?: UserFlags;
	/** Whether the user is from the Discord system. */
	system?: boolean;
	/** The username of the user. */
	username: string;
	/** Whether the user has verified their email. */
	verified?: boolean;
}

/**
 * Represents a Discord user guild object.
 * @see https://discord.com/developers/docs/resources/user#get-current-user-guilds-example-partial-guild
 */
export interface APIUserGuild {
	/** The approximate number of members in the guild. */
	approximate_member_count: number;
	/** The approximate number of online members in the guild. */
	approximate_presence_count: number;
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

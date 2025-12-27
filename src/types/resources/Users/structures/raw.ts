import type { Snowflake } from '#types/miscellaneous/discord.js';
import type { Locales } from '#types/miscellaneous/enums.js';
import type { GuildFeatures } from '#types/resources/Guilds/enums.js';
import type { APIPartialIntegration } from '#types/resources/Guilds/index.js';
import type {
	ConnectionService,
	ConnectionVisibilityType,
	DisplayNameEffect,
	DisplayNameFont,
	NameplatePalette,
	UserFlags,
	UserPremiumType,
} from '../enums.js';

/**
 * @see https://discord.com/developers/docs/resources/user#application-role-connection-object-application-role-connection-structure
 */
export interface RawApplicationRoleConnection {
	metadata: Record<string, string>;
	platform_name: string;
	platform_username: string;
}

/**
 * @see https://discord.com/developers/docs/resources/user#avatar-decoration-data-object-avatar-decoration-data-structure
 */
export interface RawAvatarDecorationData {
	asset: string;
	sku_id: Snowflake;
}

/**
 * @see https://discord.com/developers/docs/resources/user#connection-object-connection-structure
 */
export interface RawConnection {
	friend_sync: boolean;
	id: string;
	integrations?: APIPartialIntegration[];
	name: string;
	revoked?: boolean;
	show_activity: boolean;
	type: ConnectionService;
	two_way_link: boolean;
	verified?: boolean;
	visibility: ConnectionVisibilityType;
}

/**
 * @see https://discord.com/developers/docs/resources/user#nameplate-nameplate-structure
 */
export interface RawNameplateCollectible {
	asset: string;
	label: string;
	palette: NameplatePalette;
	sku_id: Snowflake;
}

/**
 * @see https://discord.com/developers/docs/resources/user#user-object-user-structure
 */
export interface RawUser {
	accent_color?: number | null;
	avatar: string | null;
	avatar_decoration_data?: RawAvatarDecorationData | null;
	banner?: string | null;
	bot?: boolean;
	collectibles?: RawUserCollectibles | null;
	discriminator: string;
	display_name_styles: RawUserDisplayNameStyles | null;
	email?: string | null;
	flags?: UserFlags;
	global_name: string | null;
	id: Snowflake;
	locale?: Locales;
	mfa_enabled?: boolean;
	premium_type?: UserPremiumType;
	primary_guild?: RawUserPrimaryGuild | null;
	public_flags?: UserFlags;
	system?: boolean;
	username: string;
	verified?: boolean;
}

/**
 * @see https://discord.com/developers/docs/resources/user#collectibles-collectible-structure
 */
export interface RawUserCollectibles {
	nameplate?: RawNameplateCollectible;
}

/**
 * @undocumented
 */
export interface RawUserDisplayNameStyles {
	colors: [
		number,
		number,
	];
	effect_id: DisplayNameEffect;
	font_id: DisplayNameFont;
}

/**
 * @see https://discord.com/developers/docs/resources/user#get-current-user-guilds-example-partial-guild
 */
export interface RawUserGuild {
	approximate_member_count: number;
	approximate_presence_count: number;
	banner: string | null;
	features: GuildFeatures[];
	icon: string | null;
	id: Snowflake;
	name: string;
	owner: boolean;
	permissions: string;
}

/**
 * @see https://discord.com/developers/docs/resources/user#user-object-user-primary-guild
 */
export interface RawUserPrimaryGuild {
	badge: string | null;
	identity_enabled: boolean | null;
	identity_guild_id: Snowflake | null;
	tag: string | null;
}

/**
 * @see https://discord.com/developers/docs/resources/user#user-object-user-structure
 */
export type RawPartialUser = Partial<RawUser>;

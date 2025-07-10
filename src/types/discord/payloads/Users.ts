import type { Locales, Snowflake } from "../shared/discord.js";
import type { APIPartialIntegration } from "./Guilds.js";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/user#application-role-connection-object-application-role-connection-structure
 */
export interface APIApplicationRoleConnection {
	metadata: Record<string, string>;
	platform_name: string | null;
	platform_username: string | null;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/user#avatar-decoration-data-object-avatar-decoration-data-structure
 */
export interface APIAvatarDecorationData {
	asset: string;
	sku_id: Snowflake;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/user#connection-object-connection-structure
 */
export interface APIConnection {
	friend_sync: boolean;
	id: Snowflake;
	integrations?: APIPartialIntegration[];
	name: string;
	revoked?: boolean;
	show_activity: boolean;
	two_way_link: boolean;
	type: ConnectionServices;
	verified: boolean;
	visibility: VisibilityTypes;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/user#user-object-user-structure
 */
export interface APIPartialUser
	extends Pick<
		APIUser,
		| "accent_color"
		| "avatar"
		| "avatar_decoration_data"
		| "banner"
		| "bot"
		| "collectibles"
		| "discriminator"
		| "id"
		| "primary_guild"
		| "public_flags"
		| "system"
		| "username"
	> {
	global_name?: string | null;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/user#user-object-user-primary-guild
 */
export interface APIPrimaryGuild {
	badge: string | null;
	identity_enabled: boolean | null;
	identity_guild_id: Snowflake | null;
	tag: string | null;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/user#user-object-user-structure
 */
export interface APIUser {
	accent_color?: number | null;
	avatar: string | null;
	avatar_decoration_data?: APIAvatarDecorationData | null;
	banner?: string | null;
	bot?: boolean;
	collectibles?: APIUserCollectibles | null;
	discriminator: string;
	email?: string | null;
	flags?: number;
	global_name: string | null;
	id: Snowflake;
	locale?: Locales;
	mfa_enabled?: boolean;
	premium_type?: PremiumTypes;
	primary_guild?: APIPrimaryGuild | null;
	public_flags?: number;
	system?: boolean;
	username: string;
	verified?: boolean;

	/**
	 * @undocumented
	 */
	banner_color: string | null;
	/**
	 * @undocumented
	 */
	display_name_styles: APIUserDisplayNameStyles;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/user#collectibles-collectible-structure
 */
export interface APIUserCollectibles {
	nameplate?: APIUserNameplate;
}

/**
 * @undocumented
 */
export interface APIUserDisplayNameStyles {
	colors: number[];
	effect_id: DisplayNameEffects;
	font_id: DisplayNameFonts;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/user#nameplate-nameplate-structure
 */
export interface APIUserNameplate {
	asset: string;
	label: string;
	palette: NameplatePalettes;
	sku_id: Snowflake;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/user#connection-object-services
 */
export enum ConnectionServices {
	AmazonMusic = "amazon-music",
	BattleNet = "battlenet",
	Bluesky = "bluesky",
	BungieNet = "bungie",
	Crunchyroll = "crunchyroll",
	Domain = "domain",
	EpicGames = "epicgames",
	Facebook = "facebook",
	GitHub = "github",
	Instagram = "instagram",
	LeagueOfLegends = "leagueoflegends",
	Mastodon = "mastodon",
	PayPal = "paypal",
	PlayStationNetwork = "playstation",
	Reddit = "reddit",
	RiotGames = "riotgames",
	Roblox = "roblox",
	Skype = "skype",
	Spotify = "spotify",
	Steam = "steam",
	TikTok = "tiktok",
	Twitch = "twitch",
	Twitter = "twitter",
	Xbox = "xbox",
	YouTube = "youtube",
}

/**
 * @undocumented
 */
export enum DisplayNameEffects {
	Gradient = 2,
	Neon = 3,
	Pop = 5,
	Solid = 1,
	Toon = 4,
}

/**
 * @undocumented
 */
export enum DisplayNameFonts {
	Bangers = 1,
	BioRhyme = 2,
	CherryBomb = 3,
	Chicle = 4,
	Compagnon = 5,
	Default = 11,
	MuseoModerno = 6,
	NeoCastel = 7,
	Pixelify = 8,
	Ribes = 9,
	Sinistre = 10,
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/user#nameplate-nameplate-structure
 */
export enum NameplatePalettes {
	Berry = "berry",
	BubbleGum = "bubble_gum",
	Clover = "clover",
	Cobalt = "cobalt",
	Crimson = "crimson",
	Forest = "forest",
	Lemon = "lemon",
	None = "none",
	Sky = "sky",
	Teal = "teal",
	Violet = "violet",
	White = "white",
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/user#user-object-premium-types
 */
export enum PremiumTypes {
	Nitro = 2,
	NitroBasic = 3,
	NitroClassic = 1,
	None = 0,
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/user#user-object-user-flags
 */
export enum UserFlags {
	ActiveDeveloper = 1 << 22,
	BotHTTPInteractions = 1 << 19,
	BugHunterLevel1 = 1 << 3,
	BugHunterLevel2 = 1 << 14,
	CertifiedModerator = 1 << 18,
	EarlySupporter = 1 << 9,
	HypeSquadEvents = 1 << 2,
	HypeSquadHouseBalance = 1 << 8,
	HypeSquadHouseBravery = 1 << 6,
	HypeSquadHouseBrilliance = 1 << 7,
	Partner = 1 << 1,
	Staff = 1 << 0,
	TeamUser = 1 << 10,
	VerifiedBot = 1 << 16,
	VerifiedBotDeveloper = 1 << 17,
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/user#connection-object-visibility-types
 */
export enum VisibilityTypes {
	Everyone = 1,
	None = 0,
}

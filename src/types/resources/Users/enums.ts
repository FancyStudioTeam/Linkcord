/**
 * The services of a connection.
 * @see https://discord.com/developers/docs/resources/user#connection-object-services
 */
export enum ConnectionServices {
	AmazonMusic = "amazon_music",
	BattleNet = "battlenet",
	Bluesky = "bluesky",
	Bungie = "bungie",
	Crunchyroll = "crunchyroll",
	Domain = "domain",
	Ebay = "ebay",
	EpicGames = "epicgames",
	Facebook = "facebook",
	GitHub = "github",
	Instagram = "instagram",
	LeagueOfLegends = "leagueoflegends",
	Mastodon = "mastodon",
	PayPal = "paypal",
	PlayStation = "playstation",
	Reddit = "reddit",
	RiotGames = "riotgames",
	Roblox = "roblox",
	Skype = "skype",
	Spotify = "spotify",
	Steam = "steam",
	TikTok = "tiktok",
	Twitter = "twitter",
	X = "twitter",
	Xbox = "xbox",
	YouTube = "youtube",
}

/**
 * The type of the visibility of a connection.
 * @see https://discord.com/developers/docs/resources/user#connection-object-visibility-types
 */
export enum ConnectionVisibilityTypes {
	Everyone = 1,
	None = 0,
}

/**
 * The palette of a nameplate.
 * @see https://discord.com/developers/docs/resources/user#nameplate-nameplate-structure
 */
export enum NameplatePalette {
	Berry = "berry",
	BubbleGum = "bubble_gum",
	Clover = "clover",
	Cobalt = "cobalt",
	Crimson = "crimson",
	Forest = "forest",
	Lemon = "lemon",
	Sky = "sky",
	Teal = "teal",
	Violet = "violet",
	White = "white",
}

/**
 * The type of the subscription of a user.
 * @see https://discord.com/developers/docs/resources/user#user-object-premium-types
 */
export enum UserPremiumTypes {
	Nitro = 2,
	NitroBasic = 3,
	NitroClassic = 1,
	None = 1,
}

/**
 * The flags of a user.
 * @see https://discord.com/developers/docs/resources/user#user-object-user-flags
 */
export enum UserFlags {
	ActiveDeveloper = 1 << 22,
	BotHTTPInteractions = 1 << 19,
	BugHunterLevel1 = 1 << 3,
	BugHunterLevel2 = 1 << 14,
	CertifiedModerator = 1 << 18,
	EarlySupporter = 1 << 9,
	HypeSquad = 1 << 2,
	HypeSquadHouse1 = 1 << 6,
	HypeSquadHouse2 = 1 << 7,
	HypeSquadHouse3 = 1 << 8,
	Partner = 1 << 1,
	Staff = 1 << 0,
	TeamUser = 1 << 10,
	VerifiedBot = 1 << 16,
	VerifiedDeveloper = 1 << 17,
}

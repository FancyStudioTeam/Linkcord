import type { Snowflake } from "#types";

/**
 * =============================================================================
 * = Parsed Payloads - Represent the transformed data from the "Raw Payloads". =
 * =============================================================================
 */

/**
 * https://discord.com/developers/docs/resources/user#avatar-decoration-data-object-avatar-decoration-data-structure
 */
export interface AvatarDecorationData {
  asset: string;
  skuId: Snowflake;
}

/**
 * ====================================================
 * = Enums - Used to define a set of fixed constants. =
 * ====================================================
 */

/**
 * https://discord.com/developers/docs/resources/user#user-object-premium-types
 */
export enum PremiumTypes {
  None = 0,
  NitroClassic = 1,
  Nitro = 2,
  NitroBasic = 3,
}

/**
 * https://discord.com/developers/docs/resources/user#connection-object-services
 */
export enum Services {
  AmazonMusic = "amazon-music",
  BattleNet = "battlenet",
  Bluesky = "bluesky",
  BungieNet = "bungie",
  Crunchyroll = "crunchyroll",
  Domain = "domain",
  Ebay = "ebay",
  EpicGames = "epicgames",
  Facebook = "facebook",
  GitHub = "github",
  /** @remarks This service can no longer be added. */
  Instagram = "instagram",
  LeagueOfLegends = "leagueoflegends",
  Mastodon = "mastodon",
  PayPal = "paypal",
  PlayStation = "playstation",
  Reddit = "reddit",
  RiotGames = "riotgames",
  Roblox = "roblox",
  /** @remarks This service can no longer be added. */
  Skipe = "skipe",
  Spotify = "spotify",
  Steam = "steam",
  TikTok = "tiktok",
  Twitch = "twitch",
  Twitter = "twitter",
  Xbox = "xbox",
  YouTube = "youtube",
}

/**
 * https://discord.com/developers/docs/resources/user#user-object-user-flags
 */
export enum UserFlags {
  DiscordEmployee = 1 << 0,
  PartneredServerOwner = 1 << 1,
  HypeSquadEvents = 1 << 2,
  BugHunterLevel1 = 1 << 3,
  HouseBravery = 1 << 6,
  HouseBrilliance = 1 << 7,
  HouseBalance = 1 << 8,
  EarlySupporter = 1 << 9,
  TeamUser = 1 << 10,
  BugHunterLevel2 = 1 << 14,
  VerifiedBot = 1 << 16,
  VerifiedBotDeveloper = 1 << 17,
  ModeratorProgramsAlumni = 1 << 18,
  BotHTTPInteractions = 1 << 19,
  ActiveDeveloper = 1 << 22,
}

/**
 * https://discord.com/developers/docs/resources/user#connection-object-visibility-types
 */
export enum VisibilityTypes {
  None = 0,
  Everyone = 1,
}

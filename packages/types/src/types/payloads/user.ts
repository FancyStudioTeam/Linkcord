import type { Nullable, Snowflake } from "#types/shared";
import type { APIPartialIntegration } from "./guild.js";

/**
 * https://discord.com/developers/docs/resources/user#application-role-connection-object-application-role-connection-structure
 */
export interface APIApplicationRoleConnection {
  metadata: Record<string, string | number>;
  platform_name: Nullable<string>;
  platform_username: Nullable<string>;
}

/**
 * https://discord.com/developers/docs/resources/user#avatar-decoration-data-object-avatar-decoration-data-structure
 */
export interface APIAvatarDecorationData {
  asset: string;
  sku_id: Snowflake;
}

/**
 * https://discord.com/developers/docs/resources/user#connection-object-connection-structure
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
 * https://discord.com/developers/docs/resources/user#user-object-user-structure
 */
export interface APIUser {
  accent_color?: Nullable<number>;
  avatar: Nullable<string>;
  avatar_decoration_data?: Nullable<APIAvatarDecorationData>;
  banner?: Nullable<string>;
  bot?: boolean;
  discriminator: string;
  email?: Nullable<string>;
  flags?: UserFlags;
  global_name: Nullable<string>;
  id: Snowflake;
  locale?: string;
  mfa_enabled?: boolean;
  premium_type?: PremiumTypes;
  public_flags?: UserFlags;
  system?: boolean;
  username: string;
  verified?: boolean;
}

/**
 * https://discord.com/developers/docs/resources/user#connection-object-services
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
 * https://discord.com/developers/docs/resources/user#user-object-premium-types
 */
export enum PremiumTypes {
  Nitro = 2,
  NitroBasic = 3,
  NitroClassic = 1,
  None = 0,
}

/**
 * https://discord.com/developers/docs/resources/user#user-object-user-flags
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
 * https://discord.com/developers/docs/resources/user#connection-object-visibility-types
 */
export enum VisibilityTypes {
  Everyone = 1,
  None = 0,
}

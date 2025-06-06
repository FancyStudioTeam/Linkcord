import type { Locale, Snowflake } from "../shared/discord.js";
import type { APIPartialIntegration } from "./guild.js";

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
 * @alpha
 * @remarks
 * - This is not officially documented in the Discord API documentation,
 *   meaning it may change or break at any time.
 */
export interface APIPrimaryGuild {
  badge: string | null;
  identity_enabled: boolean;
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
  /**
   * @alpha
   * @remarks
   * - This is not officially documented in the Discord API documentation,
   *   meaning it may change or break at any time.
   */
  collectibles?: APIUserCollectibles | null;
  /**
   * @remarks
   * - This field value will be set to `0` for non-bot users.
   * - Bot users will still have their old discriminator value.
   */
  discriminator: string;
  email?: string | null;
  flags?: number;
  global_name: string | null;
  id: Snowflake;
  locale?: Locale;
  mfa_enabled?: boolean;
  premium_type?: PremiumTypes;
  /**
   * @alpha
   * @remarks
   * - This is not officially documented in the Discord API documentation,
   *   meaning it may change or break at any time.
   */
  primary_guild?: APIPrimaryGuild | null;
  public_flags?: number;
  system?: boolean;
  username: string;
  verified?: boolean;
}

/**
 * @alpha
 * @remarks
 * - This is not officially documented in the Discord API documentation,
 *   meaning it may change or break at any time.
 */
export interface APIUserCollectibles {
  nameplate?: APIUserNameplate;
}

/**
 * @alpha
 * @remarks
 * - This is not officially documented in the Discord API documentation,
 *   meaning it may change or break at any time.
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
  /**
   * @remarks
   * - This service can no longer be added by users.
   */
  Instagram = "instagram",
  LeagueOfLegends = "leagueoflegends",
  Mastodon = "mastodon",
  PayPal = "paypal",
  PlayStationNetwork = "playstation",
  Reddit = "reddit",
  RiotGames = "riotgames",
  Roblox = "roblox",
  /**
   * @remarks
   * - This service can no longer be added by users.
   */
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
 * @alpha
 * @remarks
 * - This is not officially documented in the Discord API documentation,
 *   meaning it may change or break at any time.
 */
export enum NameplatePalettes {
  Berry = "berry",
  BubbleGum = "bubble_gum",
  Clover = "clover",
  Cobalt = "cobalt",
  Crimson = "crimson",
  Forest = "forest",
  None = "none",
  Sky = "sky",
  Teal = "teal",
  Violet = "violet",
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

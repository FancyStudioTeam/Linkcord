import type { ISO8601Date, Nullable, Snowflake } from "#types";

/**
 * ====================================================================
 * = Raw Payloads - Represent the received data from the Discord API. =
 * ====================================================================
 */

/**
 * https://discord.com/developers/docs/resources/guild#incidents-data-object-incidents-data-structure
 */
export interface APIIncidentsData {
  dm_spam_detected_at?: Nullable<ISO8601Date>;
  dms_disabled_until: Nullable<ISO8601Date>;
  invites_disabled_until: Nullable<ISO8601Date>;
  raid_detected_at?: Nullable<ISO8601Date>;
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-object-guild-structure
 */
export interface APIGuild {
  // TODO: Add "APIEmoji" type for "emojis" property.
  // emojis: APIEmoji[];
  // TODO: Add "APIRole" type for "roles" property.
  // roles: APIRole[];
  // TODO: Add "APISticker" type for "stickers" property.
  // stickers?: APISticker[]
  afk_channel_id: Nullable<Snowflake>;
  afk_timeout: number;
  application_id: Nullable<Snowflake>;
  approximate_member_count?: number;
  approximate_presence_count?: number;
  banner: Nullable<string>;
  default_message_notifications: DefaultMessageNotificationLevel;
  description: Nullable<string>;
  discovery_splash: Nullable<string>;
  explicit_content_filter: ExplicitContentFilterLevel;
  features: GuildFeatures[];
  icon: Nullable<string>;
  icon_hash?: Nullable<string>;
  id: Snowflake;
  incidents_data: APIIncidentsData;
  max_members?: number;
  max_presences?: Nullable<number>;
  max_video_channel_users?: number;
  mfa_level: MFALevel;
  name: string;
  nsfw_level: GuildNSFWLevel;
  owner?: boolean;
  owner_id: Snowflake;
  permissions?: string;
  preferred_locale: string;
  premium_progress_bar_enabled: boolean;
  premium_subscription_count?: number;
  premium_tier: PremiumTier;
  public_updates_channel_id: Nullable<Snowflake>;
  rules_channel_id: Nullable<Snowflake>;
  safety_alerts_channel_id: Nullable<Snowflake>;
  splash: Nullable<string>;
  system_channel_flags: number;
  system_channel_id: Nullable<Snowflake>;
  vanity_url_code: Nullable<string>;
  verification_level: VerificationLevel;
  welcome_screen?: APIWelcomeScreen;
  widget_channel_id?: Nullable<Snowflake>;
  widget_enabled?: boolean;
}

export interface APIPartialGuild
  extends Pick<
    APIGuild,
    "approximate_member_count" | "approximate_presence_count" | "banner" | "features" | "icon" | "id" | "name"
  > {
  owner: boolean;
  permissions: string;
}

/**
 * https://discord.com/developers/docs/resources/guild#unavailable-guild-object-example-unavailable-guild
 */
export interface APIUnavailableGuild extends Pick<APIGuild, "id"> {
  unavailable: boolean;
}

/**
 * https://discord.com/developers/docs/resources/guild#welcome-screen-object-welcome-screen-structure
 */
export interface APIWelcomeScreen {
  description: Nullable<string>;
  welcome_channels: APIWelcomeScreenChannel[];
}

/**
 * https://discord.com/developers/docs/resources/guild#welcome-screen-object-welcome-screen-channel-structure
 */
export interface APIWelcomeScreenChannel {
  channel_id: Snowflake;
  description: string;
  emoji_id: Nullable<Snowflake>;
  emoji_name: Nullable<string>;
}

/**
 * ====================================================
 * = Enums - Used to define a set of fixed constants. =
 * ====================================================
 */

/**
 * https://discord.com/developers/docs/resources/guild#guild-object-default-message-notification-level
 */
export enum DefaultMessageNotificationLevel {
  AllMessages = 0,
  OnlyMentions = 1,
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-object-explicit-content-filter-level
 */
export enum ExplicitContentFilterLevel {
  Disabled = 0,
  MembersWithoutRoles = 1,
  AllMembers = 2,
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-object-guild-features
 */
export enum GuildFeatures {
  AnimatedBanner = "ANIMATED_BANNER",
  AnimatedIcon = "ANIMATED_ICON",
  ApplicationCommandPermissionsV2 = "APPLICATION_COMMAND_PERMISSIONS_V2",
  AutoModeration = "AUTO_MODERATION",
  Banner = "BANNER",
  Community = "COMMUNITY",
  CreatorMonetizationProvisional = "CREATOR_MONETIZATION_PROVISIONAL",
  CreatorStorePage = "CREATOR_STORE_PAGE",
  Discoverable = "DISCOVERABLE",
  Featurable = "FEATURABLE",
  InvitesDisabled = "INVITES_DISABLED",
  InviteSplash = "INVITE_SPLASH",
  MemberVerificationGateEnabled = "MEMBER_VERIFICATION_GATE_ENABLED",
  MoreSoundboard = "MORE_SOUNDBOARD",
  MoreStickers = "MORE_STICKERS",
  News = "NEWS",
  Partnered = "PARTNERED",
  PreviewEnabled = "PREVIEW_ENABLED",
  RaidAlertsDisabled = "RAID_ALERTS_DISABLED",
  RoleIcons = "ROLE_ICONS",
  RoleSubscriptionsAvailableForPurchase = "ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE",
  RoleSubscriptionsEnabled = "ROLE_SUBSCRIPTIONS_ENABLED",
  Soundboard = "SOUNDBOARD",
  TicketedEventsEnabled = "TICKETED_EVENTS_ENABLED",
  VanityUrl = "VANITY_URL",
  Verified = "VERIFIED",
  VIPRegions = "VIP_REGIONS",
  WelcomeScreenEnabled = "WELCOME_SCREEN_ENABLED",
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-object-guild-nsfw-level
 */
export enum GuildNSFWLevel {
  Default = 0,
  Explicit = 1,
  Safe = 2,
  AgeRestricted = 3,
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-object-mfa-level
 */
export enum MFALevel {
  None = 0,
  Elevated = 1,
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-object-premium-tier
 */
export enum PremiumTier {
  None = 0,
  Tier1 = 1,
  Tier2 = 2,
  Tier3 = 3,
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-object-system-channel-flags
 */
export enum SystemChannelFlags {
  SupressJoinNotifications = 1 << 0,
  SupressPremiumSubscriptions = 1 << 1,
  SupressGuildReminderNotifications = 1 << 2,
  SupressJoinNotificationReplies = 1 << 3,
  SupressRoleSubscriptionPurchaseNotifications = 1 << 4,
  SupressRoleSubscriptionPurchaseNotificationReplies = 1 << 5,
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-object-verification-level
 */
export enum VerificationLevel {
  None = 0,
  Low = 1,
  Medium = 2,
  High = 3,
  VeryHigh = 4,
}

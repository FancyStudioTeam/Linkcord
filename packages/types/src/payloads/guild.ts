import type { StatusTypes } from "../gateway/index.js";
import type { ISO8601Date, Snowflake } from "../shared/discord.js";
import type { APIEmoji } from "./emoji.js";
import type { OAuth2Scopes } from "./oauth2.js";
import type { APIRole } from "./permission.js";
import type { APISticker } from "./sticker.js";
import type { APIAvatarDecorationData, APIUser } from "./user.js";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#ban-object-ban-structure
 */
export interface APIBan {
  reason: string | null;
  user: APIUser;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/user#get-current-user-guilds-example-partial-guild
 */
export interface APICurrentUserGuild
  extends Pick<
    APIGuild,
    | "approximate_member_count"
    | "approximate_presence_count"
    | "features"
    | "icon"
    | "id"
    | "name"
    | "owner"
    | "permissions"
  > {}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#guild-object-guild-structure
 */
export interface APIGuild {
  afk_channel_id: Snowflake | null;
  afk_timeout: number;
  application_id: Snowflake | null;
  approximate_member_count?: number;
  approximate_presence_count?: number;
  banner: string | null;
  default_message_notifications: DefaultMessageNotificationLevel;
  description: string | null;
  discovery_splash: string | null;
  emojis: APIEmoji[];
  explicit_content_filter: ExplicitContentFilterLevel;
  features: GuildFeatures[];
  icon: string | null;
  icon_hash?: string | null;
  id: Snowflake;
  incidents_data: APIIncidentsData | null;
  max_members?: number;
  max_presences?: number | null;
  max_video_channel_users?: number;
  mfa_level: MFALevel;
  name: string;
  nsfw_level: GuildNSFWLevel;
  /**
   * @remarks
   * - This field is only present when fetching the current user guilds.
   */
  owner?: boolean;
  owner_id: Snowflake;
  /**
   * @remarks
   * - This field is only present when fetching the current user guilds.
   */
  permissions?: string;
  preferred_locale: string;
  premium_progress_bar_enabled?: boolean;
  premium_subscription_count?: number;
  premium_tier: PremiumTier;
  public_updates_channel_id: Snowflake | null;
  roles: APIRole[];
  rules_channel_id: Snowflake | null;
  safety_alerts_channel_id: Snowflake | null;
  splash: string | null;
  stickers?: APISticker[];
  system_channel_flags: SystemChannelFlags;
  system_channel_id: Snowflake | null;
  vanity_code_url: string | null;
  verification_level: VerificationLevel;
  welcome_screen?: APIWelcomeScreen;
  widget_channel_id?: Snowflake | null;
  widget_enabled?: boolean;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#guild-member-object-guild-member-structure
 */
export interface APIGuildMember {
  avatar?: string | null;
  avatar_decoration_data?: APIAvatarDecorationData | null;
  banner?: string | null;
  communication_disabled_until?: ISO8601Date | null;
  deaf: boolean;
  flags: GuildMemberFlags;
  joined_at: ISO8601Date;
  mute: boolean;
  nick?: string | null;
  pending?: boolean;
  permissions?: string;
  premium_since?: ISO8601Date | null;
  roles: Snowflake[];
  user?: APIUser;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#guild-onboarding-object-guild-onboarding-structure
 */
export interface APIGuildOnboarding {
  default_channel_ids: Snowflake[];
  enabled: boolean;
  guild_id: Snowflake;
  mode: OnboardingMode;
  prompts: APIGuildOnboardingPrompt[];
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#guild-onboarding-object-onboarding-prompt-structure
 */
export interface APIGuildOnboardingPrompt {
  id: Snowflake;
  in_onboarding: boolean;
  options: APIGuildOnboardingPromptOption[];
  required: boolean;
  single_select: boolean;
  title: string;
  type: PromptTypes;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#guild-onboarding-object-prompt-option-structure
 */
export interface APIGuildOnboardingPromptOption {
  channel_ids: Snowflake[];
  description: string | null;
  emoji?: APIEmoji;
  emoji_animated?: boolean;
  emoji_id?: Snowflake;
  emoji_name?: string;
  id: Snowflake;
  role_ids: Snowflake[];
  title: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#guild-preview-object-guild-preview-structure
 */
export interface APIGuildPreview {
  approximate_member_count: number;
  approximate_presence_count: number;
  description: string | null;
  discovery_splash: string | null;
  emojis: APIEmoji[];
  features: GuildFeatures[];
  icon: string | null;
  id: Snowflake;
  name: string;
  splash: string | null;
  stickers: APISticker[];
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#guild-widget-object-guild-widget-structure
 */
export interface APIGuildWidget {
  channels: APIGuildWidgetChannel[];
  id: Snowflake;
  instant_invite: string | null;
  members: APIGuildWidgetMember[];
  name: string;
  presence_count: number;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#guild-widget-object-guild-widget-structure
 */
export interface APIGuildWidgetChannel {
  id: Snowflake;
  name: string;
  position: number;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#guild-widget-object-guild-widget-structure
 */
export interface APIGuildWidgetMember {
  avatar: string | null;
  avatar_url: string;
  discriminator: string;
  id: Snowflake;
  status: StatusTypes;
  username: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#guild-widget-settings-object-guild-widget-settings-structure
 */
export interface APIGuildWidgetSettings {
  channel_id: Snowflake | null;
  enabled: boolean;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#incidents-data-object-incidents-data-structure
 */
export interface APIIncidentsData {
  dm_spam_detected_at?: ISO8601Date | null;
  dms_disabled_until: ISO8601Date | null;
  invites_disabled_until: ISO8601Date | null;
  raid_detected_at?: ISO8601Date | null;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#integration-object-integration-structure
 */
export interface APIIntegration {
  account: APIIntegrationAccount;
  application?: APIIntegrationApplication;
  /**
   * @remarks
   * - This field is not provided for Discord bot integrations.
   */
  enable_emoticons?: boolean;
  enabled: boolean;
  /**
   * @remarks
   * - This field is not provided for Discord bot integrations.
   */
  expire_behavior?: IntegrationExpireBehaviors;
  /**
   * @remarks
   * - This field is not provided for Discord bot integrations.
   */
  expire_grace_period?: number;
  id: Snowflake;
  name: string;
  /**
   * @remarks
   * - This field is not provided for Discord bot integrations.
   */
  revoked?: boolean;
  /**
   * @remarks
   * - This field is not provided for Discord bot integrations.
   */
  role_id?: Snowflake;
  scopes?: OAuth2Scopes[];
  /**
   * @remarks
   * - This field is not provided for Discord bot integrations.
   */
  subscriber_count?: number;
  synced_at?: ISO8601Date;
  /**
   * @remarks
   * - This field is not provided for Discord bot integrations.
   */
  syncing?: boolean;
  type: IntegrationTypes;
  user?: APIUser;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#integration-account-object-integration-account-structure
 */
export interface APIIntegrationAccount {
  id: Snowflake;
  name: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#integration-application-object-integration-application-structure
 */
export interface APIIntegrationApplication {
  bot?: APIUser;
  description: string;
  icon: string | null;
  id: Snowflake;
  name: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#guild-object-guild-structure
 * @remarks
 * - This type is not documented by Discord.
 * - Partial structures may be incorrectly implemented here due lack of
 *   documentation.
 */
export interface APIPartialGuild extends Partial<APIGuild> {}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#integration-object-integration-structure
 * @remarks
 * - This type is not documented by Discord.
 * - Partial structures may be incorrectly implemented here due lack of
 *   documentation.
 */
export interface APIPartialIntegration extends Partial<APIIntegration> {}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#unavailable-guild-object-example-unavailable-guild
 */
export interface APIUnavailableGuild extends Pick<APIGuild, "id"> {
  unavailable: boolean;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#welcome-screen-object-welcome-screen-structure
 */
export interface APIWelcomeScreen {
  description: string | null;
  welcome_channels: APIWelcomeScreenChannel[];
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#welcome-screen-object-welcome-screen-channel-structure
 */
export interface APIWelcomeScreenChannel {
  channel_id: Snowflake;
  description: string;
  emoji_id: Snowflake | null;
  emoji_name: string | null;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#guild-object-default-message-notification-level
 */
export enum DefaultMessageNotificationLevel {
  AllMessages = 0,
  OnlyMentions = 1,
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#guild-object-explicit-content-filter-level
 */
export enum ExplicitContentFilterLevel {
  AllMembers = 2,
  Disabled = 0,
  MembersWithoutRoles = 1,
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#guild-object-guild-features
 */
export enum GuildFeatures {
  AnimatedBanner = "ANIMATED_BANNER",
  AnimatedIcon = "ANIMATED_ICON",
  ApplicationCommandPermissionsV2 = "APPLICATION_COMMAND_PERMISSIONS_V2",
  AutoModeration = "AUTO_MODERATION",
  Banner = "BANNER",
  /**
   * @alpha
   * @remarks
   * - This is not officially documented in the Discord API documentation,
   *   meaning it may change or break at any time.
   */
  BotDeveloperEarlyAccess = "BOT_DEVELOPER_EARLY_ACCESS",
  Community = "COMMUNITY",
  CreatorMonetizableProvisional = "CREATOR_MONETIZABLE_PROVISIONAL",
  CreatorStorePage = "CREATOR_STORE_PAGE",
  DeveloperSupportServer = "DEVELOPER_SUPPORT_SERVER",
  Discoverable = "DISCOVERABLE",
  Featurable = "FEATURABLE",
  /**
   * @alpha
   * @remarks
   * - This is not officially documented in the Discord API documentation,
   *   meaning it may change or break at any time.
   */
  InternalEmployeeOnly = "INTERNAL_EMPLOYEE_ONLY",
  InviteSplash = "INVITE_SPLASH",
  InvitesDisabled = "INVITES_DISABLED",
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
  VIPRegions = "VIP_REGIONS",
  VanityUrl = "VANITY_URL",
  Verified = "VERIFIED",
  WelcomeScreenEnabled = "WELCOME_SCREEN_ENABLED",
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#guild-member-object-guild-member-flags
 */
export enum GuildMemberFlags {
  AutomodQuarantinedUsername = 1 << 7,
  BypassesVerification = 1 << 2,
  CompletedHomeActions = 1 << 6,
  CompletedOnboarding = 1 << 1,
  DMSettingsUpsellAcknowledged = 1 << 9,
  DidRejoin = 1 << 0,
  IsGuest = 1 << 4,
  StartedHomeActions = 1 << 5,
  StartedOnboarding = 1 << 3,
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#guild-object-guild-nsfw-level
 */
export enum GuildNSFWLevel {
  AgeRestricted = 3,
  Default = 0,
  Explicit = 1,
  Safe = 2,
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#get-guild-widget-image-widget-style-options
 */
export enum GuildWidgetStyles {
  Banner1 = "banner1",
  Banner2 = "banner2",
  Banner3 = "banner3",
  Banner4 = "banner4",
  Shield = "shield",
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#integration-object-integration-expire-behaviors
 */
export enum IntegrationExpireBehaviors {
  Kick = 1,
  RemoveRole = 0,
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#integration-object-integration-structure
 */
export enum IntegrationTypes {
  Discord = "discord",
  GuildSubscription = "guild_subscription",
  Twitch = "twitch",
  YouTube = "youtube",
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#guild-object-mfa-level
 */
export enum MFALevel {
  Elevated = 1,
  None = 0,
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#guild-onboarding-object-onboarding-mode
 */
export enum OnboardingMode {
  Advanced = 1,
  Default = 0,
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#guild-object-premium-tier
 */
export enum PremiumTier {
  None = 0,
  Tier1 = 1,
  Tier2 = 2,
  Tier3 = 3,
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#guild-onboarding-object-prompt-types
 */
export enum PromptTypes {
  Dropdown = 1,
  MultipleChoice = 0,
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#guild-object-system-channel-flags
 */
export enum SystemChannelFlags {
  SuppressGuildReminderNotifications = 1 << 2,
  SuppressJoinNotifications = 1 << 0,
  SuppressPremiumSubscriptions = 1 << 1,
  SupressJoinNotificationReplies = 1 << 3,
  SupressRoleSubscriptionPurchaseNotificationReplies = 1 << 5,
  SupressRoleSubscriptionPurchaseNotifications = 1 << 4,
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#guild-object-verification-level
 */
export enum VerificationLevel {
  High = 3,
  Low = 1,
  Medium = 2,
  None = 0,
  VeryHigh = 4,
}

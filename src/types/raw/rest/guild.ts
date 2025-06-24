import type {
  APIDefaultReactionEmoji,
  APIForumTag,
  APIGuildChannel,
  APIOverwrite,
  APIThreadChannel,
  APIThreadMember,
  ChannelTypes,
  ForumLayoutTypes,
  SortOrderTypes,
  VideoQualityModes,
} from "../payloads/channel.js";
import type {
  APIBan,
  APIGuild,
  APIGuildMember,
  APIGuildOnboarding,
  APIGuildOnboardingPrompt,
  APIGuildPreview,
  APIGuildWidget,
  APIGuildWidgetSettings,
  APIIncidentsData,
  APIIntegration,
  APIWelcomeScreen,
  APIWelcomeScreenChannel,
  DefaultMessageNotificationLevels,
  ExplicitContentFilterLevels,
  GuildFeatures,
  GuildWidgetStyles,
  MFALevels,
  OnboardingModes,
  VerificationLevels,
} from "../payloads/guild.js";
import type { APIInvite } from "../payloads/invite.js";
import type { APIRole } from "../payloads/permission.js";
import type { APIVoiceRegion } from "../payloads/voice.js";
import type { ImageDataUri, ISO8601Date, Locale, Snowflake } from "../shared/discord.js";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#get-guild-bans-query-string-params
 */
export interface RESTGetGuildBansStringParams {
  after?: Snowflake;
  before?: Snowflake;
  limit?: number;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#search-guild-members-query-string-params
 */
export interface RESTGetGuildMembersSearchStringParams {
  limit?: number;
  query: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#list-guild-members-query-string-params
 */
export interface RESTGetGuildMembersStringParams {
  after?: Snowflake;
  limit?: number;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#get-guild-prune-count
 */
export interface RESTGetGuildPruneCount {
  pruned: number;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#get-guild-prune-count-query-string-params
 */
export interface RESTGetGuildPruneCountStringParams {
  days?: number;
  include_roles?: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#get-guild-query-string-params
 */
export interface RESTGetGuildStringParams {
  with_counts?: boolean;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#list-active-guild-threads
 */
export interface RESTGetGuildThreadsActive {
  members: APIThreadMember[];
  threads: APIThreadChannel[];
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#get-guild-vanity-url
 */
export interface RESTGetGuildVanityUrl {
  code: string | null;
  uses: number;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#get-guild-widget-image-query-string-params
 */
export interface RESTGetGuildWidgetImageStringParams {
  style?: GuildWidgetStyles;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#modify-guild-channel-positions-json-params
 */
export interface RESTPatchGuildChannelPositionsJSONParams {
  id: Snowflake;
  lock_permissions?: boolean | null;
  parent_id?: Snowflake | null;
  position?: number | null;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#modify-guild-json-params
 */
export interface RESTPatchGuildJSONParams {
  afk_channel_id?: Snowflake | null;
  afk_timeout?: number;
  banner?: ImageDataUri | null;
  default_message_notifications?: DefaultMessageNotificationLevels | null;
  description?: string | null;
  discovery_splash?: ImageDataUri | null;
  explicit_content_filter?: ExplicitContentFilterLevels | null;
  features?: GuildFeatures[];
  icon?: ImageDataUri | null;
  name?: string;
  owner_id?: Snowflake;
  preferred_locale?: Locale | null;
  premium_progress_bar_enabled?: boolean;
  public_updates_channel_id?: Snowflake | null;
  region?: string | null;
  rules_channel_id?: Snowflake | null;
  safety_alerts_channel_id?: Snowflake | null;
  splash?: ImageDataUri | null;
  system_channel_flags?: number;
  system_channel_id?: Snowflake | null;
  verification_level?: VerificationLevels | null;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#modify-current-member-json-params
 */
export interface RESTPatchGuildMemberCurrentJSONParams {
  nick?: string | null;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#modify-guild-member-json-params
 */
export interface RESTPatchGuildMemberJSONParams {
  channel_id?: Snowflake | null;
  communication_disabled_until?: ISO8601Date | null;
  deaf?: boolean | null;
  flags?: number | null;
  mute?: boolean | null;
  nick?: string | null;
  roles?: Snowflake[] | null;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#modify-guild-role-json-params
 */
export interface RESTPatchGuildRoleJSONParams {
  color?: number | null;
  hoist?: boolean | null;
  icon?: ImageDataUri | null;
  mentionable?: boolean | null;
  name?: string | null;
  permissions?: string | null;
  unicode_emoji?: string | null;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#modify-guild-role-positions-json-params
 */
export interface RESTPatchGuildRolePositionsJSONParams {
  id: Snowflake;
  position?: number | null;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#modify-guild-welcome-screen-json-params
 */
export interface RESTPatchGuildWelcomeScreenJSONParams {
  description?: string | null;
  enabled?: boolean | null;
  welcome_channels?: APIWelcomeScreenChannel[] | null;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#modify-guild-widget-json-params
 */
export interface RESTPatchGuildWidgetSettingsJSONParams {
  channel_id?: Snowflake | null;
  enabled?: boolean | null;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#bulk-guild-ban
 */
export interface RESTPostGuildBanBulk {
  banned_users: Snowflake[];
  failed_users: Snowflake[];
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#bulk-guild-ban-json-params
 */
export interface RESTPostGuildBanBulkJSONParams {
  user_ids: Snowflake[];
  delete_message_seconds?: number;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#create-guild-channel-json-params
 */
export interface RESTPostGuildChannelJSONParams {
  available_tags?: APIForumTag[] | null;
  bitrate?: number | null;
  default_auto_archive_duration?: number | null;
  default_forum_layout?: ForumLayoutTypes | null;
  default_reaction_emoji?: APIDefaultReactionEmoji | null;
  default_sort_order?: SortOrderTypes | null;
  default_thread_rate_limit_per_user?: number | null;
  name: string;
  nsfw?: boolean | null;
  parent_id?: Snowflake | null;
  permission_overwrites?: APIOverwrite[] | null;
  position?: number | null;
  rate_limit_per_user?: number | null;
  rtc_region?: string | null;
  topic?: string | null;
  type?: ChannelTypes | null;
  user_limit?: number | null;
  video_quality_mode?: VideoQualityModes | null;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#modify-guild-mfa-level
 */
export interface RESTPostGuildMFALevel {
  level: MFALevels;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#modify-guild-mfa-level-json-params
 */
export interface RESTPostGuildMFALevelJSONParams {
  level: MFALevels;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#begin-guild-prune
 */
export interface RESTPostGuildPrune {
  pruned: number;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#begin-guild-prune-json-params
 */
export interface RESTPostGuildPruneJSONParams {
  compute_prune_count: boolean;
  days: number;
  include_roles: Snowflake[];
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#create-guild-role-json-params
 */
export interface RESTPostGuildRoleJSONParams {
  color?: number;
  hoist?: boolean;
  icon?: ImageDataUri | null;
  mentionable?: boolean;
  name?: string;
  permissions?: string;
  unicode_emoji?: string | null;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#create-guild-ban-json-params
 */
export interface RESTPutGuildBanJSONParams {
  delete_message_seconds?: number;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#modify-guild-incident-actions-json-params
 */
export interface RESTPutGuildIncidentActionsJSONParams {
  dms_disabled_until?: ISO8601Date | null;
  invites_disabled_until?: ISO8601Date | null;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#add-guild-member-json-params
 */
export interface RESTPutGuildMemberJSONParams {
  access_token: string;
  deaf?: boolean;
  mute?: boolean;
  nick?: string;
  roles?: Snowflake[];
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#modify-guild-onboarding-json-params
 */
export interface RESTPutGuildOnboardingJSONParams {
  default_channel_ids: Snowflake[];
  enabled: boolean;
  mode: OnboardingModes;
  prompts: APIGuildOnboardingPrompt[];
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#delete-guild
 */
export type RESTDeleteGuild = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#remove-guild-ban
 */
export type RESTDeleteGuildBan = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#delete-guild-integration
 */
export type RESTDeleteGuildIntegration = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#remove-guild-member
 */
export type RESTDeleteGuildMember = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#remove-guilld-member-role
 */
export type RESTDeleteGuildMemberRole = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#delete-guild-role
 */
export type RESTDeleteGuildRole = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#get-guild
 */
export type RESTGetGuild = APIGuild;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#get-guild-ban
 */
export type RESTGetGuildBan = APIBan;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#get-guild-bans
 */
export type RESTGetGuildBans = APIBan[];

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#get-guild-channels
 */
export type RESTGetGuildChannels = APIGuildChannel[];

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#get-guild-integrations
 */
export type RESTGetGuildIntegrations = APIIntegration[];

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#get-guild-invites
 */
export type RESTGetGuildInvites = APIInvite[];

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#get-guild-member
 */
export type RESTGetGuildMember = APIGuildMember;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#list-guild-members
 */
export type RESTGetGuildMembers = APIGuildMember[];

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#search-guild-members
 */
export type RESTGetGuildMembersSearch = APIGuildMember[];

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#get-guild-onboarding
 */
export type RESTGetGuildOnboarding = APIGuildOnboarding;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#get-guild-preview
 */
export type RESTGetGuildPreview = APIGuildPreview;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#get-guild-role
 */
export type RESTGetGuildRole = APIRole;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#get-guild-roles
 */
export type RESTGetGuildRoles = APIRole[];

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#get-guild-voice-regions
 */
export type RESTGetGuildVoiceRegions = APIVoiceRegion[];

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#get-guild-welcome-screen
 */
export type RESTGetGuildWelcomeScreen = APIWelcomeScreen;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#get-guild-widget
 */
export type RESTGetGuildWidget = APIGuildWidget;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#get-guild-widget-image
 */
export type RESTGetGuildWidgetImage = Blob;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#get-guild-widget-settings
 */
export type RESTGetGuildWidgetSettings = APIGuildWidgetSettings;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#modify-guild
 */
export type RESTPatchGuild = APIGuild;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#modify-guild-channel-positions
 */
export type RESTPatchGuildChannelPositions = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#modify-guild-member
 */
export type RESTPatchGuildMember = APIGuildMember;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#modify-current-member
 */
export type RESTPatchGuildMemberCurrent = APIGuildMember;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#modify-guild-role
 */
export type RESTPatchGuildRole = APIRole;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#modify-guild-role-positions
 */
export type RESTPatchGuildRolePositions = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#modify-guild-welcome-screen
 */
export type RESTPatchGuildWelcomeScreen = APIWelcomeScreen;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#modify-guild-widget
 */
export type RESTPatchGuildWidgetSettings = APIGuildWidgetSettings;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#create-guild-channel
 */
export type RESTPostGuildChannel = APIGuildChannel;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#create-guild-role
 */
export type RESTPostGuildRole = APIRole;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#create-guild-ban
 */
export type RESTPutGuildBan = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#modify-guild-incident-actions
 */
export type RESTPutGuildIncidentActions = APIIncidentsData;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#add-guild-member
 */
export type RESTPutGuildMember = APIGuildMember | undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#add-guild-member-role
 */
export type RESTPutGuildMemberRole = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#modify-guild-onboarding
 */
export type RESTPutGuildOnboarding = APIGuildOnboarding;

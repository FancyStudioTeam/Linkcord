import type { APIAuditLog, AuditLogEvents } from "../payloads/AuditLogs.js";
import type {
  APIAutoModerationAction,
  APIAutoModerationRule,
  APIAutoModerationTriggerMetadata,
  AutoModerationEventTypes,
  AutoModerationTriggerTypes,
} from "../payloads/AutoModeration.js";
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
} from "../payloads/Channels.js";
import type { APIEmoji } from "../payloads/Emojis.js";
import type {
  APIGuildScheduledEvent,
  APIGuildScheduledEventEntityMetadata,
  APIGuildScheduledEventRecurrenceRule,
  APIGuildScheduledEventUser,
  GuildScheduledEventEntityTypes,
  GuildScheduledEventPrivacyLevel,
  GuildScheduledEventStatus,
} from "../payloads/GuildScheduledEvents.js";
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
} from "../payloads/Guilds.js";
import type { APIGuildTemplate } from "../payloads/GuildTemplates.js";
import type { APIInvite } from "../payloads/Invites.js";
import type { APIRole } from "../payloads/Permissions.js";
import type { APIGuildSoundboardSound } from "../payloads/Soundboards.js";
import type { APISticker } from "../payloads/Stickers.js";
import type { APIVoiceRegion, APIVoiceState } from "../payloads/Voice.js";
import type { AudioDataUri, ImageDataUri, ISO8601Date, Locales, Snowflake } from "../shared/discord.js";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/audit-log#get-guild-audit-log-query-string-params
 */
export interface RESTGetGuildAuditLogStringParams {
  action_type?: AuditLogEvents;
  after?: Snowflake;
  before?: Snowflake;
  limit?: number;
  user_id?: Snowflake;
}

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
 * @see https://discord.com/developers/docs/resources/guild-scheduled-event#get-guild-scheduled-event-query-string-params
 */
export interface RESTGetGuildScheduledEventQueryStringParams {
  with_user_count?: boolean;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild-scheduled-event#get-guild-scheduled-event-users-query-string-params
 */
export interface RESTGetGuildScheduledEventUsersQueryStringParams {
  after?: Snowflake;
  before?: Snowflake;
  limit?: number;
  with_member?: boolean;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild-scheduled-event#list-scheduled-events-for-guild-query-string-params
 */
export interface RESTGetGuildScheduledEventsQueryStringParams {
  with_user_count?: boolean;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/soundboard#list-guild-soundboard-sounds
 */
export interface RESTGetGuildSoundboardSounds {
  items: APIGuildSoundboardSound[];
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
 * @see https://discord.com/developers/docs/resources/auto-moderation#modify-auto-moderation-rule-json-params
 */
export interface RESTPatchGuildAutoModerationRuleJSONParams {
  actions?: APIAutoModerationAction[];
  enabled?: boolean;
  event_type?: AutoModerationEventTypes;
  exempt_channels?: Snowflake[];
  exempt_roles?: Snowflake[];
  name?: string;
  trigger_metadata?: APIAutoModerationTriggerMetadata;
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
 * @see https://discord.com/developers/docs/resources/emoji#modify-guild-emoji-json-params
 */
export interface RESTPatchGuildEmojiJSONParams {
  name?: string;
  roles?: Snowflake[] | null;
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
  preferred_locale?: Locales | null;
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
 * @see https://discord.com/developers/docs/resources/guild-scheduled-event#modify-guild-scheduled-event-json-params
 */
export interface RESTPatchGuildScheduledEventJSONParams {
  channel_id?: Snowflake | null;
  description?: string | null;
  entity_metadata?: APIGuildScheduledEventEntityMetadata | null;
  entity_type?: GuildScheduledEventEntityTypes;
  image?: ImageDataUri;
  name?: string;
  privacy_level?: GuildScheduledEventPrivacyLevel;
  recurrence_rule?: APIGuildScheduledEventRecurrenceRule | null;
  scheduled_end_time?: ISO8601Date;
  scheduled_start_time?: ISO8601Date;
  status?: GuildScheduledEventStatus;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/soundboard#modify-guild-soundboard-sound-json-params
 */
export interface RESTPatchGuildSoundboardSoundJSONParams {
  emoji_id?: Snowflake | null;
  emoji_name?: string | null;
  name?: string;
  volume?: number | null;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/sticker#modify-guild-sticker-json-params
 */
export interface RESTPatchGuildStickerJSONParams {
  description?: string | null;
  name?: string;
  tags?: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild-template#modify-guild-template-json-params
 */
export interface RESTPatchGuildTemplateJSONParams {
  description?: string | null;
  name?: string;
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
 * @see https://discord.com/developers/docs/resources/voice#modify-current-user-voice-state-json-params
 */
export interface RESTPatchGuildVoiceStateCurrentJSONParams {
  channel_id?: string;
  request_to_speak_timestamp?: ISO8601Date | null;
  suppress?: boolean;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/voice#modify-user-voice-state-json-params
 */
export interface RESTPatchGuildVoiceStateJSONParams {
  channel_id: string;
  suppress?: boolean;
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
 * @see https://discord.com/developers/docs/resources/auto-moderation#create-auto-moderation-rule-json-params
 */
export interface RESTPostGuildAutoModerationRuleJSONParams {
  actions: APIAutoModerationAction[];
  enabled?: boolean;
  event_type: AutoModerationEventTypes;
  exempt_channels?: Snowflake[];
  exempt_roles?: Snowflake[];
  name: string;
  trigger_metadata?: APIAutoModerationTriggerMetadata;
  trigger_type: AutoModerationTriggerTypes;
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
 * @see https://discord.com/developers/docs/resources/emoji#create-guild-emoji-json-params
 */
export interface RESTPostGuildEmojiJSONParams {
  image: ImageDataUri;
  name: string;
  roles: Snowflake[];
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild-template#create-guild-from-guild-template-json-params
 */
export interface RESTPostGuildFromTemplateJSONParams {
  icon?: ImageDataUri;
  name: string;
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
 * @see https://discord.com/developers/docs/resources/guild-scheduled-event#create-guild-scheduled-event-json-params
 */
export interface RESTPostGuildScheduledEventJSONParams {
  channel_id?: Snowflake;
  description?: string;
  entity_metadata?: APIGuildScheduledEventEntityMetadata;
  entity_type: GuildScheduledEventEntityTypes;
  image?: ImageDataUri;
  name: string;
  privacy_level: GuildScheduledEventPrivacyLevel;
  recurrence_rule?: APIGuildScheduledEventRecurrenceRule;
  scheduled_end_time?: ISO8601Date;
  scheduled_start_time: ISO8601Date;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/soundboard#create-guild-soundboard-sound
 */
export interface RESTPostGuildSoundboardSoundJSONParams {
  emoji_id?: Snowflake | null;
  emoji_name?: string | null;
  name: string;
  sound: AudioDataUri;
  volume?: number | null;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/sticker#create-guild-sticker-form-params
 */
export interface RESTPostGuildStickerFormParams {
  description: string;
  file: unknown;
  name: string;
  tags: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild-template#create-guild-template-json-params
 */
export interface RESTPostGuildTemplateJSONParams {
  description?: string | null;
  name: string;
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
 * @see https://discord.com/developers/docs/resources/auto-moderation#delete-auto-moderation-rule
 */
export type RESTDeleteGuildAutoModerationRule = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#remove-guild-ban
 */
export type RESTDeleteGuildBan = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/emoji#delete-guild-emoji
 */
export type RESTDeleteGuildEmoji = undefined;

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
 * @see https://discord.com/developers/docs/resources/guild-scheduled-event#delete-guild-scheduled-event
 */
export type RESTDeleteGuildScheduledEvent = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/soundboard#delete-guild-soundboard-sound
 */
export type RESTDeleteGuildSoundboardSound = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/sticker#delete-guild-sticker
 */
export type RESTDeleteGuildSticker = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild-template#delete-guild-template
 */
export type RESTDeleteGuildTemplate = APIGuildTemplate;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#get-guild
 */
export type RESTGetGuild = APIGuild;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/audit-log#get-guild-audit-log
 */
export type RESTGetGuildAuditLog = APIAuditLog;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/auto-moderation#get-auto-moderation-rule
 */
export type RESTGetGuildAutoModerationRule = APIAutoModerationRule;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/auto-moderation#list-auto-moderation-rules-for-guild
 */
export type RESTGetGuildAutoModerationRules = APIAutoModerationRule[];

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
 * @see https://discord.com/developers/docs/resources/emoji#get-guild-emoji
 */
export type RESTGetGuildEmoji = APIEmoji;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/emoji#list-guild-emojis
 */
export type RESTGetGuildEmojis = APIEmoji[];

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
 * @see https://discord.com/developers/docs/resources/guild-scheduled-event#get-guild-scheduled-event
 */
export type RESTGetGuildScheduledEvent = APIGuildScheduledEvent;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild-scheduled-event#get-guild-scheduled-event-users
 */
export type RESTGetGuildScheduledEventUsers = APIGuildScheduledEventUser[];

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild-scheduled-event#list-scheduled-events-for-guild
 */
export type RESTGetGuildScheduledEvents = APIGuildScheduledEvent[];

/**
 * @public
 * @see https://discord.com/developers/docs/resources/soundboard#get-guild-soundboard-sound
 */
export type RESTGetGuildSoundboardSound = APIGuildSoundboardSound;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/sticker#get-guild-sticker
 */
export type RESTGetGuildSticker = APISticker;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/sticker#list-guild-stickers
 */
export type RESTGetGuildStickers = APISticker[];

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild-template#get-guild-template
 */
export type RESTGetGuildTemplate = APIGuildTemplate;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild-template#get-guild-templates
 */
export type RESTGetGuildTemplates = APIGuildTemplate[];

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#get-guild-voice-regions
 */
export type RESTGetGuildVoiceRegions = APIVoiceRegion[];

/**
 * @public
 * @see https://discord.com/developers/docs/resources/voice#get-user-voice-state
 */
export type RESTGetGuildVoiceState = APIVoiceState;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/voice#get-current-user-voice-state
 */
export type RESTGetGuildVoiceStateCurrent = APIVoiceState;

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
 * @see https://discord.com/developers/docs/resources/auto-moderation#modify-auto-moderation-rule
 */
export type RESTPatchGuildAutoModerationRule = APIAutoModerationRule;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#modify-guild-channel-positions
 */
export type RESTPatchGuildChannelPositions = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/emoji#modify-guild-emoji
 */
export type RESTPatchGuildEmoji = APIEmoji;

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
 * @see https://discord.com/developers/docs/resources/guild-scheduled-event#modify-guild-scheduled-event
 */
export type RESTPatchGuildScheduledEvent = APIGuildScheduledEvent;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/soundboard#modify-guild-soundboard-sound
 */
export type RESTPatchGuildSoundboardSound = APIGuildSoundboardSound;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/sticker#modify-guild-sticker-json-params
 */
export type RESTPatchGuildSticker = APISticker;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild-template#modify-guild-template
 */
export type RESTPatchGuildTemplate = APIGuildTemplate;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/voice#modify-user-voice-state
 */
export type RESTPatchGuildVoiceState = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/voice#modify-current-user-voice-state
 */
export type RESTPatchGuildVoiceStateCurrent = undefined;

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
 * @see https://discord.com/developers/docs/resources/auto-moderation#create-auto-moderation-rule
 */
export type RESTPostGuildAutoModerationRule = APIAutoModerationRule;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#create-guild-channel
 */
export type RESTPostGuildChannel = APIGuildChannel;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/emoji#create-guild-emoji
 */
export type RESTPostGuildEmoji = APIEmoji;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild-template#create-guild-from-guild-template
 */
export type RESTPostGuildFromTemplate = APIGuild;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#create-guild-role
 */
export type RESTPostGuildRole = APIRole;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild-scheduled-event#create-guild-scheduled-event
 */
export type RESTPostGuildScheduledEvent = APIGuildScheduledEvent;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/soundboard#create-guild-soundboard-sound
 */
export type RESTPostGuildSoundboardSound = APIGuildSoundboardSound;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/sticker#create-guild-sticker
 */
export type RESTPostGuildSticker = APISticker;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild-template#create-guild-template
 */
export type RESTPostGuildTemplate = APIGuildTemplate;

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

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild-template#sync-guild-template
 */
export type RESTPutGuildTemplate = APIGuildTemplate;

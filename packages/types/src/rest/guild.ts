import type { APIGuildChannel, APIThreadChannel } from "../payloads/channel.js";
import type {
  APIBan,
  APIGuild,
  APIGuildMember,
  APIGuildOnboarding,
  APIGuildPreview,
  APIGuildWidget,
  APIGuildWidgetSettings,
  APIIncidentsData,
  APIIntegration,
  APIWelcomeScreen,
  APIWelcomeScreenChannel,
  GuildWidgetStyles,
  MFALevel,
} from "../payloads/guild.js";
import type { APIInvite } from "../payloads/invite.js";
import type { APIRole } from "../payloads/permission.js";
import type { APIVoiceRegion } from "../payloads/voice.js";
import type { Nullable } from "../shared/custom.js";
import type { ISO8601Date, Snowflake } from "../shared/discord.js";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#begin-guild-prune
 */
export interface RESTBeginGuildPrune {
  pruned: number;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#bulk-guild-ban
 */
export interface RESTBulkGuildBan {
  banned_users: Snowflake[];
  failed_users: Snowflake[];
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
 * @see https://discord.com/developers/docs/resources/guild#get-guild-prune-count
 */
export interface RESTGetGuildPruneCount {
  pruned: number;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#get-guild-vanity-url
 */
export interface RESTGetGuildVanityUrl {
  code: Nullable<string>;
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
 * @see https://discord.com/developers/docs/resources/guild#list-active-guild-threads
 */
export interface RESTListActiveGuildThreads {
  threads: APIThreadChannel[];
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#list-guild-members-query-string-params
 */
export interface RESTListGuildMembersStringParams {
  after?: Snowflake;
  limit?: number;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#modify-guild-incident-actions-json-params
 */
export interface RESTModifyGuildIncidentActionsJSONParams {
  /**
   * @remarks
   * - Using `null` as the field value will disable the action.
   */
  dms_disabled_until?: Nullable<ISO8601Date>;
  /**
   * @remarks
   * - Using `null` as the field value will disable the action.
   */
  invites_disabled_until?: Nullable<ISO8601Date>;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#modify-guild-mfa-level-json-params
 */
export interface RESTModifyGuildMFALevelJSONParams {
  level: MFALevel;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#modify-guild-welcome-screen-json-params
 */
export interface RESTModifyGuildWelcomeScreenJSONParams {
  description?: Nullable<string>;
  enabled?: Nullable<boolean>;
  welcome_channels?: Nullable<APIWelcomeScreenChannel[]>;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#search-guild-members-query-string-params
 */
export interface RESTSearchGuildMembersStringParams {
  limit?: number;
  query?: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#add-guild-member
 */
export type RESTAddGuildMember = APIGuildMember | undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#add-guild-member-role
 */
export type RESTAddGuildMemberRole = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#create-guild-ban
 */
export type RESTCreateGuildBan = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#create-guild-channel
 */
export type RESTCreateGuildChannel = APIGuildChannel;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#create-guild-role
 */
export type RESTCreateGuildRole = APIRole;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#delete-guild
 */
export type RESTDeleteGuild = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#delete-guild-integration
 */
export type RESTDeleteGuildIntegration = undefined;

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
export type RESTGetGuildWidgetImage = unknown;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#get-guild-widget-settings
 */
export type RESTGetGuildWidgetSettings = APIGuildWidgetSettings;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#list-guild-members
 */
export type RESTListGuildMembers = APIGuildMember[];

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#modify-current-member
 */
export type RESTModifyCurrentMember = APIGuildMember;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#modify-guild
 */
export type RESTModifyGuild = APIGuild;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#modify-guild-channel-positions
 */
export type RESTModifyGuildChannelPositions = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#modify-guild-incident-actions
 */
export type RESTModifyGuildIncidentActions = APIIncidentsData;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#modify-guild-mfa-level
 */
export type RESTModifyGuildMFALevel = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#modify-guild-member
 */
export type RESTModifyGuildMember = APIGuildMember;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#modify-guild-onboarding
 */
export type RESTModifyGuildOnboarding = APIGuildOnboarding;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#modify-guild-role
 */
export type RESTModifyGuildRole = APIRole;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#modify-guild-role-positions
 */
export type RESTModifyGuildRolePositions = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#modify-guild-welcome-screen
 */
export type RESTModifyGuildWelcomeScreen = APIWelcomeScreen;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#modify-guild-widget
 */
export type RESTModifyGuildWidget = APIGuildWidgetSettings;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#remove-guild-ban
 */
export type RESTRemoveGuildBan = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#remove-guild-member
 */
export type RESTRemoveGuildMember = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#remove-guilld-member-role
 */
export type RESTRemoveGuildMemberRole = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/guild#search-guild-members
 */
export type RESTSearchGuildMembers = APIGuildMember[];

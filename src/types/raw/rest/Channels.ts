import type {
  APIChannel,
  APIDefaultReactionEmoji,
  APIFollowedChannel,
  APIForumTag,
  APIOverwrite,
  APIPrivateThreadChannel,
  APIPublicThreadChannel,
  APIThreadChannel,
  APIThreadMember,
  AutoArchiveDuration,
  ChannelTypes,
  ForumLayoutTypes,
  OverwriteTypes,
  SortOrderTypes,
  VideoQualityModes,
} from "../payloads/Channels.js";
import type { APIInvite, InviteTargetTypes } from "../payloads/Invites.js";
import type { APIForumMessage, APIMessage } from "../payloads/Messages.js";
import type { APIUser } from "../payloads/Users.js";
import type { ImageDataUri, ISO8601Date, Snowflake } from "../shared/discord.js";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/poll#get-answer-voters
 */
export interface RESTGetChannelPollAnswerVoters {
  users: APIUser[];
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/poll#get-answer-voters-query-string-params
 */
export interface RESTGetChannelPollAnswerVotersQueryStringParams {
  after?: Snowflake;
  limit?: number;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#list-private-archived-threads
 */
export interface RESTGetChannelPrivateThreadsArchived {
  has_more: boolean;
  members: APIThreadMember[];
  threads: APIPrivateThreadChannel[];
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#list-private-archived-threads-query-string-params
 */
export interface RESTGetChannelPrivateThreadsArchivedQueryStringParams {
  before?: ISO8601Date;
  limit?: number;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#list-public-archived-threads
 */
export interface RESTGetChannelPublicThreadsArchived {
  has_more: boolean;
  members: APIThreadMember[];
  threads: APIPublicThreadChannel[];
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#list-public-archived-threads-query-string-params
 */
export interface RESTGetChannelPublicThreadsArchivedQueryStringParams {
  before?: ISO8601Date;
  limit?: number;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#get-thread-member-query-string-params
 */
export interface RESTGetChannelThreadMemberQueryStringParams {
  with_member?: boolean;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#list-thread-members-query-string-params
 */
export interface RESTGetChannelThreadMembersQueryStringParams {
  after?: Snowflake;
  limit?: number;
  with_member?: boolean;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#list-joined-private-archived-threads
 */
export interface RESTGetChannelUserPrivateThreadsArchived {
  has_more: boolean;
  members: APIThreadMember[];
  threads: APIPrivateThreadChannel[];
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#list-joined-private-archived-threads-query-string-params
 */
export interface RESTGetChannelUserPrivateThreadsArchivedQueryStringParams {
  before?: ISO8601Date;
  limit?: number;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#modify-channel-json-params-group-dm
 */
export interface RESTPatchChannelGroupDMJSONParams {
  icon?: ImageDataUri;
  name?: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#modify-channel-json-params-guild-channel
 */
export interface RESTPatchChannelJSONParams {
  available_tags?: APIForumTag[];
  bitrate?: number | null;
  default_auto_archive_duration?: AutoArchiveDuration | null;
  default_forum_layout?: ForumLayoutTypes;
  default_reaction_emoji?: APIDefaultReactionEmoji | null;
  default_sort_order?: SortOrderTypes | null;
  default_thread_rate_limit_per_user?: number;
  flags?: number;
  name?: string;
  nsfw?: boolean | null;
  parent_id?: Snowflake | null;
  permission_overwrites?: APIOverwrite[] | null;
  position?: number | null;
  rate_limit_per_user?: number | null;
  rtc_region?: string | null;
  topic?: string | null;
  type?: ChannelTypes.GuildAnnouncement | ChannelTypes.GuildText;
  user_limit?: number | null;
  video_quality_mode?: VideoQualityModes | null;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#modify-channel-json-params-thread
 */
export interface RESTPatchChannelThreadJSONParams {
  applied_tags?: Snowflake[];
  archived?: boolean;
  auto_archive_duration?: AutoArchiveDuration;
  flags?: number;
  invitable?: boolean;
  locked?: boolean;
  name?: string;
  rate_limit_per_user?: number | null;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#follow-announcement-channel-json-params
 */
export interface RESTPostChannelFollowerJSONParams {
  webhook_channel_id: Snowflake;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#start-thread-in-forum-or-media-channel-jsonform-params
 */
export interface RESTPostChannelForumThreadJSONParams {
  applied_tags?: Snowflake[];
  auto_archive_duration?: AutoArchiveDuration;
  message: APIForumMessage;
  name: string;
  rate_limit_per_user?: number | null;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#create-channel-invite-json-params
 */
export interface RESTPostChannelInviteJSONParams {
  max_age?: number;
  max_uses?: number;
  target_application_id?: Snowflake;
  target_type: InviteTargetTypes;
  target_user_id?: Snowflake;
  temporary?: boolean;
  unique?: boolean;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#start-thread-from-message-json-params
 */
export interface RESTPostChannelMessageThreadJSONParams {
  auto_archive_duration?: AutoArchiveDuration;
  name: string;
  rate_limit_per_user?: number | null;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/soundboard#send-soundboard-sound-json-params
 */
export interface RESTPostChannelSoundboardSoundJSONParams {
  sound_id: Snowflake;
  source_guild_id?: Snowflake;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#start-thread-without-message-json-params
 */
export interface RESTPostChannelThreadJSONParams {
  name: string;
  auto_archive_duration?: AutoArchiveDuration;
  type?: ChannelTypes.AnnouncementThread | ChannelTypes.PrivateThread | ChannelTypes.PublicThread;
  invitable?: boolean;
  rate_limit_per_user?: number | null;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#edit-channel-permissions-json-params
 */
export interface RESTPutChannelPermissionsJSONParams {
  allow?: string | null;
  deny?: string | null;
  type: OverwriteTypes;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#group-dm-add-recipient-json-params
 */
export interface RESTPutChannelRecipientJSONParams {
  access_token: string;
  nick: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#deleteclose-channel
 */
export type RESTDeleteChannel = APIChannel;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#delete-channel-permission
 */
export type RESTDeleteChannelPermission = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#group-dm-remove-recipient
 */
export type RESTDeleteChannelRecipient = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#remove-thread-member
 */
export type RESTDeleteChannelThreadMember = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#leave-thread
 */
export type RESTDeleteChannelThreadMemberCurrent = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#get-channel
 */
export type RESTGetChannel = APIChannel;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#get-channel-invites
 */
export type RESTGetChannelInvites = APIInvite[];

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#get-thread-member
 */
export type RESTGetChannelThreadMember = APIThreadMember;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#list-thread-members
 */
export type RESTGetChannelThreadMembers = APIThreadMember[];

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#modify-channel
 */
export type RESTPatchChannel = APIChannel;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#follow-announcement-channel
 */
export type RESTPostChannelFollower = APIFollowedChannel;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#start-thread-in-forum-or-media-channel
 */
export type RESTPostChannelForumThread = APIThreadChannel;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#create-channel-invite
 */
export type RESTPostChannelInvite = APIInvite;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#start-thread-from-channel
 */
export type RESTPostChannelMessageThread = APIThreadChannel;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/poll#end-poll
 */
export type RESTPostChannelPollExpire = APIMessage;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/soundboard#send-soundboard-sound
 */
export type RESTPostChannelSoundboardSound = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#start-thread-without-message
 */
export type RESTPostChannelThread = APIThreadChannel;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#trigger-typing-indicator
 */
export type RESTPostChannelTyping = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#edit-channel-permissions
 */
export type RESTPutChannelPermissions = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#group-dm-add-recipient
 */
export type RESTPutChannelRecipient = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#add-thread-member
 */
export type RESTPutChannelThreadMember = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#join-thread
 */
export type RESTPutChannelThreadMemberCurrent = undefined;

import type { ISO8601Date, Nullable, Snowflake } from "#types/shared";
import type { APIGuildMember } from "./guild.js";
import type { APIUser } from "./user.js";

/**
 * https://discord.com/developers/docs/resources/channel#channel-object-channel-structure
 */
export interface APIChannel {
  application_id?: Snowflake;
  applied_tags?: Snowflake[];
  available_tags?: APIForumTag[];
  bitrate?: number;
  default_auto_archive_duration?: AutoArchiveDuration;
  default_forum_layout?: ForumLayoutTypes;
  default_reaction_emoji?: APIDefaultReactionEmoji;
  default_sort_order?: SortOrderTypes;
  flags?: ChannelFlags;
  guild_id?: Snowflake;
  icon?: Nullable<string>;
  id: Snowflake;
  last_message_id?: Nullable<Snowflake>;
  last_pin_timestamp?: Nullable<string>;
  managed?: boolean;
  member?: APIThreadMember;
  member_count?: number;
  message_count?: number;
  name?: Nullable<string>;
  nsfw?: boolean;
  owner_id?: Snowflake;
  parent_id?: Nullable<Snowflake>;
  permission_overwrites?: APIOverwrite[];
  permissions?: string;
  position?: number;
  rate_limit_per_user?: number;
  recipients?: APIUser[];
  rtc_region?: Nullable<string>;
  thread_metadata?: APIThreadMetadata;
  topic?: Nullable<string>;
  total_message_sent?: number;
  type: ChannelTypes;
  user_limit?: number;
  video_quality_mode?: Nullable<VideoQualityModes>;
}

/**
 * https://discord.com/developers/docs/resources/channel#default-reaction-object-default-reaction-structure
 */
export interface APIDefaultReactionEmoji {
  emoji_id: Nullable<Snowflake>;
  emoji_name: Nullable<string>;
}

/**
 * https://discord.com/developers/docs/resources/channel#followed-channel-object-followed-channel-structure
 */
export interface APIFollowedChannel {
  channel_id: Snowflake;
  webhook_id: Snowflake;
}

/**
 * https://discord.com/developers/docs/resources/channel#forum-tag-object-forum-tag-structure
 */
export interface APIForumTag {
  emoji_id: Nullable<Snowflake>;
  emoji_name: Nullable<string>;
  id: Snowflake;
  moderated: boolean;
  name: string;
}

/**
 * https://discord.com/developers/docs/resources/channel#overwrite-object-overwrite-structure
 */
export interface APIOverwrite {
  allow: string;
  deny: string;
  id: Snowflake;
  type: OverwriteTypes;
}

/**
 * https://discord.com/developers/docs/resources/channel#channel-object-channel-structure
 */
export interface APIPartialChannel extends Partial<APIChannel> {}

/**
 * https://discord.com/developers/docs/resources/channel#thread-member-object-thread-member-structure
 */
export interface APIThreadMember {
  flags: number;
  id?: Snowflake;
  join_timestamp: ISO8601Date;
  member?: APIGuildMember;
  user_id?: Snowflake;
}

/**
 * https://discord.com/developers/docs/resources/channel#thread-metadata-object-thread-metadata-structure
 */
export interface APIThreadMetadata {
  archive_timestamp: ISO8601Date;
  archived: boolean;
  auto_archive_duration: AutoArchiveDuration;
  create_timestamp?: Nullable<ISO8601Date>;
  invitable?: boolean;
  locked: boolean;
}

/**
 * https://discord.com/developers/docs/resources/channel#thread-metadata-object-thread-metadata-structure
 */
export enum AutoArchiveDuration {
  OneHour = 60,
  OneDay = 1440,
  ThreeDays = 4320,
  OneWeek = 10080,
}

/**
 * https://discord.com/developers/docs/resources/channel#channel-object-channel-flags
 */
export enum ChannelFlags {
  HideMediaDownloadOptions = 1 << 15,
  Pinned = 1 << 1,
  RequireTag = 1 << 4,
}

/**
 * https://discord.com/developers/docs/resources/channel#channel-object-channel-types
 */
export enum ChannelTypes {
  AnnouncementThread = 10,
  DirectMessage = 1,
  GroupDM = 3,
  GuildAnnouncement = 5,
  GuildCategory = 4,
  GuildDirectory = 14,
  GuildForum = 15,
  GuildMedia = 16,
  GuildStageVoice = 13,
  GuildText = 0,
  GuildVoice = 2,
  PrivateThread = 12,
  PublicThread = 11,
}

/**
 * https://discord.com/developers/docs/resources/channel#channel-object-forum-layout-types
 */
export enum ForumLayoutTypes {
  GalleryView = 2,
  ListView = 1,
  NotSet = 0,
}

/**
 * https://discord.com/developers/docs/resources/channel#overwrite-object-overwrite-structure
 */
export enum OverwriteTypes {
  Member = 1,
  Role = 0,
}

/**
 * https://discord.com/developers/docs/resources/channel#channel-object-sort-order-types
 */
export enum SortOrderTypes {
  LatestActivity = 0,
  CreationDate = 1,
}

/**
 * https://discord.com/developers/docs/resources/channel#channel-object-video-quality-modes
 */
export enum VideoQualityModes {
  Auto = 1,
  Full = 0,
}

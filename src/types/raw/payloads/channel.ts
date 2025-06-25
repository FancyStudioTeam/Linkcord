import type { ISO8601Date, Snowflake } from "../shared/discord.js";
import type {
  APIDMChannelBase,
  APIGuildChannelBase,
  APITextChannelBase,
  APIThreadChannelBase,
  APIVoiceChannelBase,
} from "./base/channel.js";
import type { APIGuildMember } from "./Guilds.js";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#channel-object-example-guild-announcement-channel
 */
export interface APIAnnouncementChannel extends APITextChannelBase<ChannelTypes.GuildAnnouncement> {}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#channel-object-example-thread-channel
 */
export interface APIAnnouncementThreadChannel extends APIThreadChannelBase<ChannelTypes.AnnouncementThread> {}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#channel-object-example-channel-category
 */
export interface APICategoryChannel extends Omit<APIGuildChannelBase<ChannelTypes.GuildCategory>, "parent_id"> {
  parent_id: null;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#channel-object-example-dm-channel
 */
export interface APIDMChannel extends APIDMChannelBase<ChannelTypes.DirectMessage> {}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#default-reaction-object-default-reaction-structure
 */
export interface APIDefaultReactionEmoji {
  emoji_id: Snowflake | null;
  emoji_name: string | null;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#followed-channel-object-followed-channel-structure
 */
export interface APIFollowedChannel {
  channel_id: Snowflake;
  webhook_id: Snowflake;
}

/**
 * @public
 * @see https://discord.com/developers/docs/topics/threads#forums
 */
export interface APIForumChannel extends APIGuildChannelBase<ChannelTypes.GuildForum> {
  available_tags: APIForumTag[];
  default_forum_layout: ForumLayoutTypes;
  default_reaction_emoji: APIDefaultReactionEmoji | null;
  default_sort_order: SortOrderTypes;
  /**
   * @alpha
   * @remarks
   * - This field is not officially documented in the Discord API documentation,
   *   meaning it may change or break at any time.
   */
  default_tag_setting: ForumTagSettingTypes;
  default_thread_rate_limit_per_user?: number;
  rate_limit_per_user?: number;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#forum-tag-object-forum-tag-structure
 */
export interface APIForumTag {
  emoji_id: Snowflake | null;
  emoji_name: string | null;
  id: Snowflake;
  moderated: boolean;
  name: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#channel-object-example-group-dm-channel
 */
export interface APIGroupDMChannel extends APIDMChannelBase<ChannelTypes.GroupDM> {
  application_id?: Snowflake;
  icon: string | null;
  managed?: boolean;
  owner_id: Snowflake;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#overwrite-object-overwrite-structure
 */
export interface APIOverwrite {
  allow: string;
  deny: string;
  id: Snowflake;
  type: OverwriteTypes;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#channel-object-channel-structure
 * @remarks
 * - This type is not documented by Discord.
 * - Partial structures may be incorrectly implemented here due lack of
 *   documentation.
 */
export interface APIPartialChannel extends Pick<APIChannel, "id" | "name" | "type"> {}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#channel-object-example-thread-channel
 */
export interface APIPrivateThreadChannel extends APIThreadChannelBase<ChannelTypes.PrivateThread> {}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#channel-object-example-thread-channel
 */
export interface APIPublicThreadChannel extends APIThreadChannelBase<ChannelTypes.PublicThread> {}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#channel-object-example-guild-voice-channel
 */
export interface APIStageVoiceChannel extends APIVoiceChannelBase<ChannelTypes.GuildStageVoice> {}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#channel-object-example-guild-text-channel
 */
export interface APITextChannel extends APITextChannelBase<ChannelTypes.GuildText> {}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#thread-member-object-thread-member-structure
 */
export interface APIThreadMember {
  flags: number;
  /**
   * @remarks
   * - This field may not be present when receiving the `GUILD_CREATE` dispatch
   *   event.
   */
  id?: Snowflake;
  join_timestamp: ISO8601Date;
  /**
   * @remarks
   * - This field is only present when fetching the thread member(s) with
   *   `with_member` query string parameter set to `true`.
   */
  member?: APIGuildMember;
  /**
   * @remarks
   * - This field may not be present when receiving the `GUILD_CREATE` dispatch
   *   event.
   */
  user_id?: Snowflake;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#thread-metadata-object-thread-metadata-structure
 */
export interface APIThreadMetadata {
  archive_timestamp: ISO8601Date;
  archived: boolean;
  auto_archive_duration: AutoArchiveDuration;
  create_timestamp?: ISO8601Date | null;
  invitable?: boolean;
  locked: boolean;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#channel-object-example-guild-voice-channel
 */
export interface APIVoiceChannel extends APIVoiceChannelBase<ChannelTypes.GuildVoice> {}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#channel-object-channel-structure
 */
export type APIChannel =
  | APIAnnouncementChannel
  | APICategoryChannel
  | APIDMChannel
  | APIForumChannel
  | APIGroupDMChannel
  | APIStageVoiceChannel
  | APITextChannel
  | APIThreadChannel
  | APIVoiceChannel;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#channel-object-channel-structure
 */
export type APIGuildChannel = Exclude<APIChannel, APIDMChannel | APIGroupDMChannel>;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#channel-object-example-thread-channel
 */
export type APIThreadChannel = APIAnnouncementThreadChannel | APIPrivateThreadChannel | APIPublicThreadChannel;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#thread-metadata-object-thread-metadata-structure
 */
export enum AutoArchiveDuration {
  OneHour = 60,
  OneDay = 1440,
  ThreeDays = 4320,
  OneWeek = 10080,
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#channel-object-channel-flags
 */
export enum ChannelFlags {
  HideMediaDownloadOptions = 1 << 15,
  Pinned = 1 << 1,
  RequireTag = 1 << 4,
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#channel-object-channel-types
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
 * @public
 * @see https://discord.com/developers/docs/resources/channel#channel-object-forum-layout-types
 */
export enum ForumLayoutTypes {
  GalleryView = 2,
  ListView = 1,
  NotSet = 0,
}

/**
 * @alpha
 * @remarks
 * - This is not officially documented in the Discord API documentation,
 *   meaning it may change or break at any time.
 */
export enum ForumTagSettingTypes {
  MatchAll = "match_all",
  MatchSome = "match_some",
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#overwrite-object-overwrite-structure
 */
export enum OverwriteTypes {
  Member = 1,
  Role = 0,
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#channel-object-sort-order-types
 */
export enum SortOrderTypes {
  LatestActivity = 0,
  CreationDate = 1,
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#channel-object-video-quality-modes
 */
export enum VideoQualityModes {
  Auto = 1,
  Full = 0,
}

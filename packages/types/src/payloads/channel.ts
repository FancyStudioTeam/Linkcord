// biome-ignore lint/correctness/noUnusedImports: Imported for documentation purposes.
import type { GatewayDispatchEvents } from "#gateway";
import type { ISO8601Date, Nullable, Snowflake } from "#shared";
import type {
  APIDMChannelBase,
  APIGuildChannelBase,
  APITextChannelBase,
  APIThreadChannelBase,
  APIVoiceChannelBase,
} from "./base/channel.js";
import type { APIGuildMember } from "./guild.js";

/**
 * @see https://discord.com/developers/docs/resources/channel#channel-object-example-guild-announcement-channel
 */
export interface APIAnnouncementChannel extends APITextChannelBase<ChannelTypes.GuildAnnouncement> {}

/**
 * @see https://discord.com/developers/docs/resources/channel#channel-object-example-thread-channel
 */
export interface APIAnnouncementThreadChannel extends APIThreadChannelBase<ChannelTypes.AnnouncementThread> {}

/**
 * @see https://discord.com/developers/docs/resources/channel#channel-object-example-channel-category
 */
export interface APICategoryChannel extends Omit<APIGuildChannelBase<ChannelTypes.GuildCategory>, "parent_id"> {
  parent_id: null;
}

/**
 * @see https://discord.com/developers/docs/resources/channel#channel-object-example-dm-channel
 */
export interface APIDMChannel extends APIDMChannelBase<ChannelTypes.DirectMessage> {}

/**
 * @see https://discord.com/developers/docs/resources/channel#default-reaction-object-default-reaction-structure
 */
export interface APIDefaultReactionEmoji {
  emoji_id: Nullable<Snowflake>;
  emoji_name: Nullable<string>;
}

/**
 * @see https://discord.com/developers/docs/resources/channel#followed-channel-object-followed-channel-structure
 */
export interface APIFollowedChannel {
  channel_id: Snowflake;
  webhook_id: Snowflake;
}

/**
 * @see https://discord.com/developers/docs/topics/threads#forums
 */
export interface APIForumChannel extends APIGuildChannelBase<ChannelTypes.GuildForum> {
  available_tags: APIForumTag[];
  default_forum_layout: ForumLayoutTypes;
  default_reaction_emoji: Nullable<APIDefaultReactionEmoji>;
  default_sort_order: SortOrderTypes;
  default_tag_setting: ForumTagSettingTypes;
  default_thread_rate_limit_per_user?: number;
  rate_limit_per_user?: number;
}

/**
 * @see https://discord.com/developers/docs/resources/channel#forum-tag-object-forum-tag-structure
 */
export interface APIForumTag {
  emoji_id: Nullable<Snowflake>;
  emoji_name: Nullable<string>;
  id: Snowflake;
  moderated: boolean;
  name: string;
}

/**
 * @see https://discord.com/developers/docs/resources/channel#channel-object-example-group-dm-channel
 */
export interface APIGroupDMChannel extends APIDMChannelBase<ChannelTypes.GroupDM> {
  application_id?: Snowflake;
  icon: Nullable<string>;
  managed?: boolean;
  owner_id: Snowflake;
}

/**
 * @see https://discord.com/developers/docs/resources/channel#overwrite-object-overwrite-structure
 */
export interface APIOverwrite {
  allow: string;
  deny: string;
  id: Snowflake;
  type: OverwriteTypes;
}

/**
 * @see https://discord.com/developers/docs/resources/channel#channel-object-channel-structure
 * @remarks
 * - This type is not documented by Discord.
 * - Partial structures may be incorrectly implemented here due lack of
 *   documentation.
 */
export interface APIPartialChannel extends Pick<APIChannel, "id" | "name" | "type"> {}

/**
 * @see https://discord.com/developers/docs/resources/channel#channel-object-example-thread-channel
 */
export interface APIPrivateThreadChannel extends APIThreadChannelBase<ChannelTypes.PrivateThread> {}

/**
 * @see https://discord.com/developers/docs/resources/channel#channel-object-example-thread-channel
 */
export interface APIPublicThreadChannel extends APIThreadChannelBase<ChannelTypes.PublicThread> {}

/**
 * @see https://discord.com/developers/docs/resources/channel#channel-object-example-guild-voice-channel
 */
export interface APIStageVoiceChannel extends APIVoiceChannelBase<ChannelTypes.GuildStageVoice> {}

/**
 * @see https://discord.com/developers/docs/resources/channel#channel-object-example-guild-text-channel
 */
export interface APITextChannel extends APITextChannelBase<ChannelTypes.GuildText> {}

/**
 * @see https://discord.com/developers/docs/resources/channel#thread-member-object-thread-member-structure
 */
export interface APIThreadMember {
  flags: number;
  /**
   * @remarks
   * - This field may not be present when receiving the
   *   {@link GatewayDispatchEvents.GuildCreate | `GUILD_CREATE`} event.
   */
  id?: Snowflake;
  join_timestamp: ISO8601Date;
  /**
   * @remarks
   * - This field is only present when fetching the thread member(s) with
   *   `withMember` set to `true`.
   */
  member?: APIGuildMember;
  /**
   * @remarks
   * - This field may not be present when receiving the
   *   {@link GatewayDispatchEvents.GuildCreate | `GUILD_CREATE`} event.
   */
  user_id?: Snowflake;
}

/**
 * @see https://discord.com/developers/docs/resources/channel#thread-metadata-object-thread-metadata-structure
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
 * @see https://discord.com/developers/docs/resources/channel#channel-object-example-guild-voice-channel
 */
export interface APIVoiceChannel extends APIVoiceChannelBase<ChannelTypes.GuildVoice> {}

/**
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
 * @see https://discord.com/developers/docs/resources/channel#channel-object-example-thread-channel
 */
export type APIThreadChannel = APIAnnouncementThreadChannel | APIPrivateThreadChannel | APIPublicThreadChannel;

/**
 * @see https://discord.com/developers/docs/resources/channel#thread-metadata-object-thread-metadata-structure
 */
export enum AutoArchiveDuration {
  OneHour = 60,
  OneDay = 1440,
  ThreeDays = 4320,
  OneWeek = 10080,
}

/**
 * @see https://discord.com/developers/docs/resources/channel#channel-object-channel-flags
 */
export enum ChannelFlags {
  HideMediaDownloadOptions = 1 << 15,
  Pinned = 1 << 1,
  RequireTag = 1 << 4,
}

/**
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
 * @see https://discord.com/developers/docs/resources/channel#channel-object-forum-layout-types
 */
export enum ForumLayoutTypes {
  GalleryView = 2,
  ListView = 1,
  NotSet = 0,
}

/**
 * @see TBD
 * @remarks
 * - This is not officially documented in the Discord API documentation,
 *   meaning it may change or break at any time.
 */
export enum ForumTagSettingTypes {
  MatchAll = "match_all",
  MatchSome = "match_some",
}

/**
 * @see https://discord.com/developers/docs/resources/channel#overwrite-object-overwrite-structure
 */
export enum OverwriteTypes {
  Member = 1,
  Role = 0,
}

/**
 * @see https://discord.com/developers/docs/resources/channel#channel-object-sort-order-types
 */
export enum SortOrderTypes {
  LatestActivity = 0,
  CreationDate = 1,
}

/**
 * @see https://discord.com/developers/docs/resources/channel#channel-object-video-quality-modes
 */
export enum VideoQualityModes {
  Auto = 1,
  Full = 0,
}

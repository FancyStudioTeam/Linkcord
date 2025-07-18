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
 * @see https://discord.com/developers/docs/resources/channel#channel-object-example-channel-category
 */
export interface APICategoryChannel
	extends Omit<APIGuildChannelBase<ChannelTypes.GuildCategory>, "parent_id"> {
	parent_id: null;
}

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
	default_thread_rate_limit_per_user?: number;
	rate_limit_per_user?: number;

	/**
	 * @undocumented
	 */
	default_tag_setting: ForumTagSettingTypes;
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
 * @see https://discord.com/developers/docs/resources/channel#thread-member-object-thread-member-structure
 */
export interface APIThreadMember {
	flags: number;
	id?: Snowflake;
	join_timestamp: ISO8601Date;
	member?: APIGuildMember;
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
 * @see https://discord.com/developers/docs/resources/channel#channel-object-example-guild-announcement-channel
 */
export type APIAnnouncementChannel = APITextChannelBase<ChannelTypes.GuildAnnouncement>;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#channel-object-example-thread-channel
 */
export type APIAnnouncementThreadChannel = APIThreadChannelBase<ChannelTypes.AnnouncementThread>;

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
 * @see https://discord.com/developers/docs/resources/channel#channel-object-example-dm-channel
 */
export type APIDMChannel = APIDMChannelBase<ChannelTypes.DirectMessage>;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#channel-object-channel-structure
 */
export type APIGuildChannel = Exclude<APIChannel, APIDMChannel | APIGroupDMChannel>;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#channel-object-channel-structure
 */
export type APIPartialChannel = Pick<APIChannel, "id" | "name" | "type">;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#channel-object-example-thread-channel
 */
export type APIPrivateThreadChannel = APIThreadChannelBase<ChannelTypes.PrivateThread>;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#channel-object-example-thread-channel
 */
export type APIPublicThreadChannel = APIThreadChannelBase<ChannelTypes.PublicThread>;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#channel-object-example-guild-voice-channel
 */
export type APIStageVoiceChannel = APIVoiceChannelBase<ChannelTypes.GuildStageVoice>;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#channel-object-example-guild-text-channel
 */
export type APITextChannel = APITextChannelBase<ChannelTypes.GuildText>;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#channel-object-example-thread-channel
 */
export type APIThreadChannel =
	| APIAnnouncementThreadChannel
	| APIPrivateThreadChannel
	| APIPublicThreadChannel;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#channel-object-example-guild-voice-channel
 */
export type APIVoiceChannel = APIVoiceChannelBase<ChannelTypes.GuildVoice>;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#thread-metadata-object-thread-metadata-structure
 */
export enum AutoArchiveDuration {
	OneDay = 1440,
	OneHour = 60,
	OneWeek = 10080,
	ThreeDays = 4320,
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
 * @undocumented
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
	CreationDate = 1,
	LatestActivity = 0,
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/channel#channel-object-video-quality-modes
 */
export enum VideoQualityModes {
	Auto = 1,
	Full = 0,
}

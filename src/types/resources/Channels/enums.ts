/**
 * @see https://discord.com/developers/docs/resources/channel#thread-metadata-object-thread-metadata-structure
 */
export enum AutoArchiveDuration {
	OneDay = 1440,
	OneHour = 60,
	OneWeek = 10080,
	ThreeDays = 4320,
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
 * @see https://discord.com/developers/docs/resources/channel#overwrite-object-overwrite-structure
 */
export enum ChannelOverwriteType {
	Member = 1,
	Role = 0,
}

/**
 * @see https://discord.com/developers/docs/resources/channel#channel-object-channel-types
 */
export enum ChannelType {
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
export enum ForumLayoutType {
	GalleryView = 2,
	ListView = 1,
	NotSet = 0,
}

/**
 * @see https://discord.com/developers/docs/resources/channel#channel-object-sort-order-types
 */
export enum ForumSortOrderType {
	CreationDate = 1,
	LatestActivity = 0,
}

/**
 * @see https://discord.com/developers/docs/resources/channel#channel-object-video-quality-modes
 */
export enum VideoQualityMode {
	Auto = 1,
	Full = 2,
}

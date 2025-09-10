/**
 * The types of an embed.
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-types
 *
 * @group Structures/Enums
 */
export enum EmbedTypes {
	Article = "article",
	GifV = "gifv",
	Image = "image",
	Link = "link",
	PollResult = "poll_result",
	Rich = "rich",
	Video = "video",
}

/**
 * The flags of a message.
 * @see https://discord.com/developers/docs/resources/message#message-object-message-flags
 *
 * @group Structures/Enums
 */
export enum MessageFlags {
	Crossposted = 1 << 0,
	Ephemeral = 1 << 6,
	FailedToMentionSomeRolesInThread = 1 << 8,
	HasSnapshot = 1 << 14,
	HasThread = 1 << 5,
	IsComponentsV2 = 1 << 15,
	IsCrosspost = 1 << 1,
	IsVoiceMessage = 1 << 13,
	Loading = 1 << 7,
	SourceMessageDeleted = 1 << 3,
	SuppressEmbeds = 1 << 2,
	SuppressNotifications = 1 << 12,
	Urgent = 1 << 4,
}

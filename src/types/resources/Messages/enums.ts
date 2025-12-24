/**
 * @see https://discord.com/developers/docs/resources/message#allowed-mentions-object-allowed-mention-types
 */
export enum AllowedMentionType {
	Everyone = "everyone",
	Roles = "roles",
	Users = "users",
}

/**
 * @see https://discord.com/developers/docs/resources/message#attachment-object-attachment-flags
 */
export enum AttachmentFlags {
	IsRemix = 1 << 2,
}

/**
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-types
 */
export enum EmbedType {
	Article = "article",
	GifV = "gifv",
	Image = "image",
	Link = "link",
	PollResult = "poll_result",
	Rich = "rich",
	Video = "video",
}

/**
 * @see https://discord.com/developers/docs/resources/message#message-object-message-activity-types
 */
export enum MessageActivityType {
	Join = 1,
	JoinRequest = 5,
	Listen = 3,
	Spectate = 2,
}

/**
 * @see https://discord.com/developers/docs/resources/message#message-object-message-flags
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

/**
 * @see https://discord.com/developers/docs/resources/message#message-reference-types
 */
export enum MessageReferenceType {
	Default = 0,
	Forward = 1,
}

/**
 * @see https://discord.com/developers/docs/resources/message#message-object-message-types
 */
export enum MessageType {
	AutoModerationAction = 24,
	Call = 3,
	ChannelFollowAdd = 12,
	ChannelIconChange = 5,
	ChannelNameChange = 4,
	ChannelPinnedMessage = 6,
	ChatInputCommand = 20,
	ContextMenuCommand = 23,
	Default = 0,
	GuildApplicationPremiumSubscription = 32,
	GuildBoost = 8,
	GuildBoostTier1 = 9,
	GuildBoostTier2 = 10,
	GuildBoostTier3 = 11,
	GuildDiscoveryDisqualified = 14,
	GuildDiscoveryGracePeriodInitialWarning = 16,
	GuildDiscoveryGracePeriodFinalWarning = 17,
	GuildDiscoveryRequalified = 15,
	GuildIncidentAlertModeDisabled = 37,
	GuildIncidentAlertModeEnabled = 36,
	GuildIncidentReportFalseAlarm = 39,
	GuildIncidentReportRaid = 38,
	GuildInviteReminder = 22,
	InteractionPremiumUpsell = 26,
	PollResult = 46,
	PurchaseNotification = 44,
	RecipientAdd = 1,
	RecipientRemove = 2,
	Reply = 19,
	RoleSubscriptionPurchase = 25,
	StageEnd = 28,
	StageSpeaker = 29,
	StageStart = 27,
	StageTopic = 31,
	ThreadCreated = 18,
	ThreadStarterMessage = 21,
	UserJoin = 7,
}

/**
 * @see https://discord.com/developers/docs/resources/message#get-reactions-reaction-types
 */
export enum ReactionType {
	Burst = 1,
	Normal = 0,
}

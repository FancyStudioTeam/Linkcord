/**
 * The types of an action of an auto moderation rule.
 * @see https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-action-types
 */
export enum AutoModerationActionTypes {
	BlockMemberInteraction = 4,
	BlockMessage = 1,
	SendAlertMessage = 2,
	Timeout = 3,
}

/**
 * The types of an event of an auto moderation rule.
 * @see https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-event-types
 */
export enum AutoModerationEventTypes {
	MemberUpdate = 2,
	MessageSend = 1,
}

/**
 * The types of a keyword preset of an auto moderation rule.
 * @see https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-keyword-preset-types
 */
export enum AutoModerationKeywordPresetTypes {
	Profanity = 1,
	SexualContent = 2,
	Slurs = 3,
}

/**
 * The types of trigger of an auto moderation rule.
 * @see https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-trigger-types
 */
export enum AutoModerationTriggerTypes {
	Keyword = 1,
	KeywordPresset = 4,
	MemberProfile = 6,
	MentionSpam = 5,
	Spam = 3,
}

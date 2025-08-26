import type { Snowflake } from "#types/miscellaneous/discord.js";
import type { AutoModerationActionTypes } from "../enums.js";

/**
 * Represents a Discord auto moderation rule action object for a block message action.
 * @see https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-auto-moderation-action-structure
 */
export interface AutoModerationRuleActionBlockMessage
	extends BaseAutoModerationRuleAction<AutoModerationActionTypes.BlockMessage> {
	/** The metadata of the auto moderation rule action. */
	metadata: AutoModerationRuleActionBlockMessageMetadata;
}

/**
 * Represents the metadata of a Discord auto moderation rule action object for a block message action.
 * @see https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-action-metadata
 */
export interface AutoModerationRuleActionBlockMessageMetadata {
	/** The message that will be shown when their message is blocked. */
	customMessage?: string;
}

/**
 * Represents a Discord auto moderation rule action object for a send alert message action.
 * @see https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-auto-moderation-action-structure
 */
export interface AutoModerationRuleActionSendAlertMessage
	extends BaseAutoModerationRuleAction<AutoModerationActionTypes.SendAlertMessage> {
	/** The metadata of the auto moderation rule action. */
	metadata: AutoModerationRuleActionSendAlertMessageMetadata;
}

/**
 * Represents the metadata of a Discord auto moderation rule action object for a send alert message action.
 * @see https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-action-metadata
 */
export interface AutoModerationRuleActionSendAlertMessageMetadata {
	/** The ID of the channel where the message will be logged. */
	channelId: Snowflake;
}

/**
 * Represents a Discord auto moderation rule action object for a timeout action.
 * @see https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-auto-moderation-action-structure
 */
export interface AutoModerationRuleActionTimeout
	extends BaseAutoModerationRuleAction<AutoModerationActionTypes.Timeout> {
	/** The metadata of the auto moderation rule action. */
	metadata: AutoModerationRuleActionTimeoutMetadata;
}

/**
 * Represents the metadata of a Discord auto moderation rule action object for a timeout action.
 * @see https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-action-metadata
 */
export interface AutoModerationRuleActionTimeoutMetadata {
	/** The duration of the timeout in seconds. */
	durationSeconds: number;
}

/**
 * Represents the base of a Discord auto moderation rule action object.
 * @see https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-auto-moderation-action-structure
 */
export interface BaseAutoModerationRuleAction<Type extends AutoModerationActionTypes> {
	/** The type of the auto moderation action. */
	type: Type;
}

/**
 * Represents a Discord auto moderation rule action object.
 * @see https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-auto-moderation-action-structure
 */
export type AutoModerationRuleAction =
	| AutoModerationRuleActionBlockMemberInteraction
	| AutoModerationRuleActionBlockMessage
	| AutoModerationRuleActionSendAlertMessage
	| AutoModerationRuleActionTimeout;

/**
 * Represents a Discord auto moderation rule action object for a block member interaction action.
 * @see https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-auto-moderation-action-structure
 */
export type AutoModerationRuleActionBlockMemberInteraction =
	BaseAutoModerationRuleAction<AutoModerationActionTypes.BlockMemberInteraction>;

/**
 * Represents the metadata of a Discord auto moderation rule trigger object.
 * @see https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-action-metadata
 */
export type AutoModerationRuleActionTriggerMetadata =
	| AutoModerationRuleActionBlockMessageMetadata
	| AutoModerationRuleActionSendAlertMessageMetadata
	| AutoModerationRuleActionTimeoutMetadata;

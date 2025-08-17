import type { Snowflake } from "#types/miscellaneous/discord.js";
import type {
	AutoModerationActionTypes,
	AutoModerationEventTypes,
	AutoModerationTriggerTypes,
} from "../enums.js";

/**
 * Represents a Discord auto moderation rule object.
 * @see https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-auto-moderation-rule-structure
 */
export interface APIAutoModerationRule {
	/** The actions of the auto moderation rule. */
	actions: APIAutoModerationRuleAction[];
	/** The ID of the user who created the auto moderation rule. */
	creator_id: Snowflake;
	/** Whether the auto moderation rule is enabled. */
	enabled: boolean;
	/** The type of event of the auto moderation rule. */
	event_type: AutoModerationEventTypes;
	/** The IDs of the channels that are exempt from the auto moderation rule. */
	excempt_channels: Snowflake[];
	/** The IDs of the roles that are exempt from the auto moderation rule. */
	excempt_roles: Snowflake[];
	/** The ID of the guild where the auto moderation rule was created. */
	guild_id: Snowflake;
	/** The ID of the auto moderation rule. */
	id: Snowflake;
	/** The name of the auto moderation rule. */
	name: string;
	/** The type of trigger of the auto moderation rule. */
	trigger_type: AutoModerationTriggerTypes;
}

/**
 * Represents a Discord auto moderation rule action object for a block message action.
 * @see https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-auto-moderation-action-structure
 */
export interface APIAutoModerationRuleActionBlockMessage
	extends APIBaseAutoModerationRuleAction<AutoModerationActionTypes.BlockMessage> {
	/** The metadata of the auto moderation rule action. */
	metadata: APIAutoModerationRuleActionBlockMessageMetadata;
}

/**
 * Represents the metadata of a Discord auto moderation rule action object for a block message action.
 * @see https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-action-metadata
 */
export interface APIAutoModerationRuleActionBlockMessageMetadata {
	/** The message that will be shown when their message is blocked. */
	custom_message?: string;
}

/**
 * Represents a Discord auto moderation rule action object for a send alert message action.
 * @see https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-auto-moderation-action-structure
 */
export interface APIAutoModerationRuleActionSendAlertMessage
	extends APIBaseAutoModerationRuleAction<AutoModerationActionTypes.SendAlertMessage> {
	/** The metadata of the auto moderation rule action. */
	metadata: APIAutoModerationRuleActionSendAlertMessageMetadata;
}

/**
 * Represents the metadata of a Discord auto moderation rule action object for a send alert message action.
 * @see https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-action-metadata
 */
export interface APIAutoModerationRuleActionSendAlertMessageMetadata {
	/** The ID of the channel where the message will be logged. */
	channel_id: Snowflake;
}

/**
 * Represents a Discord auto moderation rule action object for a timeout action.
 * @see https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-auto-moderation-action-structure
 */
export interface APIAutoModerationRuleActionTimeout
	extends APIBaseAutoModerationRuleAction<AutoModerationActionTypes.Timeout> {
	/** The metadata of the auto moderation rule action. */
	metadata: APIAutoModerationRuleActionTimeoutMetadata;
}

/**
 * Represents the metadata of a Discord auto moderation rule action object for a timeout action.
 * @see https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-action-metadata
 */
export interface APIAutoModerationRuleActionTimeoutMetadata {
	/** The duration of the timeout in seconds. */
	duration_seconds: number;
}

/**
 * Represents the base of a Discord auto moderation rule action object.
 * @see https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-auto-moderation-action-structure
 */
export interface APIBaseAutoModerationRuleAction<Type extends AutoModerationActionTypes> {
	/** The type of the auto moderation action. */
	type: Type;
}

/**
 * Represents a Discord auto moderation rule action object.
 * @see https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-auto-moderation-action-structure
 */
export type APIAutoModerationRuleAction =
	| APIAutoModerationRuleActionBlockMemberInteraction
	| APIAutoModerationRuleActionBlockMessage
	| APIAutoModerationRuleActionSendAlertMessage
	| APIAutoModerationRuleActionTimeout;

/**
 * Represents a Discord auto moderation rule action object for a block member interaction action.
 * @see https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-auto-moderation-action-structure
 */
export type APIAutoModerationRuleActionBlockMemberInteraction =
	APIBaseAutoModerationRuleAction<AutoModerationActionTypes.BlockMemberInteraction>;

/**
 * Represents the metadata of a Discord auto moderation rule trigger object.
 * @see https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-action-metadata
 */
export type APIAutoModerationRuleActionTriggerMetadata =
	| APIAutoModerationRuleActionBlockMessageMetadata
	| APIAutoModerationRuleActionSendAlertMessageMetadata
	| APIAutoModerationRuleActionTimeoutMetadata;

import type { Snowflake } from "#types/miscellaneous/discord.js";
import type { AutoModerationEventTypes, AutoModerationTriggerTypes } from "../enums.js";
import type {
	AutoModerationRuleAction,
	AutoModerationRuleActionTriggerMetadata,
} from "../structures/parsed.js";

/**
 * The options to use when creating an auto moderation rule.
 * @see https://discord.com/developers/docs/resources/auto-moderation#create-auto-moderation-rule-json-params
 */
export interface CreateAutoModerationRuleOptions {
	/** The actions of the auto moderation rule. */
	actions: AutoModerationRuleAction[];
	/** Whether the auto moderation rule is enabled. */
	enabled: boolean;
	/** The type of event of the auto moderation rule. */
	eventType: AutoModerationEventTypes;
	/** The IDs of the channels that are exempt from the auto moderation rule. */
	excemptChannels?: Snowflake[];
	/** The IDs of the roles that are exempt from the auto moderation rule. */
	excemptRoles?: Snowflake[];
	/** The name of the auto moderation rule. */
	name: string;
	/** The metadata of the auto moderation rule. */
	triggerMetadata?: AutoModerationRuleActionTriggerMetadata;
	/** The type of trigger of the auto moderation rule. */
	triggerType: AutoModerationTriggerTypes;
}

/**
 * The options to use when editing an auto moderation rule.
 * @see https://discord.com/developers/docs/resources/auto-moderation#modify-auto-moderation-rule-json-params
 */
export interface EditAutoModerationRuleOptions {
	/** The actions of the auto moderation rule. */
	actions?: AutoModerationRuleAction[];
	/** Whether the auto moderation rule is enabled. */
	enabled?: boolean;
	/** The type of event of the auto moderation rule. */
	eventType?: AutoModerationEventTypes;
	/** The IDs of the channels that are exempt from the auto moderation rule. */
	excemptChannels?: Snowflake[];
	/** The IDs of the roles that are exempt from the auto moderation rule. */
	excemptRoles?: Snowflake[];
	/** The name of the auto moderation rule. */
	name?: string;
	/** The metadata of the auto moderation rule. */
	triggerMetadata?: AutoModerationRuleActionTriggerMetadata;
}

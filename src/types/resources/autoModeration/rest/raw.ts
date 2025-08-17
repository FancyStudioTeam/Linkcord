import type { Snowflake } from "#types/miscellaneous/discord.js";
import type { AutoModerationEventTypes, AutoModerationTriggerTypes } from "../enums.js";
import type {
	APIAutoModerationRule,
	APIAutoModerationRuleAction,
	APIAutoModerationRuleActionTriggerMetadata,
} from "../structures/raw.js";

/**
 * Represents the JSON parameters of the {@link RESTPatchAPIAutoModerationRule | `PATCH /guilds/(guild.id)/auto-moderation/rules/(auto_moderation_rule.id)`} endpoint.
 * @see https://discord.com/developers/docs/resources/auto-moderation#modify-auto-moderation-rule-json-params
 */
export interface RESTPatchAPIAutoModerationRuleJSONParams {
	/** The actions of the auto moderation rule. */
	actions?: APIAutoModerationRuleAction[];
	/** Whether the auto moderation rule is enabled. */
	enabled?: boolean;
	/** The type of event of the auto moderation rule. */
	event_type?: AutoModerationEventTypes;
	/** The IDs of the channels that are exempt from the auto moderation rule. */
	excempt_channels?: Snowflake[];
	/** The IDs of the roles that are exempt from the auto moderation rule. */
	excempt_roles?: Snowflake[];
	/** The name of the auto moderation rule. */
	name?: string;
	/** The metadata of the auto moderation rule. */
	trigger_metadata?: APIAutoModerationRuleActionTriggerMetadata;
}

/**
 * Represents the JSON parameters of the {@link RESTPostAPIAutoModerationRule | `POST /guilds/(guild.id)/auto-moderation/rules`} endpoint.
 * @see https://discord.com/developers/docs/resources/auto-moderation#create-auto-moderation-rule-json-params
 */
export interface RESTPostAPIAutoModerationRuleJSONParams {
	/** The actions of the auto moderation rule. */
	actions: APIAutoModerationRuleAction[];
	/** Whether the auto moderation rule is enabled. */
	enabled: boolean;
	/** The type of event of the auto moderation rule. */
	event_type: AutoModerationEventTypes;
	/** The IDs of the channels that are exempt from the auto moderation rule. */
	excempt_channels?: Snowflake[];
	/** The IDs of the roles that are exempt from the auto moderation rule. */
	excempt_roles?: Snowflake[];
	/** The name of the auto moderation rule. */
	name: string;
	/** The metadata of the auto moderation rule. */
	trigger_metadata?: APIAutoModerationRuleActionTriggerMetadata;
	/** The type of trigger of the auto moderation rule. */
	trigger_type: AutoModerationTriggerTypes;
}

/**
 * Represents the response of the {@link RESTDeleteAPIAutoModerationRule | `DELETE /guilds/(guild.id)/auto-moderation/rules/(auto_moderation_rule.id)`} endpoint.
 * @see https://discord.com/developers/docs/resources/auto-moderation#delete-auto-moderation-rule
 */
export type RESTDeleteAPIAutoModerationRule = undefined;

/**
 * Represents the response of the {@link RESTGetAPIAutoModerationRule | `GET /guilds/(guild.id)/auto-moderation/rules/(auto_moderation_rule.id)`} endpoint.
 * @see https://discord.com/developers/docs/resources/auto-moderation#get-auto-moderation-rule
 */
export type RESTGetAPIAutoModerationRule = APIAutoModerationRule;

/**
 * Represents the response of the {@link RESTGetAPIAutoModerationRules | `GET /guilds/(guild.id)/auto-moderation/rules`} endpoint.
 * @see https://discord.com/developers/docs/resources/auto-moderation#list-auto-moderation-rules-for-guild
 */
export type RESTGetAPIAutoModerationRules = APIAutoModerationRule[];

/**
 * Represents the response of the {@link RESTPatchAPIAutoModerationRule | `PATCH /guilds/(guild.id)/auto-moderation/rules/(auto_moderation_rule.id)`} endpoint.
 * @see https://discord.com/developers/docs/resources/auto-moderation#modify-auto-moderation-rule
 */
export type RESTPatchAPIAutoModerationRule = APIAutoModerationRule;

/**
 * Represents the response of the {@link RESTPostAPIAutoModerationRule | `POST /guilds/(guild.id)/auto-moderation/rules/(auto_moderation_rule.id)`} endpoint.
 * @see https://discord.com/developers/docs/resources/auto-moderation#create-auto-moderation-rule
 */
export type RESTPostAPIAutoModerationRule = APIAutoModerationRule;

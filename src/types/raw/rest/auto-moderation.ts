import type {
  APIAutoModerationAction,
  APIAutoModerationRule,
  APIAutoModerationTriggerMetadata,
  AutoModerationEventTypes,
  AutoModerationTriggerTypes,
} from "../payloads/auto-moderation.js";
import type { Snowflake } from "../shared/discord.js";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/auto-moderation#modify-auto-moderation-rule-json-params
 */
export interface RESTPatchGuildAutoModerationRuleJSONParams {
  actions?: APIAutoModerationAction[];
  enabled?: boolean;
  event_type?: AutoModerationEventTypes;
  exempt_channels?: Snowflake[];
  exempt_roles?: Snowflake[];
  name?: string;
  trigger_metadata?: APIAutoModerationTriggerMetadata;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/auto-moderation#create-auto-moderation-rule-json-params
 */
export interface RESTPostGuildAutoModerationRuleJSONParams {
  actions: APIAutoModerationAction[];
  enabled?: boolean;
  event_type: AutoModerationEventTypes;
  exempt_channels?: Snowflake[];
  exempt_roles?: Snowflake[];
  name: string;
  trigger_metadata?: APIAutoModerationTriggerMetadata;
  trigger_type: AutoModerationTriggerTypes;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/auto-moderation#delete-auto-moderation-rule
 */
export type RESTDeleteGuildAutoModerationRule = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/auto-moderation#get-auto-moderation-rule
 */
export type RESTGetGuildAutoModerationRule = APIAutoModerationRule;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/auto-moderation#list-auto-moderation-rules-for-guild
 */
export type RESTGetGuildAutoModerationRules = APIAutoModerationRule[];

/**
 * @public
 * @see https://discord.com/developers/docs/resources/auto-moderation#modify-auto-moderation-rule
 */
export type RESTPatchGuildAutoModerationRule = APIAutoModerationRule;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/auto-moderation#create-auto-moderation-rule
 */
export type RESTPostGuildAutoModerationRule = APIAutoModerationRule;

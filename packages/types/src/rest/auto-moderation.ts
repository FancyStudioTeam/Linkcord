import type { APIAutoModerationRule } from "#payloads";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/auto-moderation#create-auto-moderation-rule
 */
export type RESTCreateAutoModerationRule = APIAutoModerationRule;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/auto-moderation#delete-auto-moderation-rule
 */
export type RESTDeleteAutoModerationRule = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/auto-moderation#get-auto-moderation-rule
 */
export type RESTGetAutoModerationRule = APIAutoModerationRule;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/auto-moderation#list-auto-moderation-rules-for-guild
 */
export type RESTListAutoModerationRulesForGuild = APIAutoModerationRule[];

/**
 * @public
 * @see https://discord.com/developers/docs/resources/auto-moderation#modify-auto-moderation-rule
 */
export type RESTModifyAutoModerationRule = APIAutoModerationRule;

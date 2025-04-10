import type { Snowflake } from "#types/shared";

/**
 * https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-auto-moderation-rule-structure
 */
export interface APIAutoModerationAction {
  metadata?: APIAutoModerationActionMetadata;
  type: AutoModerationActionTypes;
}

/**
 * https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-action-metadata
 */
export interface APIAutoModerationActionMetadata {
  channel_id: Snowflake;
  custom_message?: string;
  duration_seconds: number;
}

/**
 * https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-auto-moderation-rule-structure
 */
export interface APIAutoModerationRule {
  actions: APIAutoModerationAction[];
  creator_id: Snowflake;
  enabled: boolean;
  event_type: AutoModerationEventTypes;
  exempt_channels: Snowflake[];
  exempt_roles: Snowflake[];
  guild_id: Snowflake;
  id: Snowflake;
  name: string;
  trigger_metadata: APIAutoModerationTriggerMetadata;
  trigger_type: AutoModerationTriggerTypes;
}

/**
 * https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-trigger-metadata
 */
export interface APIAutoModerationTriggerMetadata {
  allow_list: string[];
  keyword_filter: string[];
  mention_raid_protection_enabled: boolean;
  mention_total_limit: number;
  presets: AutoModerationKeywordPresetTypes[];
  regex_patterns: string[];
}

/**
 * https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-action-types
 */
export enum AutoModerationActionTypes {
  BlockMemberInteraction = 4,
  BlockMessage = 1,
  SendAlertMessage = 2,
  Timeout = 3,
}

/**
 * https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-event-types
 */
export enum AutoModerationEventTypes {
  MemberUpdate = 2,
  MessageSend = 1,
}

/**
 * https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-trigger-types
 */
export enum AutoModerationTriggerTypes {
  Keyword = 1,
  KeywordPreset = 4,
  MemberProfile = 6,
  MentionSpam = 5,
  Spam = 3,
}

/**
 * https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-keyword-preset-types
 */
export enum AutoModerationKeywordPresetTypes {
  Profanity = 1,
  SexualContent = 2,
  Slurs = 3,
}

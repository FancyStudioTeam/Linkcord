import type { Snowflake } from "../shared/discord.js";
import type { APIApplicationCommand } from "./application-command.js";
import type { APIAutoModerationRule } from "./auto-moderation.js";
import type { APIThreadChannel } from "./channel.js";
import type { APIPartialIntegration } from "./guild.js";
import type { APIGuildScheduledEvent } from "./guild-scheduled-event.js";
import type { APIPartialUser } from "./Users.js";
import type { APIWebhook } from "./Webhooks.js";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/audit-log#audit-log-object-audit-log-structure
 */
export interface APIAuditLog {
  application_commands: APIApplicationCommand[];
  audit_log_entries: APIAuditLogEntry[];
  auto_moderation_rules: APIAutoModerationRule[];
  guild_scheduled_events: APIGuildScheduledEvent[];
  integrations: APIPartialIntegration[];
  threads: APIThreadChannel[];
  users: APIPartialUser[];
  webhooks: APIWebhook[];
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/audit-log#audit-log-change-object-audit-log-change-structure
 */
export interface APIAuditLogChange {
  key: string;
  new_value?: unknown;
  old_value?: unknown;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-audit-log-entry-structure
 */
export interface APIAuditLogEntry {
  action_type: AuditLogEvents;
  changes?: APIAuditLogChange[];
  id: Snowflake;
  options?: APIOptionalAuditEntryInfo;
  reason?: string;
  target_id: string | null;
  user_id: string | null;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-optional-audit-entry-info
 */
export interface APIOptionalAuditEntryInfo {
  application_id?: Snowflake;
  auto_moderation_rule_name?: string;
  auto_moderation_rule_trigger_type?: string;
  channel_id?: Snowflake;
  count?: string;
  delete_member_days?: string;
  id?: Snowflake;
  integration_type?: string;
  members_removed?: string;
  message_id?: Snowflake;
  role_name?: string;
  type?: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-audit-log-events
 */
export enum AuditLogEvents {
  ApplicationCommandPermissionsUpdate = 121,
  AutoModerationBlockMessage = 143,
  AutoModerationFlagToChannel = 144,
  AutoModerationRuleCreate = 140,
  AutoModerationRuleDelete = 142,
  AutoModerationRuleUpdate = 141,
  AutoModerationUserCommunicationDisabled = 145,
  BotAdd = 28,
  ChannelCreate = 10,
  ChannelDelete = 12,
  ChannelOverwriteCreate = 13,
  ChannelOverwriteDelete = 15,
  ChannelOverwriteUpdate = 14,
  ChannelUpdate = 11,
  CreatorMonetizationRequestCreated = 150,
  CreatorMonetizationTermsAccepted = 151,
  EmojiCreate = 60,
  EmojiDelete = 62,
  EmojiUpdate = 61,
  GuildScheduledEventCreate = 100,
  GuildScheduledEventDelete = 102,
  GuildScheduledEventUpdate = 101,
  GuildUpdate = 1,
  HomeSettingsCreate = 190,
  HomeSettingsUpdate = 191,
  IntegrationCreate = 80,
  IntegrationDelete = 82,
  IntegrationUpdate = 81,
  InviteCreate = 40,
  InviteDelete = 42,
  InviteUpdate = 41,
  MemberBanAdd = 22,
  MemberBanRemove = 23,
  MemberDisconnect = 27,
  MemberKick = 20,
  MemberMove = 26,
  MemberPrune = 21,
  MemberRoleUpdate = 25,
  MemberUpdate = 24,
  MessageBulkDelete = 73,
  MessageDelete = 72,
  MessagePin = 74,
  MessageUnpin = 75,
  OnboardingCreate = 166,
  OnboardingPromptCreate = 163,
  OnboardingPromptDelete = 165,
  OnboardingPromptUpdate = 164,
  OnboardingUpdate = 167,
  RoleCreate = 30,
  RoleDelete = 32,
  RoleUpdate = 31,
  SoundboardSoundCreate = 130,
  SoundboardSoundDelete = 132,
  SoundboardSoundUpdate = 131,
  StageInstanceCreate = 83,
  StageInstanceDelete = 85,
  StageInstanceUpdate = 84,
  StickerCreate = 90,
  StickerDelete = 92,
  StickerUpdate = 91,
  ThreadCreate = 110,
  ThreadDelete = 112,
  ThreadUpdate = 111,
  WebhookCreate = 50,
  WebhookDelete = 52,
  WebhookUpdate = 51,
}

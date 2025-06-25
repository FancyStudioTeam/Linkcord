import type { GatewayDispatchApplicationCommandPermissionsUpdate } from "./dispatch/application-command-permissions-update.js";
import type { GatewayDispatchAutoModerationActionExecution } from "./dispatch/auto-moderation-action-execution.js";
import type { GatewayDispatchAutoModerationRuleCreate } from "./dispatch/auto-moderation-rule-create.js";
import type { GatewayDispatchAutoModerationRuleDelete } from "./dispatch/auto-moderation-rule-delete.js";
import type { GatewayDispatchAutoModerationRuleUpdate } from "./dispatch/auto-moderation-rule-update.js";
import type { GatewayDispatchGuildBanAdd } from "./dispatch/guild-ban-add.js";
import type { GatewayDispatchGuildBanRemove } from "./dispatch/guild-ban-remove.js";
import type { GatewayDispatchGuildCreate } from "./dispatch/guild-create.js";
import type { GatewayDispatchGuildDelete } from "./dispatch/guild-delete.js";
import type { GatewayDispatchGuildMemberAdd } from "./dispatch/guild-member-add.js";
import type { GatewayDispatchGuildMemberRemove } from "./dispatch/guild-member-remove.js";
import type { GatewayDispatchGuildSoundboardSoundCreate } from "./dispatch/guild-soundboard-sound-create.js";
import type { GatewayDispatchGuildSoundboardSoundDelete } from "./dispatch/guild-soundboard-sound-delete.js";
import type { GatewayDispatchGuildSoundboardSoundUpdate } from "./dispatch/guild-soundboard-sound-update.js";
import type { GatewayDispatchGuildSoundboardSoundsUpdate } from "./dispatch/guild-soundboard-sounds-update.js";
import type { GatewayDispatchInteractionCreate } from "./dispatch/interaction-create.js";
import type { GatewayDispatchMessageDeleteBulk } from "./dispatch/message-delete-bulk.js";
import type { GatewayDispatchMessagePollVoteAdd } from "./dispatch/message-poll-vote-add.js";
import type { GatewayDispatchMessagePollVoteRemove } from "./dispatch/message-poll-vote-remove.js";
import type { GatewayDispatchPresenceUpdate } from "./dispatch/presence-update.js";
import type { GatewayDispatchReady } from "./dispatch/ready.js";
import type { GatewayDispatchSoundboardSounds } from "./dispatch/soundboard-sounds.js";
import type { GatewayDispatchTypingStart } from "./dispatch/typing-start.js";
import type { GatewayDispatchUserUpdate } from "./dispatch/user-update.js";
import type { GatewayDispatchVoiceChannelEffectSend } from "./dispatch/voice-channel-effect-send.js";
import type { GatewayDispatchVoiceServerUpdate } from "./dispatch/voice-server-update.js";
import type { GatewayDispatchVoiceStateUpdate } from "./dispatch/voice-state-update.js";
import type { GatewayDispatchWebhooksUpdate } from "./dispatch/webhooks-update.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#receive-events
 */
export type GatewayDispatch =
  | GatewayDispatchApplicationCommandPermissionsUpdate
  | GatewayDispatchAutoModerationActionExecution
  | GatewayDispatchAutoModerationRuleCreate
  | GatewayDispatchAutoModerationRuleDelete
  | GatewayDispatchAutoModerationRuleUpdate
  | GatewayDispatchGuildBanAdd
  | GatewayDispatchGuildBanRemove
  | GatewayDispatchGuildCreate
  | GatewayDispatchGuildDelete
  | GatewayDispatchGuildMemberAdd
  | GatewayDispatchGuildMemberRemove
  | GatewayDispatchGuildSoundboardSoundCreate
  | GatewayDispatchGuildSoundboardSoundDelete
  | GatewayDispatchGuildSoundboardSoundUpdate
  | GatewayDispatchGuildSoundboardSoundsUpdate
  | GatewayDispatchInteractionCreate
  | GatewayDispatchMessageDeleteBulk
  | GatewayDispatchMessagePollVoteAdd
  | GatewayDispatchMessagePollVoteRemove
  | GatewayDispatchPresenceUpdate
  | GatewayDispatchReady
  | GatewayDispatchSoundboardSounds
  | GatewayDispatchTypingStart
  | GatewayDispatchUserUpdate
  | GatewayDispatchVoiceChannelEffectSend
  | GatewayDispatchVoiceServerUpdate
  | GatewayDispatchVoiceStateUpdate
  | GatewayDispatchWebhooksUpdate;

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#receive-events
 */
export enum GatewayDispatchEvents {
  ApplicationCommandPermissionsUpdate = "APPLICATION_COMMAND_PERMISSIONS_UPDATE",
  AutoModerationActionExecution = "AUTO_MODERATION_ACTION_EXECUTION",
  AutoModerationRuleCreate = "AUTO_MODERATION_RULE_CREATE",
  AutoModerationRuleDelete = "AUTO_MODERATION_RULE_DELETE",
  AutoModerationRuleUpdate = "AUTO_MODERATION_RULE_UPDATE",
  ChannelCreate = "CHANNEL_CREATE",
  ChannelDelete = "CHANNEL_DELETE",
  ChannelPinsUpdate = "CHANNEL_PINS_UPDATE",
  ChannelUpdate = "CHANNEL_UPDATE",
  EntitlementCreate = "ENTITLEMENT_CREATE",
  EntitlementDelete = "ENTITLEMENT_DELETE",
  EntitlementUpdate = "ENTITLEMENT_UPDATE",
  GuildAuditLogEntryCreate = "GUILD_AUDIT_LOG_ENTRY_CREATE",
  GuildBanAdd = "GUILD_BAN_ADD",
  GuildBanRemove = "GUILD_BAN_REMOVE",
  GuildCreate = "GUILD_CREATE",
  GuildDelete = "GUILD_DELETE",
  GuildEmojisUpdate = "GUILD_EMOJIS_UPDATE",
  GuildIntegrationsUpdate = "GUILD_INTEGRATIONS_UPDATE",
  GuildMemberAdd = "GUILD_MEMBER_ADD",
  GuildMemberRemove = "GUILD_MEMBER_REMOVE",
  GuildMemberUpdate = "GUILD_MEMBER_UPDATE",
  GuildMembersChunk = "GUILD_MEMBERS_CHUNK",
  GuildRoleCreate = "GUILD_ROLE_CREATE",
  GuildRoleDelete = "GUILD_ROLE_DELETE",
  GuildRoleUpdate = "GUILD_ROLE_UPDATE",
  GuildScheduledEventCreate = "GUILD_SCHEDULED_EVENT_CREATE",
  GuildScheduledEventDelete = "GUILD_SCHEDULED_EVENT_DELETE",
  GuildScheduledEventUpdate = "GUILD_SCHEDULED_EVENT_UPDATE",
  GuildScheduledEventUserAdd = "GUILD_SCHEDULED_EVENT_USER_ADD",
  GuildScheduledEventUserRemove = "GUILD_SCHEDULED_EVENT_USER_REMOVE",
  GuildSoundboardSoundCreate = "GUILD_SOUNDBOARD_SOUND_CREATE",
  GuildSoundboardSoundDelete = "GUILD_SOUNDBOARD_SOUND_DELETE",
  GuildSoundboardSoundUpdate = "GUILD_SOUNDBOARD_SOUND_UPDATE",
  GuildSoundboardSoundsUpdate = "GUILD_SOUNDBOARD_SOUNDS_UPDATE",
  GuildStickersUpdate = "GUILD_STICKERS_UPDATE",
  GuildUpdate = "GUILD_UPDATE",
  IntegrationCreate = "INTEGRATION_CREATE",
  IntegrationDelete = "INTEGRATION_DELETE",
  IntegrationUpdate = "INTEGRATION_UPDATE",
  InteractionCreate = "INTERACTION_CREATE",
  InviteCreate = "INVITE_CREATE",
  InviteDelete = "INVITE_DELETE",
  MessageCreate = "MESSAGE_CREATE",
  MessageDelete = "MESSAGE_DELETE",
  MessageDeleteBulk = "MESSAGE_DELETE_BULK",
  MessagePollVoteAdd = "MESSAGE_POLL_VOTE_ADD",
  MessagePollVoteRemove = "MESSAGE_POLL_VOTE_REMOVE",
  MessageReactionAdd = "MESSAGE_REACTION_ADD",
  MessageReactionRemove = "MESSAGE_REACTION_REMOVE",
  MessageReactionRemoveAll = "MESSAGE_REACTION_REMOVE_ALL",
  MessageReactionRemoveEmoji = "MESSAGE_REACTION_REMOVE_EMOJI",
  MessageUpdate = "MESSAGE_UPDATE",
  PresenceUpdate = "PRESENCE_UPDATE",
  Ready = "READY",
  SoundboardSounds = "SOUNDBOARD_SOUNDS",
  StageInstanceCreate = "STAGE_INSTANCE_CREATE",
  StageInstanceDelete = "STAGE_INSTANCE_DELETE",
  StageInstanceUpdate = "STAGE_INSTANCE_UPDATE",
  SubscriptionCreate = "SUBSCRIPTION_CREATE",
  SubscriptionDelete = "SUBSCRIPTION_DELETE",
  SubscriptionUpdate = "SUBSCRIPTION_UPDATE",
  ThreadCreate = "THREAD_CREATE",
  ThreadDelete = "THREAD_DELETE",
  ThreadListSync = "THREAD_LIST_SYNC",
  ThreadMemberUpdate = "THREAD_MEMBER_UPDATE",
  ThreadMembersUpdate = "THREAD_MEMBERS_UPDATE",
  ThreadUpdate = "THREAD_UPDATE",
  TypingStart = "TYPING_START",
  UserUpdate = "USER_UPDATE",
  VoiceChannelEffectSend = "VOICE_CHANNEL_EFFECT_SEND",
  VoiceServerUpdate = "VOICE_SERVER_UPDATE",
  VoiceStateUpdate = "VOICE_STATE_UPDATE",
  WebhooksUpdate = "WEBHOOKS_UPDATE",
}

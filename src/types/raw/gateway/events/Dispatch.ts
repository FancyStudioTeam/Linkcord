import type { GatewayDispatchApplicationCommandPermissionsUpdate } from "./dispatch/ApplicationCommandPermissionsUpdate.js";
import type { GatewayDispatchAutoModerationActionExecution } from "./dispatch/AutoModerationActionExecution.js";
import type { GatewayDispatchAutoModerationRuleCreate } from "./dispatch/AutoModerationRuleCreate.js";
import type { GatewayDispatchAutoModerationRuleDelete } from "./dispatch/AutoModerationRuleDelete.js";
import type { GatewayDispatchAutoModerationRuleUpdate } from "./dispatch/AutoModerationRuleUpdate.js";
import type { GatewayDispatchGuildBanAdd } from "./dispatch/GuildBanAdd.js";
import type { GatewayDispatchGuildBanRemove } from "./dispatch/GuildBanRemove.js";
import type { GatewayDispatchGuildCreate } from "./dispatch/GuildCreate.js";
import type { GatewayDispatchGuildDelete } from "./dispatch/GuildDelete.js";
import type { GatewayDispatchGuildMemberAdd } from "./dispatch/GuildMemberAdd.js";
import type { GatewayDispatchGuildMemberRemove } from "./dispatch/GuildMemberRemove.js";
import type { GatewayDispatchGuildRoleCreate } from "./dispatch/GuildRoleCreate.js";
import type { GatewayDispatchGuildRoleDelete } from "./dispatch/GuildRoleDelete.js";
import type { GatewayDispatchGuildRoleUpdate } from "./dispatch/GuildRoleUpdate.js";
import type { GatewayDispatchGuildSoundboardSoundCreate } from "./dispatch/GuildSoundboardSoundCreate.js";
import type { GatewayDispatchGuildSoundboardSoundDelete } from "./dispatch/GuildSoundboardSoundDelete.js";
import type { GatewayDispatchGuildSoundboardSoundsUpdate } from "./dispatch/GuildSoundboardSoundsUpdate.js";
import type { GatewayDispatchGuildSoundboardSoundUpdate } from "./dispatch/GuildSoundboardSoundUpdate.js";
import type { GatewayDispatchInteractionCreate } from "./dispatch/InteractionCreate.js";
import type { GatewayDispatchMessageDeleteBulk } from "./dispatch/MessageDeleteBulk.js";
import type { GatewayDispatchMessagePollVoteAdd } from "./dispatch/MessagePollVoteAdd.js";
import type { GatewayDispatchMessagePollVoteRemove } from "./dispatch/MessagePollVoteRemove.js";
import type { GatewayDispatchPresenceUpdate } from "./dispatch/PresenceUpdate.js";
import type { GatewayDispatchReady } from "./dispatch/Ready.js";
import type { GatewayDispatchSoundboardSounds } from "./dispatch/SoundboardSounds.js";
import type { GatewayDispatchTypingStart } from "./dispatch/TypingStart.js";
import type { GatewayDispatchUserUpdate } from "./dispatch/UserUpdate.js";
import type { GatewayDispatchVoiceChannelEffectSend } from "./dispatch/VoiceChannelEffectSend.js";
import type { GatewayDispatchVoiceServerUpdate } from "./dispatch/VoiceServerUpdate.js";
import type { GatewayDispatchVoiceStateUpdate } from "./dispatch/VoiceStateUpdate.js";
import type { GatewayDispatchWebhooksUpdate } from "./dispatch/WebhooksUpdate.js";

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
    | GatewayDispatchGuildRoleCreate
    | GatewayDispatchGuildRoleDelete
    | GatewayDispatchGuildRoleUpdate
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

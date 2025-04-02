import type { APIVersion, Nullable } from "#types/shared";
import type { GatewayDispatchEventBase, GatewayEventBase } from "./base/event.js";

/**
 * https://discord.com/developers/docs/events/gateway-events#ready
 */
export interface GatewayDispatchReadyEvent
  extends GatewayDispatchEventBase<GatewayDispatchEvents.Ready, GatewayDispatchReadyEventPayload> {}

/**
 * https://discord.com/developers/docs/events/gateway-events#ready-ready-event-fields
 */
export interface GatewayDispatchReadyEventPayload {
  resume_gateway_url: string;
  session_id: string;
  shard: [number, number];
  v: APIVersion;
}

/**
 * https://discord.com/developers/docs/events/gateway-events#heartbeat
 */
export interface GatewayHeartbeatEvent
  extends GatewayEventBase<GatewayOpcodes.Heartbeat, GatewayHeartbeatEventPayload> {}

/**
 * https://discord.com/developers/docs/events/gateway-events#heartbeat-example-heartbeat
 */
export type GatewayHeartbeatEventPayload = number;

/**
 * https://discord.com/developers/docs/events/gateway-events#hello
 */
export interface GatewayHelloEvent extends GatewayEventBase<GatewayOpcodes.Hello, GatewayHelloEventPayload> {}

/**
 * https://discord.com/developers/docs/events/gateway-events#hello-example-hello
 */
export interface GatewayHelloEventPayload {
  heartbeat_interval: number;
}

/**
 * https://discord.com/developers/docs/events/gateway-events#update-presence
 */
export interface GatewayUpdatePresenceEvent
  extends GatewayEventBase<GatewayOpcodes.PresenceUpdate, GatewayPresenceUpdateData> {}

/**
 * https://discord.com/developers/docs/events/gateway-events#update-presence-gateway-presence-update-structure
 */
export interface GatewayPresenceUpdateData {
  afk: boolean;
  since: Nullable<number>;
  status: StatusTypes;
}

/**
 * https://discord.com/developers/docs/events/gateway-events#receive-events
 */
export type GatewayDispatchEvent = GatewayDispatchReadyEvent;

/**
 * https://discord.com/developers/docs/events/gateway-events#payload-structure
 */
export type GatewayEvent = GatewayReceiveEvent;

/**
 * https://discord.com/developers/docs/events/gateway-events#receive-events
 */
export type GatewayReceiveEvent = GatewayDispatchEvent | GatewayHelloEvent;

/**
 * https://discord.com/developers/docs/events/gateway-events#send-events
 */
export type GatewaySendEvent = GatewayUpdatePresenceEvent;

/**
 * https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-opcodes
 */
export enum GatewayOpcodes {
  Dispatch = 0,
  Heartbeat = 1,
  HeartbeatAck = 11,
  Hello = 10,
  Identify = 2,
  InvalidSession = 9,
  PresenceUpdate = 3,
  Reconnect = 7,
  RequestGuildMembers = 8,
  RequestSoundboardSounds = 31,
  Resume = 6,
  VoiceStateUpdate = 4,
}

/**
 * https://discord.com/developers/docs/events/gateway-events#receive-events
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
  InvalidSession = "INVALID_SESSION",
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
  Ready = "READY",
  Resumed = "RESUMED",
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

/**
 * https://discord.com/developers/docs/events/gateway-events#update-presence-status-types
 */
export enum StatusTypes {
  DoNotDisturb = "dnd",
  Idle = "idle",
  Invisible = "invisible",
  Offline = "offline",
  Online = "online",
}

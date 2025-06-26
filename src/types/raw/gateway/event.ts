import type { GatewayDispatch } from "./events/Dispatch.js";
import type { GatewayHeartbeat } from "./events/Heartbeat.js";
import type { GatewayHello } from "./events/Hello.js";
import type { GatewayIdentify } from "./events/Identify.js";
import type { GatewayInvalidSession } from "./events/InvalidSession.js";
import type { GatewayPresenceUpdate } from "./events/PresenceUpdate.js";
import type { GatewayReconnect } from "./events/Reconnect.js";
import type { GatewayRequestGuildMembers } from "./events/RequestGuildMembers.js";
import type { GatewayRequestSoundboardSounds } from "./events/RequestSoundboardSounds.js";
import type { GatewayResume } from "./events/Resume.js";
import type { GatewayVoiceStateUpdate } from "./events/VoiceStateUpdate.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#payload-structure
 */
export type GatewayEvent = GatewayReceiveEvent | GatewaySendEvent;

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#receive-events
 */
export type GatewayReceiveEvent =
  | GatewayDispatch
  | GatewayHello
  | GatewayInvalidSession
  | GatewayReconnect;

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#send-events
 */
export type GatewaySendEvent =
  | GatewayHeartbeat
  | GatewayIdentify
  | GatewayPresenceUpdate
  | GatewayRequestGuildMembers
  | GatewayRequestSoundboardSounds
  | GatewayResume
  | GatewayVoiceStateUpdate;

/**
 * @public
 * @see https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-close-event-codes
 */
export enum GatewayCloseEventCodes {
  AlreadyAuthenticated = 4005,
  AuthenticationFailed = 4004,
  DecodeError = 4002,
  DisallowedIntents = 4014,
  InvalidAPIVersion = 4012,
  InvalidIntents = 4013,
  InvalidSequence = 4007,
  InvalidShard = 4010,
  NotAuthenticated = 4003,
  RateLimited = 4008,
  SessionTimedOut = 4009,
  ShardingRequired = 4011,
  UnknownError = 4000,
  UnknownOpcode = 4001,
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway#list-of-intents
 */
export enum GatewayIntents {
  AutoModerationConfiguration = 1 << 20,
  AutoModerationExecution = 1 << 21,
  DirectMessagePolls = 1 << 25,
  DirectMessageReactions = 1 << 13,
  DirectMessageTyping = 1 << 14,
  DirectMessages = 1 << 12,
  GuildExpressions = 1 << 3,
  GuildIntegrations = 1 << 4,
  GuildInvites = 1 << 6,
  GuildMembers = 1 << 1,
  GuildMessagePolls = 1 << 24,
  GuildMessageReactions = 1 << 10,
  GuildMessageTyping = 1 << 11,
  GuildMessages = 1 << 9,
  GuildModeration = 1 << 2,
  GuildPresences = 1 << 8,
  GuildScheduledEvents = 1 << 16,
  GuildVoiceStates = 1 << 7,
  GuildWebhooks = 1 << 5,
  Guilds = 1 << 0,
  MessageContent = 1 << 15,
}

/**
 * @public
 * @see https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-opcodes
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

import type { DiscordMessage } from "#types/channels/message";
import type { DiscordGuild } from "#types/guilds/guild";
import type { If, Snowflake } from "#types/shared";

/**
 * https://discord.com/developers/docs/events/gateway-events#payload-structure
 */
interface GatewayEventBase<Opcode extends GatewayOpcodes, Data, Type = GatewayDispatchEventType> {
  /** The gateway JSON data. */
  d: Data;
  /** The gateway opcode. */
  op: Opcode;
  /** The gateway dispatch event name. */
  t: If<IsDispatchPayload<Opcode>, Type, null>;
  /** The gateway sequence number. */
  s: If<IsDispatchPayload<Opcode>, number, null>;
}

/**
 * https://discord.com/developers/docs/events/gateway-events#payload-structure
 */
interface GatewayDispatchEventBase<Data, Type = GatewayDispatchEventType>
  extends GatewayEventBase<GatewayOpcodes.Dispatch, Data, Type> {}

/**
 * https://discord.com/developers/docs/events/gateway-events#gateway-events
 */
export type GatewayEvent = GatewayReceiveEvent | GatewaySendEvent;

/**
 * https://discord.com/developers/docs/events/gateway-events#receive-events
 */
export type GatewayReceiveEvent = GatewayDispatchEvent | GatewayHelloEvent;

/**
 * https://discord.com/developers/docs/events/gateway-events#send-events
 */
export type GatewaySendEvent = GatewayIdentifyEvent;

/**
 * https://discord.com/developers/docs/events/gateway-events#receive-events
 */
export type GatewayDispatchEvent = GatewayDispatchGuildCreateEvent | GatewayDispatchMessageCreateEvent;

/**
 * https://discord.com/developers/docs/events/gateway-events#guild-create
 */
export interface GatewayDispatchGuildCreateEvent
  extends GatewayDispatchEventBase<GatewayDispatchGuildCreateEventData, GatewayDispatchEventType.GuildCreate> {}

/**
 * https://discord.com/developers/docs/events/gateway-events#guild-create
 */
export interface GatewayDispatchGuildCreateEventData extends DiscordGuild {}

/**
 * https://discord.com/developers/docs/events/gateway-events#message-create
 */
export interface GatewayDispatchMessageCreateEvent
  extends GatewayDispatchEventBase<GatewayDispatchMessageCreateEventData, GatewayDispatchEventType.MessageCreate> {}

/**
 * https://discord.com/developers/docs/events/gateway-events#message-create
 */
export interface GatewayDispatchMessageCreateEventData extends DiscordMessage {
  // biome-ignore lint/style/useNamingConvention: Discord properties are snake cased.
  guild_id?: Snowflake;
}

/**
 * https://discord.com/developers/docs/events/gateway-events#heartbeat
 */
export interface GatewayHeartbeatEvent extends GatewayEventBase<GatewayOpcodes.Heartbeat, GatewayHeartbeatEventData> {}

/**
 * https://discord.com/developers/docs/events/gateway-events#heartbeat
 */
export type GatewayHeartbeatEventData = number;

/**
 * https://discord.com/developers/docs/events/gateway-events#hello
 */
export interface GatewayHelloEvent extends GatewayEventBase<GatewayOpcodes.Hello, GatewayHelloEventData> {}

/**
 * https://discord.com/developers/docs/events/gateway-events#hello-hello-structure
 */
export interface GatewayHelloEventData {
  // biome-ignore lint/style/useNamingConvention: Discord properties are snake cased.
  heartbeat_interval: number;
}

/**
 * https://discord.com/developers/docs/events/gateway-events#identify
 */
export interface GatewayIdentifyEvent extends GatewayEventBase<GatewayOpcodes.Identify, GatewayIdentifyEventData> {}

/**
 * https://discord.com/developers/docs/events/gateway-events#identify-identify-structure
 */
export interface GatewayIdentifyEventData {
  compress?: boolean;
  intents: number;
  // biome-ignore lint/style/useNamingConvention: Discord properties are snake cased.
  large_threshold?: number;
  properties: GatewayIdentifyEventPropertiesData;
  shard?: [number, number];
  token: string;
}

/**
 * https://discord.com/developers/docs/events/gateway-events#identify-identify-connection-properties
 */
export interface GatewayIdentifyEventPropertiesData {
  browser: string;
  device: string;
  os: string;
}

/**
 * https://discord.com/developers/docs/events/gateway-events#event-names
 */
export enum GatewayDispatchEventType {
  GuildCreate = "GUILD_CREATE",
  MessageCreate = "MESSAGE_CREATE",
}

/**
 * https://discord.com/developers/docs/events/gateway#gateway-intents
 */
export enum GatewayIntents {
  Guilds = 1 << 0,
  GuildMembers = 1 << 1,
  GuildModeration = 1 << 2,
  GuildExpressions = 1 << 3,
  GuildIntegrations = 1 << 4,
  GuildWebhooks = 1 << 5,
  GuildInvites = 1 << 6,
  GuildVoiceStates = 1 << 7,
  GuildPresences = 1 << 8,
  GuildMessages = 1 << 9,
  GuildMessageReactions = 1 << 10,
  GuildMessageTyping = 1 << 11,
  DirectMessages = 1 << 12,
  DirectMessageReactions = 1 << 13,
  DirectMessageTyping = 1 << 14,
  MessageContent = 1 << 15,
  GuildScheduledEvents = 1 << 16,
  AutoModerationConfiguration = 1 << 20,
  AutoModerationExecution = 1 << 21,
  GuildMessagePolls = 1 << 24,
  DirectMessagePolls = 1 << 25,
}

/**
 * https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-opcodes
 */
export enum GatewayOpcodes {
  Dispatch = 0,
  Heartbeat = 1,
  Identify = 2,
  StatusUpdate = 3,
  Resume = 6,
  Reconnect = 7,
  RequestGuildMembers = 8,
  InvalidSession = 9,
  Hello = 10,
  HeartbeatAck = 11,
  RequestSoundboardSounds = 31,
}

type IsDispatchPayload<Opcode extends GatewayOpcodes> = Opcode extends GatewayOpcodes.Dispatch ? true : false;

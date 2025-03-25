import type { DiscordMessage } from "./channels.js";
import type { DiscordAPIVersion, If, Snowflake } from "./shared.js";

export interface CreateGatewayManagerConnectionPropertiesOptions {
  /**
   * The browser used to connect.
   *
   * @default "Linkcord"
   */
  browser: string;
  /**
   * The device used to connect.
   *
   * @default "Linkcord"
   */
  device: string;
  /**
   * The operating system used to connect.
   *
   * @default "process.platform"
   */
  os: string;
}

export interface CreateGatewayManagerOptions {
  /** The connection properties to use. */
  connectionProperties?: CreateGatewayManagerConnectionPropertiesOptions;
  /** The gateway intents to use. */
  intents: GatewayIntents[] | number;
  /** The client token to use. */
  token: string;
  /**
   * The amount of shards to spawn.
   *
   * @default "auto"
   *
   * @remarks When using "auto", this will make a request to the client's gateway
   * and retreive the recommended shard count.
   */
  shards?: "auto" | number;
  /**
   * The Discord gateway version to use.
   *
   * @default 10
   */
  version?: GatewayVersion;
}

export type GatewayEvent = GatewayReceiveEvent | GatewaySendEvent;

interface GatewayEventPayloadBody<Opcode extends GatewayOpcodes, Data, Type = GatewayDispatchEventType> {
  /** The gateway JSON data. */
  d: Data;
  /** The gateway opcode. */
  op: Opcode;
  /** The gateway dispatch event type. */
  t: If<IsDispatchPayload<Opcode>, Type, null>;
  /** The gateway sequence number. */
  s: If<IsDispatchPayload<Opcode>, number, null>;
}

export type GatewayReceiveEvent = GatewayDispatchEvent | GatewayHelloEvent;
export type GatewaySendEvent = GatewayIdentifyEvent;

export enum GatewayDispatchEventType {
  MessageCreate = "MESSAGE_CREATE",
}

export type GatewayDispatchEvent = GatewayDispatchMessageCreateEvent;

export interface GatewayDispatchEventPayloadBody<Data, Type = GatewayDispatchEventType>
  extends GatewayEventPayloadBody<GatewayOpcodes.Dispatch, Data, Type> {}

export interface GatewayDispatchMessageCreateEvent
  extends GatewayDispatchEventPayloadBody<
    GatewayDispatchMessageCreateEventData,
    GatewayDispatchEventType.MessageCreate
  > {}

export interface GatewayDispatchMessageCreateEventData extends DiscordMessage {
  // biome-ignore lint/style/useNamingConvention: Discord properties are snake cased.
  guild_id?: Snowflake;
}

export interface GatewayHeartbeatEvent
  extends GatewayEventPayloadBody<GatewayOpcodes.Heartbeat, GatewayHeartbeatEventData> {}

export type GatewayHeartbeatEventData = number;

export interface GatewayHelloEvent extends GatewayEventPayloadBody<GatewayOpcodes.Hello, GatewayHelloEventData> {}

export interface GatewayHelloEventData {
  // biome-ignore lint/style/useNamingConvention: Discord properties are snake cased.
  heartbeat_interval: number;
}

export interface GatewayIdentifyEvent
  extends GatewayEventPayloadBody<GatewayOpcodes.Identify, GatewayIdentifyEventData> {}

export interface GatewayIdentifyEventData {
  compress?: boolean;
  intents: number;
  // biome-ignore lint/style/useNamingConvention: Discord properties are snake cased.
  large_threshold?: number;
  properties: GatewayIdentifyEventPropertiesData;
  shard?: [number, number];
  token: string;
}

export interface GatewayIdentifyEventPropertiesData {
  browser: string;
  device: string;
  os: string;
}

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

export enum GatewayOpcodes {
  Dispatch = 0,
  Heartbeat = 1,
  HeartbeatAck = 11,
  Hello = 10,
  Identify = 2,
  InvalidSession = 9,
  Reconnect = 7,
  RequestGuildMembers = 8,
  RequestSoundboardSounds = 31,
  Resume = 6,
  StatusUpdate = 3,
  VoiceServerPing = 5,
  VoiceStateUpdate = 4,
}

export type GatewayVersion = DiscordAPIVersion;

type IsDispatchPayload<Opcode extends GatewayOpcodes> = Opcode extends GatewayOpcodes.Dispatch ? true : false;

export interface ShardEvents {
  hello: [heartbeatInterval: number];
  debug: [message: string];
}

export enum ShardStatus {
  Connecting = "Connecting",
  Disconnected = "Disconnected",
  GatewayOpened = "GatewayOpened",
  Identifying = "Identifying",
  Ready = "Ready",
  Resuming = "Resuming",
}

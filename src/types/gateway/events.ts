import type { DiscordMessage } from "../channels.js";
import type { DiscordGuild } from "../guilds.js";
import type { If, Snowflake } from "../shared.js";
import type { GatewayDispatchEventType, GatewayOpcodes } from "./enums.js";

/**
 * Interfaces used to represent the base properties of a gateway event.
 */

interface GatewayEventBase<Opcode extends GatewayOpcodes, Data, Type = GatewayDispatchEventType> {
  /** The gateway JSON data. */
  d: Data;
  /** The gateway opcode. */
  op: Opcode;
  /** The gateway dispatch event type. */
  t: If<IsDispatchPayload<Opcode>, Type, null>;
  /** The gateway sequence number. */
  s: If<IsDispatchPayload<Opcode>, number, null>;
}

interface GatewayDispatchEventBase<Data, Type = GatewayDispatchEventType>
  extends GatewayEventBase<GatewayOpcodes.Dispatch, Data, Type> {}

/**
 * All gateway event types.
 */

export type GatewayEvent = GatewayReceiveEvent | GatewaySendEvent;

export type GatewayReceiveEvent = GatewayDispatchEvent | GatewayHelloEvent;
export type GatewaySendEvent = GatewayIdentifyEvent;

export type GatewayDispatchEvent = GatewayDispatchMessageCreateEvent;

/**
 * Types related to the "Guild Create" dispatch event.
 */

export interface GatewayDispatchGuildCreateEvent
  extends GatewayDispatchEventBase<GatewayDispatchGuildCreateEventData, GatewayDispatchEventType.GuildCreate> {}

export interface GatewayDispatchGuildCreateEventData extends DiscordGuild {}

/**
 * Types related to the "Message Create" dispatch event.
 */

export interface GatewayDispatchMessageCreateEvent
  extends GatewayDispatchEventBase<GatewayDispatchMessageCreateEventData, GatewayDispatchEventType.MessageCreate> {}

export interface GatewayDispatchMessageCreateEventData extends DiscordMessage {
  // biome-ignore lint/style/useNamingConvention: Discord properties are snake cased.
  guild_id?: Snowflake;
}

/**
 * Types related to the "Heartbeat" gateway event.
 */

export interface GatewayHeartbeatEvent extends GatewayEventBase<GatewayOpcodes.Heartbeat, GatewayHeartbeatEventData> {}

export type GatewayHeartbeatEventData = number;

/**
 * Types related to the "Hello" gateway event.
 */

export interface GatewayHelloEvent extends GatewayEventBase<GatewayOpcodes.Hello, GatewayHelloEventData> {}

export interface GatewayHelloEventData {
  // biome-ignore lint/style/useNamingConvention: Discord properties are snake cased.
  heartbeat_interval: number;
}

/**
 * Types related to the "Identify" gateway event.
 */

export interface GatewayIdentifyEvent extends GatewayEventBase<GatewayOpcodes.Identify, GatewayIdentifyEventData> {}

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

/**
 * Other types used in some gateway event types.
 */

type IsDispatchPayload<Opcode extends GatewayOpcodes> = Opcode extends GatewayOpcodes.Dispatch ? true : false;

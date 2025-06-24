import type { GatewayShard } from "../gateway/index.js";
import type { ChatInputCommandInteraction } from "../structures/discord/ChatInputCommandInteraction.js";
import type { User } from "../structures/index.js";
import type { GatewayEvent } from "../types/raw/index.js";

/**
 * @public
 */
export interface ClientEventsInteractionCreate {
  interaction: ChatInputCommandInteraction;
  shard: GatewayShard;
}

/**
 * @public
 */
export interface ClientEventsMap {
  interactionCreate: [payload: ClientEventsInteractionCreate];
  ready: [payload: ClientEventsReady];
  shardPacket: [payload: ClientEventsShardPacket];
  shardReady: [payload: ClientEventsShardReady];
}

/**
 * @public
 */
export interface ClientEventsReady {
  shard: GatewayShard;
  user: User;
}

/**
 * @public
 */
export interface ClientEventsShardPacket {
  packet: GatewayEvent;
  shard: GatewayShard;
}

/**
 * @public
 */
export interface ClientEventsShardReady {
  shard: GatewayShard;
  user: User;
}

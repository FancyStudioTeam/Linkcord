import type { GatewayShard } from "../gateway/index.js";
import type { ChatInputCommandInteraction } from "../structures/discord/ChatInputCommandInteraction.js";
import type { User } from "../structures/index.js";
import type { GatewayEvent } from "../types/raw/index.js";

export interface ClientEventsInteractionCreate {
  interaction: ChatInputCommandInteraction;
  shard: GatewayShard;
}

export interface ClientEventsMap {
  interactionCreate: [payload: ClientEventsInteractionCreate];
  ready: [payload: ClientEventsReady];
  shardReady: [payload: ClientEventsShardReady];
  shardPacket: [payload: ClientEventsShardPacket];
}

export interface ClientEventsReady {
  shard: GatewayShard;
  user: User;
}

export interface ClientEventsShardPacket {
  packet: GatewayEvent;
  shard: GatewayShard;
}

export interface ClientEventsShardReady {
  shard: GatewayShard;
  user: User;
}

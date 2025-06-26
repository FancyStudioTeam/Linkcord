import type { GatewayShard } from "#gateway/index.js";
import type { ChatInputCommandInteraction } from "#structures/discord/ChatInputCommandInteraction.js";
import type { User } from "#structures/index.js";
import type { GatewayEvent } from "#types/index.js";

/**
 * @public
 */
export interface ClientEventsMap {
  debug: [message: string];
  interactionCreate: [interaction: ChatInputCommandInteraction];
  ready: [];
  shardHello: [heartbeatInterval: number, shard: GatewayShard];
  shardPacket: [packet: GatewayEvent, shard: GatewayShard];
  shardReady: [user: User, shard: GatewayShard];
}

/**
 * @public
 */
export type ClientEventsString = keyof ClientEventsMap;

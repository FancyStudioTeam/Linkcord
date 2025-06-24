import type { GatewayShard } from "../gateway/index.js";
import type { ChatInputCommandInteraction } from "../structures/discord/ChatInputCommandInteraction.js";
import type { User } from "../structures/index.js";
import type { GatewayEvent } from "../types/raw/index.js";

/**
 * @public
 */
export interface ClientEventsMap {
  debug: [message: string, shard?: GatewayShard];
  interactionCreate: [interaction: ChatInputCommandInteraction, shard: GatewayShard];
  ready: [user: User];
  shardPacket: [shard: GatewayShard, packet: GatewayEvent];
  shardReady: [shard: GatewayShard, user: User];
}

/**
 * @public
 */
export type ClientEventsString = keyof ClientEventsMap;

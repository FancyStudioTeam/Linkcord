import type { ChatInputCommandInteraction } from "#structures/discord/ChatInputCommandInteraction.js";
import type { User } from "#structures/index.js";
import type { GatewayEvent } from "#types/index.js";

/**
 * @public
 */
export interface ClientEventsMap {
  debug: [message: string];
  interactionCreate: [interaction: ChatInputCommandInteraction];
  ready: [user: User];
  shardPacket: [packet: GatewayEvent];
  shardReady: [user: User];
}

/**
 * @public
 */
export type ClientEventsString = keyof ClientEventsMap;

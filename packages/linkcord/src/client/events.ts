import type { GatewayShard } from "@fancystudioteam/linkcord-gateway";
import type { ChatInputCommandInteraction } from "../structures/discord/ChatInputCommandInteraction.js";
import type { User } from "../structures/index.js";

export interface ClientEventsInteractionCreate {
  interaction: ChatInputCommandInteraction;
  shard: GatewayShard;
}

export interface ClientEventsMap {
  interactionCreate: [payload: ClientEventsInteractionCreate];
  ready: [payload: ClientEventsReady];
}

export interface ClientEventsReady {
  shard: GatewayShard;
  user: User;
}

import type { GatewayShard } from "@fancystudioteam/linkcord-gateway";
import type { ChatInputCommandInteraction } from "../../structures/discord/ChatInputCommandInteraction.js";

export interface ClientEventsDebug {
  message: string;
  shard?: GatewayShard;
}

export interface ClientEventsInteractionCreate {
  interaction: ChatInputCommandInteraction;
  shard: GatewayShard;
}

export interface ClientEventsMap {
  debug: [payload: ClientEventsDebug];
  interactionCreate: [payload: ClientEventsInteractionCreate];
  ready: [payload: ClientEventsReady];
}

export interface ClientEventsReady {
  shard: GatewayShard;
}

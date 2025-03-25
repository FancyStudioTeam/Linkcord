import type { Client } from "#client";
import { GuildsTransformer } from "#transformers";
import type { GatewayDispatchGuildCreateEventData } from "#types";

export const createGuildHandler = (client: Client, guildCreateData: GatewayDispatchGuildCreateEventData) => {
  const guildsTransformer = new GuildsTransformer();
  const parsedGuild = guildsTransformer.rawGuildToParsed(guildCreateData);

  client.emit("guildCreate", parsedGuild);
};

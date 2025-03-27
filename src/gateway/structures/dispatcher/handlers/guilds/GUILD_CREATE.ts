import type { Client } from "#client";
import { GuildsTransformer } from "#transformers";
import type { GatewayDispatchGuildCreateEvent } from "#types/gateway/events";

// biome-ignore lint/suspicious/useAwait: Handlers must be async.
export const handleGuildCreate = async (client: Client, gatewayEvent: GatewayDispatchGuildCreateEvent) => {
  const { d } = gatewayEvent;
  const guildsTransformer = new GuildsTransformer();
  const parsedGuild = guildsTransformer.rawGuildToParsed(d);

  client.emit("guildCreate", parsedGuild);
};

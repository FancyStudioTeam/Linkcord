import type { Client } from "#client";
import type { GatewayDispatchGuildCreateEventData, GatewayDispatchMessageCreateEventData } from "#types/gateway/events";

export const Dispatcher = (client: Client) => ({
  // biome-ignore lint/style/useNamingConvention: Discord dispatch event names are screaming snake cased.
  GUILD_CREATE: async (guildCreateData: GatewayDispatchGuildCreateEventData) => {
    const { createGuildHandler } = await import("./handlers/GuildCreate.js");

    await createGuildHandler(client, guildCreateData);
  },
  // biome-ignore lint/style/useNamingConvention: Discord dispatch event names are screaming snake cased.
  MESSAGE_CREATE: async (messageCreateData: GatewayDispatchMessageCreateEventData) => {
    const { messageCreateHandler } = await import("./handlers/MessageCreate.js");

    await messageCreateHandler(client, messageCreateData);
  },
});

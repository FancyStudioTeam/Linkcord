import type { Client } from "#client";
import type { GatewayDispatchGuildCreateEventData, GatewayDispatchMessageCreateEventData } from "#types";

export const Dispatcher = (client: Client) => ({
  GUILD_CREATE: async (guildCreateData: GatewayDispatchGuildCreateEventData) => {
    const { createGuildHandler } = await import("./handlers/GuildCreate.js");

    await createGuildHandler(client, guildCreateData);
  },
  MESSAGE_CREATE: async (messageCreateData: GatewayDispatchMessageCreateEventData) => {
    const { messageCreateHandler } = await import("./handlers/MessageCreate.js");

    await messageCreateHandler(client, messageCreateData);
  },
});

import type { Client } from "#client";
import type { GatewayDispatchMessageCreateEventData } from "#types";

export const Dispatcher = (client: Client) => ({
  MESSAGE_CREATE: async (messageCreateData: GatewayDispatchMessageCreateEventData) => {
    const { messageCreateHandler } = await import("./handlers/MessageCreate.js");

    await messageCreateHandler(client, messageCreateData);
  },
});

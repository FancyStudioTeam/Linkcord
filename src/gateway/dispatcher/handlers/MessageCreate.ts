import type { Client } from "#client";
import { ChannelsTransformer } from "#transformers";
import type { GatewayDispatchMessageCreateEventData } from "#types";

export const messageCreateHandler = (client: Client, messageCreateData: GatewayDispatchMessageCreateEventData) => {
  const channelsTransformer = new ChannelsTransformer();
  const parsedMessage = channelsTransformer.rawMessageToParsed(messageCreateData);

  client.emit("messageCreate", parsedMessage);
};

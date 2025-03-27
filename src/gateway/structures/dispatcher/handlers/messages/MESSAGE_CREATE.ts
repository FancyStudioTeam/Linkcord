import type { Client } from "#client";
import { ChannelsTransformer } from "#transformers";
import type { GatewayDispatchMessageCreateEvent } from "#types/gateway/events";

// biome-ignore lint/suspicious/useAwait: Handlers must be async.
export const handleMessageCreate = async (client: Client, gatewayEvent: GatewayDispatchMessageCreateEvent) => {
  const { d } = gatewayEvent;
  const { rest } = client;
  const channelsTransformer = new ChannelsTransformer(rest);
  const parsedMessage = channelsTransformer.rawMessageToParsed(d);

  client.emit("messageCreate", parsedMessage);
};

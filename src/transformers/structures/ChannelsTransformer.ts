import type { DiscordMessage, GatewayDispatchMessageCreateEventData, Message } from "#types";

export class ChannelsTransformer {
  rawMessageToParsed(rawMessage: RawMessage): Message {
    const { channel_id, content, id } = rawMessage;
    const messageProperties: MessageWithoutMethods = {
      channelId: channel_id,
      content,
      id,
      guildId: undefined,
    };

    if ("guild_id" in rawMessage) {
      const { guild_id } = rawMessage;

      messageProperties.guildId = guild_id;
    }

    const message: Message = {
      ...messageProperties,
      inGuild(): this is Message<true> {
        return message.guildId !== undefined;
      },
    };

    return message;
  }
}

type RawMessage = DiscordMessage | GatewayDispatchMessageCreateEventData;
type MessageWithoutMethods = Omit<Message, "inGuild">;

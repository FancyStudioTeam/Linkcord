import type { DiscordMessage, GatewayDispatchMessageCreateEventData, Message } from "#types";

export class ChannelsTransformer {
  rawMessageToParsed(rawMessage: RawMessage): Message {
    const { channel_id, content, id } = rawMessage;
    const message: Message = {
      channelId: channel_id,
      content,
      id,
    };

    if ("guild_id" in rawMessage) {
      message.guildId = rawMessage.guild_id;
    }

    return message;
  }
}

type RawMessage = DiscordMessage | GatewayDispatchMessageCreateEventData;

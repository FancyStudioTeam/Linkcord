import type { RESTManager } from "#rest";
import type { DiscordMessage, Message } from "#types/channels/message";
import type { GatewayDispatchMessageCreateEventData } from "#types/gateway/events";

export class ChannelsTransformer {
  protected _restManager: RESTManager;

  constructor(restManager: RESTManager) {
    this._restManager = restManager;
  }

  /**
   * Transforms a raw message object into a parsed message object.
   *
   * @param rawMessage - The raw message object to transform.
   *
   * @returns The parsed message object.
   */
  rawMessageToParsed(rawMessage: RawMessage): Message {
    const { channel_id, content, id, type } = rawMessage;
    const messageProperties: MessageProperties = {
      channelId: channel_id,
      content,
      guildId: undefined,
      id,
      type,
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

type MessageProperties = Omit<Message, "inGuild">;

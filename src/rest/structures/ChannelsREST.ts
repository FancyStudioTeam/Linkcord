import { ChannelsTransformer } from "#transformers";
import type { CreateMessageOptions, DiscordMessage, Message, Snowflake } from "#types";
import { Endpoints } from "../../routes/Endpoints.js";
import type { RESTManager } from "./RESTManager.js";

export class ChannelsREST {
  protected _channelsTransformer = new ChannelsTransformer();
  protected _restManager: RESTManager;

  constructor(restManager: RESTManager) {
    this._restManager = restManager;
  }

  /**
   * Creates a message in a channel.
   *
   * @param channelId - The channel id to create the message in.
   * @param options - The options to use when creating the message.
   *
   * @returns The created message object.
   */
  async createMessage(channelId: Snowflake, options: CreateMessageOptions): Promise<Message> {
    const { content } = options;
    const { _channelsTransformer, _restManager } = this;
    const { channelsMessages } = Endpoints;
    const discordMessageObject = await _restManager.makeRequest<DiscordMessage>("POST", channelsMessages(channelId), {
      json: {
        content,
      },
    });
    const parsedMessage = _channelsTransformer.rawMessageToParsed(discordMessageObject);

    return parsedMessage;
  }
}

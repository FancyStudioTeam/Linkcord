import { ChannelsTransformer } from "#transformers";
import type { CreateMessageOptions, DiscordMessage, Message } from "#types/channels/message";
import { RESTMethod } from "#types/rest/manager";
import type { Snowflake } from "#types/shared";
import { Routes } from "#util";
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
    const { channelsMessages } = Routes;
    const rawMessage = await _restManager.makeRequest<DiscordMessage>(RESTMethod.Post, channelsMessages(channelId), {
      json: {
        content,
      },
    });
    const parsedMessage = _channelsTransformer.rawMessageToParsed(rawMessage);

    return parsedMessage;
  }
}

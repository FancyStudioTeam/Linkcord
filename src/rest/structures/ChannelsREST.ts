import { ChannelsTransformer } from "#transformers";
import type { CreateMessageOptions, DiscordMessage, Message } from "#types/channels/message";
import { RESTMethod } from "#types/rest/manager";
import type { Snowflake } from "#types/shared";
import { Routes } from "#util";
import type { RESTManager } from "./RESTManager.js";

export class ChannelsREST {
  protected _restManager: RESTManager;
  protected _transformer: ChannelsTransformer;

  constructor(restManager: RESTManager) {
    this._restManager = restManager;
    this._transformer = new ChannelsTransformer(restManager);
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
    const { _restManager, _transformer } = this;
    const { channelsMessages } = Routes;
    const rawMessage = await _restManager.makeRequest<DiscordMessage>(RESTMethod.Post, channelsMessages(channelId), {
      json: {
        content,
      },
    });
    const parsedMessage = _transformer.rawMessageToParsed(rawMessage);

    return parsedMessage;
  }

  /**
   * Sends the soundboard sound to the current voice channel.
   *
   * @param soundboardSoundId - The soundboard sound id to send.
   * @param channelId - The voice channel id.
   * @param sourceGuildId - The original soundboard sound guild id.
   */
  async sendSoundboardSound(
    soundboardSoundId: Snowflake,
    channelId: Snowflake,
    sourceGuildId?: Snowflake,
  ): Promise<void> {
    const { _restManager } = this;
    const { channelsSendSoundboardSound } = Routes;

    await _restManager.makeRequest(RESTMethod.Post, channelsSendSoundboardSound(channelId), {
      json: {
        // biome-ignore lint/style/useNamingConvention: Discord properties are snake cased.
        sound_id: soundboardSoundId,
        // biome-ignore lint/style/useNamingConvention: Discord properties are snake cased.
        source_guild_id: sourceGuildId,
      },
    });
  }
}

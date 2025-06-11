import type {
  RESTGetChannelWebhooks,
  RESTPostChannelSoundboardSound,
  RESTPostChannelSoundboardSoundJSONParams,
  RESTPostChannelWebhook,
  RESTPostChannelWebhookJSONParams,
  Snowflake,
} from "@fancystudioteam/linkcord-types";
import { Endpoints } from "../../utils/index.js";
import { BaseAPI } from "./base/BaseAPI.js";

export class Channels extends BaseAPI {
  /**
   * @see https://discord.com/developers/docs/resources/webhook#get-channel-webhooks
   */
  async getChannelWebhooks<Result = RESTGetChannelWebhooks>(channelId: Snowflake): Promise<Result> {
    return await super.get<Result>(Endpoints.channelWebhooks(channelId));
  }

  /**
   * @see https://discord.com/developers/docs/resources/soundboard#send-soundboard-sound
   */
  async postChannelSoundboardSound<Result = RESTPostChannelSoundboardSound>(
    channelId: Snowflake,
    options: PostChannelSoundboardSoundOptions,
  ): Promise<Result> {
    return await super.post<Result, RESTPostChannelSoundboardSoundJSONParams>(
      Endpoints.channelSendSoundboardSound(channelId),
      options,
    );
  }

  /**
   * @see https://discord.com/developers/docs/resources/webhook#create-webhook
   */
  async postChannelWebhook<Result = RESTPostChannelWebhook>(
    channelId: Snowflake,
    options: PostChannelWebhookOptions,
  ): Promise<Result> {
    return await super.post<Result, RESTPostChannelWebhookJSONParams>(Endpoints.channelWebhooks(channelId), options);
  }
}

/**
 * @see https://discord.com/developers/docs/resources/soundboard#send-soundboard-sound
 */
export interface PostChannelSoundboardSoundOptions {
  json: RESTPostChannelSoundboardSoundJSONParams;
}

/**
 * @public
 */
export interface PostChannelWebhookOptions {
  json: RESTPostChannelWebhookJSONParams;
  reason?: string;
}

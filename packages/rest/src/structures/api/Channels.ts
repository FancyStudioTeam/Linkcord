import type {
  RESTPostChannelSoundboardSound,
  RESTPostChannelSoundboardSoundJSONParams,
  Snowflake,
} from "@fancystudioteam/linkcord-types";
import { Endpoints } from "../../utils/index.js";
import { BaseAPI } from "./base/BaseAPI.js";

export class Channels extends BaseAPI {
  /**
   * @see https://discord.com/developers/docs/resources/soundboard#send-soundboard-sound
   */
  async postChannelSoundboardSound<Result = RESTPostChannelSoundboardSound>(
    channelId: Snowflake,
    options: PostSendSoundboardSoundOptions,
  ): Promise<Result> {
    return await super.post<Result, RESTPostChannelSoundboardSoundJSONParams>(
      Endpoints.channelSendSoundboardSound(channelId),
      options,
    );
  }
}

/**
 * @see https://discord.com/developers/docs/resources/soundboard#send-soundboard-sound
 */
export interface PostSendSoundboardSoundOptions {
  json: RESTPostChannelSoundboardSoundJSONParams;
}

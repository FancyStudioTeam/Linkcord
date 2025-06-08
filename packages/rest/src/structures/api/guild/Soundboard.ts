import type {
  RESTDeleteGuildSoundboardSound,
  RESTGetDefaultSoundboardSounds,
  RESTGetGuildSoundboardSound,
  RESTGetGuildSoundboardSounds,
  RESTPatchGuildSoundboardSound,
  RESTPatchGuildSoundboardSoundJSONParams,
  RESTPostGuildSoundboardSound,
  RESTPostGuildSoundboardSoundJSONParams,
  RESTPostSendSoundboardSound,
  RESTPostSendSoundboardSoundJSONParams,
  Snowflake,
} from "@fancystudioteam/linkcord-types";
import { Endpoints } from "../../../utils/index.js";
import { BaseAPI } from "../base/BaseAPI.js";

/**
 * @public
 */
export class Soundboard extends BaseAPI {
  /**
   * @see https://discord.com/developers/docs/resources/soundboard#delete-guild-soundboard-sound
   */
  async deleteGuildSoundboardSound<Result = RESTDeleteGuildSoundboardSound>(
    guildId: Snowflake,
    soundboardSoundId: Snowflake,
  ): Promise<Result> {
    const { _restManager } = this;
    const request = await _restManager.delete<Result>(Endpoints.guildSoundboardSound(guildId, soundboardSoundId));

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/soundboard#list-default-soundboard-sounds
   */
  async getDefaultSoundboardSounds<Result = RESTGetDefaultSoundboardSounds>(): Promise<Result> {
    const { _restManager } = this;
    const request = await _restManager.get<Result>(Endpoints.soundboardDefaultSounds());

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/soundboard#get-guild-soundboard-sound
   */
  async getGuildSoundboardSound<Result = RESTGetGuildSoundboardSound>(
    guildId: Snowflake,
    soundboardSoundId: Snowflake,
  ): Promise<Result> {
    const { _restManager } = this;
    const request = await _restManager.get<Result>(Endpoints.guildSoundboardSound(guildId, soundboardSoundId));

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/soundboard#list-guild-soundboard-sounds
   */
  async getGuildSoundboardSounds<Result = RESTGetGuildSoundboardSounds>(guildId: Snowflake): Promise<Result> {
    const { _restManager } = this;
    const request = await _restManager.get<Result>(Endpoints.guildSoundboardSounds(guildId));

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/soundboard#modify-guild-soundboard-sound
   */
  async patchGuildSoundboardSound<Result = RESTPatchGuildSoundboardSound>(
    guildId: Snowflake,
    options: PatchGuildSoundboardSoundOptions,
  ): Promise<Result> {
    const { _restManager } = this;
    const request = await _restManager.patch<Result, RESTPatchGuildSoundboardSoundJSONParams>(
      Endpoints.guildSoundboardSounds(guildId),
      options,
    );

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/soundboard#create-guild-soundboard-sound
   */
  async postGuildSoundboardSound<Result = RESTPostGuildSoundboardSound>(
    guildId: Snowflake,
    options: PostGuildSoundboardSoundOptions,
  ): Promise<Result> {
    const { _restManager } = this;
    const request = await _restManager.post<Result, RESTPostGuildSoundboardSoundJSONParams>(
      Endpoints.guildSoundboardSounds(guildId),
      options,
    );

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/soundboard#send-soundboard-sound
   */
  async postSendSoundboardSound<Result = RESTPostSendSoundboardSound>(
    channelId: Snowflake,
    options: PostSendSoundboardSoundOptions,
  ): Promise<Result> {
    const { _restManager } = this;
    const request = await _restManager.post<Result, RESTPostSendSoundboardSoundJSONParams>(
      Endpoints.channelSendSoundboardSound(channelId),
      options,
    );

    return request;
  }
}

/**
 * @public
 */
export interface PatchGuildSoundboardSoundOptions {
  json: RESTPatchGuildSoundboardSound;
  reason?: string;
}

/**
 * @public
 */
export interface PostGuildSoundboardSoundOptions {
  json: RESTPostGuildSoundboardSoundJSONParams;
  reason?: string;
}

/**
 * @public
 */
export interface PostSendSoundboardSoundOptions {
  json: RESTPostSendSoundboardSoundJSONParams;
}

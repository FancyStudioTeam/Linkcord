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
    return await super.delete<Result>(Endpoints.guildSoundboardSound(guildId, soundboardSoundId));
  }

  /**
   * @see https://discord.com/developers/docs/resources/soundboard#list-default-soundboard-sounds
   */
  async getDefaultSoundboardSounds<Result = RESTGetDefaultSoundboardSounds>(): Promise<Result> {
    return await super.get<Result>(Endpoints.soundboardDefaultSounds());
  }

  /**
   * @see https://discord.com/developers/docs/resources/soundboard#get-guild-soundboard-sound
   */
  async getGuildSoundboardSound<Result = RESTGetGuildSoundboardSound>(
    guildId: Snowflake,
    soundboardSoundId: Snowflake,
  ): Promise<Result> {
    return await super.get<Result>(Endpoints.guildSoundboardSound(guildId, soundboardSoundId));
  }

  /**
   * @see https://discord.com/developers/docs/resources/soundboard#list-guild-soundboard-sounds
   */
  async getGuildSoundboardSounds<Result = RESTGetGuildSoundboardSounds>(guildId: Snowflake): Promise<Result> {
    return await super.get<Result>(Endpoints.guildSoundboardSounds(guildId));
  }

  /**
   * @see https://discord.com/developers/docs/resources/soundboard#modify-guild-soundboard-sound
   */
  async patchGuildSoundboardSound<Result = RESTPatchGuildSoundboardSound>(
    guildId: Snowflake,
    options: PatchGuildSoundboardSoundOptions,
  ): Promise<Result> {
    return await super.patch<Result, RESTPatchGuildSoundboardSoundJSONParams>(
      Endpoints.guildSoundboardSounds(guildId),
      options,
    );
  }

  /**
   * @see https://discord.com/developers/docs/resources/soundboard#create-guild-soundboard-sound
   */
  async postGuildSoundboardSound<Result = RESTPostGuildSoundboardSound>(
    guildId: Snowflake,
    options: PostGuildSoundboardSoundOptions,
  ): Promise<Result> {
    return await super.post<Result, RESTPostGuildSoundboardSoundJSONParams>(
      Endpoints.guildSoundboardSounds(guildId),
      options,
    );
  }

  /**
   * @see https://discord.com/developers/docs/resources/soundboard#send-soundboard-sound
   */
  async postSendSoundboardSound<Result = RESTPostSendSoundboardSound>(
    channelId: Snowflake,
    options: PostSendSoundboardSoundOptions,
  ): Promise<Result> {
    return await super.post<Result, RESTPostSendSoundboardSoundJSONParams>(
      Endpoints.channelSendSoundboardSound(channelId),
      options,
    );
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

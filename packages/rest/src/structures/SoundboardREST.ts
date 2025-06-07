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
import { Endpoints } from "../utils/endpoints/Endpoints.js";
import type { RESTManager } from "./RESTManager.js";

/**
 * @public
 */
export class SoundboardREST {
  restManager: RESTManager;

  constructor(restManager: RESTManager) {
    this.restManager = restManager;
  }

  /**
   * @see https://discord.com/developers/docs/resources/soundboard#delete-guild-soundboard-sound
   */
  async deleteGuildSoundboardSound<Result = RESTDeleteGuildSoundboardSound>(
    guildId: Snowflake,
    soundboardSoundId: Snowflake,
  ): Promise<Result> {
    const { restManager } = this;
    const request = await restManager.delete<Result>(Endpoints.guildSoundboardSound(guildId, soundboardSoundId));

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/soundboard#list-default-soundboard-sounds
   */
  async getDefaultSoundboardSounds<Result = RESTGetDefaultSoundboardSounds>(): Promise<Result> {
    const { restManager } = this;
    const request = await restManager.get<Result>(Endpoints.soundboardDefaultSounds());

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/soundboard#get-guild-soundboard-sound
   */
  async getGuildSoundboardSound<Result = RESTGetGuildSoundboardSound>(
    guildId: Snowflake,
    soundboardSoundId: Snowflake,
  ): Promise<Result> {
    const { restManager } = this;
    const request = await restManager.get<Result>(Endpoints.guildSoundboardSound(guildId, soundboardSoundId));

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/soundboard#list-guild-soundboard-sounds
   */
  async getGuildSoundboardSounds<Result = RESTGetGuildSoundboardSounds>(guildId: Snowflake): Promise<Result> {
    const { restManager } = this;
    const request = await restManager.get<Result>(Endpoints.guildSoundboardSounds(guildId));

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/soundboard#modify-guild-soundboard-sound
   */
  async patchGuildSoundboardSound<Result = RESTPatchGuildSoundboardSound>(
    guildId: Snowflake,
    options: PatchGuildSoundboardSoundOptions,
  ): Promise<Result> {
    const { restManager } = this;
    const request = await restManager.patch<Result, RESTPatchGuildSoundboardSoundJSONParams>(
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
    const { restManager } = this;
    const request = await restManager.post<Result, RESTPostGuildSoundboardSoundJSONParams>(
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
    const { restManager } = this;
    const request = await restManager.post<Result, RESTPostSendSoundboardSoundJSONParams>(
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

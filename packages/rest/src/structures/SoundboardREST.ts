import type {
  RESTCreateGuildSoundboardSound,
  RESTCreateGuildSoundboardSoundJSONParams,
  RESTDeleteGuildSoundboardSound,
  RESTGetGuildSoundboardSound,
  RESTListDefaultSoundboardSounds,
  RESTModifyGuildSoundboardSound,
  RESTModifyGuildSoundboardSoundJSONParams,
  RESTSendSoundboardSound,
  RESTSendSoundboardSoundJSONParams,
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
  async deleteGuildSoundboardSound(
    guildId: Snowflake,
    soundboardSoundId: Snowflake,
  ): Promise<RESTDeleteGuildSoundboardSound> {
    const { restManager } = this;
    const request = await restManager.delete<RESTDeleteGuildSoundboardSound>(
      Endpoints.guildSoundboardSound(guildId, soundboardSoundId),
    );

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/soundboard#list-default-soundboard-sounds
   */
  async getDefaultSoundboardSounds(): Promise<RESTListDefaultSoundboardSounds> {
    const { restManager } = this;
    const request = await restManager.get<RESTListDefaultSoundboardSounds>(Endpoints.soundboardDefaultSounds());

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/soundboard#get-guild-soundboard-sound
   */
  async getGuildSoundboardSound(
    guildId: Snowflake,
    soundboardSoundId: Snowflake,
  ): Promise<RESTGetGuildSoundboardSound> {
    const { restManager } = this;
    const request = await restManager.get<RESTGetGuildSoundboardSound>(
      Endpoints.guildSoundboardSound(guildId, soundboardSoundId),
    );

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/soundboard#modify-guild-soundboard-sound
   */
  async patchGuildSoundboardSound(
    guildId: Snowflake,
    options: PatchGuildSoundboardSoundOptions,
  ): Promise<RESTModifyGuildSoundboardSound> {
    const { restManager } = this;
    const request = await restManager.patch<RESTModifyGuildSoundboardSound, RESTModifyGuildSoundboardSoundJSONParams>(
      Endpoints.guildSoundboardSounds(guildId),
      options,
    );

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/soundboard#create-guild-soundboard-sound
   */
  async postGuildSoundboardSound(
    guildId: Snowflake,
    options: PostGuildSoundboardSoundOptions,
  ): Promise<RESTCreateGuildSoundboardSound> {
    const { restManager } = this;
    const request = await restManager.post<RESTCreateGuildSoundboardSound, RESTCreateGuildSoundboardSoundJSONParams>(
      Endpoints.guildSoundboardSounds(guildId),
      options,
    );

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/soundboard#send-soundboard-sound
   */
  async postSendSoundboardSound(
    channelId: Snowflake,
    options: PostSendSoundboardSoundOptions,
  ): Promise<RESTSendSoundboardSound> {
    const { restManager } = this;
    const request = await restManager.post<RESTSendSoundboardSound, RESTSendSoundboardSoundJSONParams>(
      Endpoints.channelSendSoundboardSound(channelId),
      options,
    );

    return request;
  }
}

/**
 * @public
 */
export interface PostGuildSoundboardSoundOptions {
  json: RESTCreateGuildSoundboardSoundJSONParams;
  reason?: string;
}

/**
 * @public
 */
export interface PatchGuildSoundboardSoundOptions {
  json: RESTModifyGuildSoundboardSoundJSONParams;
  reason?: string;
}

/**
 * @public
 */
export interface PostSendSoundboardSoundOptions {
  json: RESTSendSoundboardSoundJSONParams;
}

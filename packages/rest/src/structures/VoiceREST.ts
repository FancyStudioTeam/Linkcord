import type {
  RESTGetCurrentUserVoiceState,
  RESTGetUserVoiceState,
  RESTListVoiceRegions,
  RESTModifyCurrentUserVoiceState,
  RESTModifyCurrentUserVoiceStateJSONParams,
  RESTModifyUserVoiceState,
  RESTModifyUserVoiceStateJSONParams,
  Snowflake,
} from "@fancystudioteam/linkcord-types";
import { Endpoints } from "../utils/constants.js";
import type { RESTManager } from "./RESTManager.js";

/**
 * @public
 */
export class VoiceREST {
  restManager: RESTManager;

  constructor(restManager: RESTManager) {
    this.restManager = restManager;
  }

  /**
   * @see https://discord.com/developers/docs/resources/voice#get-current-user-voice-state
   */
  getCurrentUserVoiceState(guildId: Snowflake): Promise<RESTGetCurrentUserVoiceState> {
    const { restManager } = this;
    const request = restManager.get<RESTGetCurrentUserVoiceState>(Endpoints.guildsVoiceState(guildId, "@me"));

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/voice#get-user-voice-state
   */
  getUserVoiceState(guildId: Snowflake, userId: Snowflake): Promise<RESTGetUserVoiceState> {
    const { restManager } = this;
    const request = restManager.get<RESTGetUserVoiceState>(Endpoints.guildsVoiceState(guildId, userId));

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/voice#list-voice-regions
   */
  getVoiceRegions(): Promise<RESTListVoiceRegions> {
    const { restManager } = this;
    const request = restManager.get<RESTListVoiceRegions>(Endpoints.voiceRegions());

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/voice#modify-current-user-voice-state
   */
  patchCurrentUserVoiceState(
    guildId: Snowflake,
    options: PatchCurrentUserVoiceStateOptions,
  ): Promise<RESTModifyCurrentUserVoiceState> {
    const { restManager } = this;
    const request = restManager.patch<RESTModifyCurrentUserVoiceState, RESTModifyCurrentUserVoiceStateJSONParams>(
      Endpoints.guildsVoiceState(guildId, "@me"),
      options,
    );

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/voice#modify-user-voice-state
   */
  patchUserVoiceState(
    guildId: Snowflake,
    userId: Snowflake,
    options: PatchUserVoiceStateOptions,
  ): Promise<RESTModifyUserVoiceState> {
    const { restManager } = this;
    const request = restManager.patch<RESTModifyUserVoiceState, RESTModifyUserVoiceStateJSONParams>(
      Endpoints.guildsVoiceState(guildId, userId),
      options,
    );

    return request;
  }
}

/**
 * @public
 */
export interface PatchCurrentUserVoiceStateOptions {
  json: RESTModifyCurrentUserVoiceStateJSONParams;
}

/**
 * @public
 */
export interface PatchUserVoiceStateOptions {
  json: RESTModifyUserVoiceStateJSONParams;
}

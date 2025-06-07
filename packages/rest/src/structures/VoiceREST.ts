import type {
  RESTGetCurrentUserVoiceState,
  RESTGetUserVoiceState,
  RESTGetVoiceRegions,
  RESTPatchCurrentUserVoiceState,
  RESTPatchCurrentUserVoiceStateJSONParams,
  RESTPatchUserVoiceState,
  RESTPatchUserVoiceStateJSONParams,
  Snowflake,
} from "@fancystudioteam/linkcord-types";
import { Endpoints } from "../utils/endpoints/Endpoints.js";
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
  getCurrentUserVoiceState<Result = RESTGetCurrentUserVoiceState>(guildId: Snowflake): Promise<Result> {
    const { restManager } = this;
    const request = restManager.get<Result>(Endpoints.guildVoiceState(guildId, "@me"));

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/voice#get-user-voice-state
   */
  getUserVoiceState<Result = RESTGetUserVoiceState>(guildId: Snowflake, userId: Snowflake): Promise<Result> {
    const { restManager } = this;
    const request = restManager.get<Result>(Endpoints.guildVoiceState(guildId, userId));

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/voice#list-voice-regions
   */
  getVoiceRegions<Result = RESTGetVoiceRegions>(): Promise<Result> {
    const { restManager } = this;
    const request = restManager.get<Result>(Endpoints.voiceRegions());

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/voice#modify-current-user-voice-state
   */
  patchCurrentUserVoiceState<Result = RESTPatchCurrentUserVoiceState>(
    guildId: Snowflake,
    options: PatchCurrentUserVoiceStateOptions,
  ): Promise<Result> {
    const { restManager } = this;
    const request = restManager.patch<Result, RESTPatchCurrentUserVoiceStateJSONParams>(
      Endpoints.guildVoiceState(guildId, "@me"),
      options,
    );

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/voice#modify-user-voice-state
   */
  patchUserVoiceState<Result = RESTPatchUserVoiceState>(
    guildId: Snowflake,
    userId: Snowflake,
    options: PatchUserVoiceStateOptions,
  ): Promise<Result> {
    const { restManager } = this;
    const request = restManager.patch<Result, RESTPatchUserVoiceStateJSONParams>(
      Endpoints.guildVoiceState(guildId, userId),
      options,
    );

    return request;
  }
}

/**
 * @public
 */
export interface PatchCurrentUserVoiceStateOptions {
  json: RESTPatchCurrentUserVoiceStateJSONParams;
}

/**
 * @public
 */
export interface PatchUserVoiceStateOptions {
  json: RESTPatchUserVoiceStateJSONParams;
}

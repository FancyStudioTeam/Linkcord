import type {
  RESTGetUserVoiceState,
  RESTGetUserVoiceStateCurrent,
  RESTGetVoiceRegions,
  RESTPatchUserVoiceState,
  RESTPatchUserVoiceStateCurrent,
  RESTPatchUserVoiceStateCurrentJSONParams,
  RESTPatchUserVoiceStateJSONParams,
  Snowflake,
} from "@fancystudioteam/linkcord-types";
import { Endpoints } from "../utils/endpoints/Endpoints.js";
import type { RESTManager } from "./RESTManager.js";

/**
 * @public
 */
export class VoiceREST {
  private _restManager: RESTManager;

  constructor(restManager: RESTManager) {
    this._restManager = restManager;
  }

  /**
   * @see https://discord.com/developers/docs/resources/voice#get-user-voice-state
   */
  getUserVoiceState<Result = RESTGetUserVoiceState>(guildId: Snowflake, userId: Snowflake): Promise<Result> {
    const { _restManager } = this;
    const request = _restManager.get<Result>(Endpoints.guildVoiceState(guildId, userId));

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/voice#get-current-user-voice-state
   */
  getUserVoiceStateCurrent<Result = RESTGetUserVoiceStateCurrent>(guildId: Snowflake): Promise<Result> {
    const { _restManager } = this;
    const request = _restManager.get<Result>(Endpoints.guildVoiceState(guildId, "@me"));

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/voice#list-voice-regions
   */
  getVoiceRegions<Result = RESTGetVoiceRegions>(): Promise<Result> {
    const { _restManager } = this;
    const request = _restManager.get<Result>(Endpoints.voiceRegions());

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
    const { _restManager } = this;
    const request = _restManager.patch<Result, RESTPatchUserVoiceStateJSONParams>(
      Endpoints.guildVoiceState(guildId, userId),
      options,
    );

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/voice#modify-current-user-voice-state
   */
  patchUserVoiceStateCurrent<Result = RESTPatchUserVoiceStateCurrent>(
    guildId: Snowflake,
    options: PatchUserVoiceStateCurrentOptions,
  ): Promise<Result> {
    const { _restManager } = this;
    const request = _restManager.patch<Result, RESTPatchUserVoiceStateCurrentJSONParams>(
      Endpoints.guildVoiceState(guildId, "@me"),
      options,
    );

    return request;
  }
}

/**
 * @public
 */
export interface PatchUserVoiceStateCurrentOptions {
  json: RESTPatchUserVoiceStateCurrentJSONParams;
}

/**
 * @public
 */
export interface PatchUserVoiceStateOptions {
  json: RESTPatchUserVoiceStateJSONParams;
}

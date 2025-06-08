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
import { Endpoints } from "../../../utils/index.js";
import { BaseAPI } from "../base/BaseAPI.js";

/**
 * @public
 */
export class Voice extends BaseAPI {
  /**
   * @see https://discord.com/developers/docs/resources/voice#get-user-voice-state
   */
  async getUserVoiceState<Result = RESTGetUserVoiceState>(guildId: Snowflake, userId: Snowflake): Promise<Result> {
    return await super.get<Result>(Endpoints.guildVoiceState(guildId, userId));
  }

  /**
   * @see https://discord.com/developers/docs/resources/voice#get-current-user-voice-state
   */
  async getUserVoiceStateCurrent<Result = RESTGetUserVoiceStateCurrent>(guildId: Snowflake): Promise<Result> {
    return await super.get<Result>(Endpoints.guildVoiceState(guildId, "@me"));
  }

  /**
   * @see https://discord.com/developers/docs/resources/voice#list-voice-regions
   */
  async getVoiceRegions<Result = RESTGetVoiceRegions>(): Promise<Result> {
    return await super.get<Result>(Endpoints.voiceRegions());
  }

  /**
   * @see https://discord.com/developers/docs/resources/voice#modify-user-voice-state
   */
  async patchUserVoiceState<Result = RESTPatchUserVoiceState>(
    guildId: Snowflake,
    userId: Snowflake,
    options: PatchUserVoiceStateOptions,
  ): Promise<Result> {
    return await super.patch<Result, RESTPatchUserVoiceStateJSONParams>(
      Endpoints.guildVoiceState(guildId, userId),
      options,
    );
  }

  /**
   * @see https://discord.com/developers/docs/resources/voice#modify-current-user-voice-state
   */
  async patchUserVoiceStateCurrent<Result = RESTPatchUserVoiceStateCurrent>(
    guildId: Snowflake,
    options: PatchUserVoiceStateCurrentOptions,
  ): Promise<Result> {
    return await super.patch<Result, RESTPatchUserVoiceStateCurrentJSONParams>(
      Endpoints.guildVoiceState(guildId, "@me"),
      options,
    );
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

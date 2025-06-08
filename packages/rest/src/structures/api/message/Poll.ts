import type {
  RESTGetPollAnswerVotes,
  RESTGetPollAnswerVotesStringParams,
  RESTPostPollExpire,
  Snowflake,
} from "@fancystudioteam/linkcord-types";
import { Endpoints } from "../../../utils/index.js";
import { BaseAPI } from "../base/BaseAPI.js";

/**
 * @public
 */
export class Poll extends BaseAPI {
  /**
   * @see https://discord.com/developers/docs/resources/poll#get-answer-voters
   */
  async getPollAnswerVotes<Result = RESTGetPollAnswerVotes>(
    channelId: Snowflake,
    messageId: Snowflake,
    answerId: number,
    options?: GetPollAnswerVotesOptions,
  ): Promise<Result> {
    return await super.get<Result, RESTGetPollAnswerVotesStringParams>(
      Endpoints.channelPollAnswer(channelId, messageId, answerId),
      options,
    );
  }

  /**
   * @see https://discord.com/developers/docs/resources/poll#end-poll
   */
  async postPollExpire<Result = RESTPostPollExpire>(channelId: Snowflake, messageId: Snowflake): Promise<Result> {
    return await super.post<Result>(Endpoints.channelPollExpire(channelId, messageId));
  }
}

/**
 * @public
 */
export interface GetPollAnswerVotesOptions {
  query?: RESTGetPollAnswerVotesStringParams;
}

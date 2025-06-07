import type {
  RESTGetPollAnswerVotes,
  RESTGetPollAnswerVotesStringParams,
  RESTPostPollExpire,
  Snowflake,
} from "@fancystudioteam/linkcord-types";
import { Endpoints } from "../utils/index.js";
import type { RESTManager } from "./RESTManager.js";

/**
 * @public
 */
export class PollREST {
  restManager: RESTManager;

  constructor(restManager: RESTManager) {
    this.restManager = restManager;
  }

  /**
   * @see https://discord.com/developers/docs/resources/poll#get-answer-voters
   */
  getPollAnswerVotes<Result = RESTGetPollAnswerVotes>(
    channelId: Snowflake,
    messageId: Snowflake,
    answerId: number,
    options?: GetPollAnswerVotesOptions,
  ): Promise<Result> {
    const { restManager } = this;
    const request = restManager.get<Result, RESTGetPollAnswerVotesStringParams>(
      Endpoints.channelPollAnswer(channelId, messageId, answerId),
      options,
    );

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/poll#end-poll
   */
  postPollExpire<Result = RESTPostPollExpire>(channelId: Snowflake, messageId: Snowflake): Promise<Result> {
    const { restManager } = this;
    const request = restManager.post<Result>(Endpoints.channelPollExpire(channelId, messageId));

    return request;
  }
}

/**
 * @public
 */
export interface GetPollAnswerVotesOptions {
  query?: RESTGetPollAnswerVotesStringParams;
}

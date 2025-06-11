import type { APIMessage } from "../payloads/message.js";
import type { APIPollAnswer, APIPollQuestion, PollLayoutTypes } from "../payloads/poll.js";
import type { APIUser } from "../payloads/user.js";
import type { Snowflake } from "../shared/discord.js";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/poll#poll-create-request-object-poll-create-request-object-structure
 */
export interface RESTCreatePollRequest {
  allow_multiselect?: boolean;
  answers: APIPollAnswer[];
  duration?: number;
  layout_type?: PollLayoutTypes;
  question: APIPollQuestion;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/poll#get-answer-voters
 */
export interface RESTGetChannelPollAnswerVoters {
  users: APIUser[];
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/poll#get-answer-voters-query-string-params
 */
export interface RESTGetChannelPollAnswerVotersQueryStringParams {
  after?: Snowflake;
  limit?: number;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/poll#end-poll
 */
export type RESTPostChannelPollExpire = APIMessage;

import type { APIMessage, APIPollAnswer, APIPollQuestion, APIUser, PollLayoutTypes } from "#payloads";
import type { Snowflake } from "#shared";

/**
 * @see https://discord.com/developers/docs/resources/poll#get-answer-voters-query-string-params
 */
export interface RESTGetAnswerVotesQueryStringParams {
  after?: Snowflake;
  limit?: number;
}

/**
 * @see https://discord.com/developers/docs/resources/poll#get-answer-voters
 */
export interface RESTGetAnswerVoters {
  users: APIUser[];
}

/**
 * @see https://discord.com/developers/docs/resources/poll#poll-create-request-object-poll-create-request-object-structure
 */
export interface RESTPollCreateRequest {
  allow_multiselect?: boolean;
  answers: APIPollAnswer[];
  duration?: number;
  layout_type?: PollLayoutTypes;
  question: APIPollQuestion;
}

/**
 * @see https://discord.com/developers/docs/resources/poll#end-poll
 */
export type RESTEndPoll = APIMessage;

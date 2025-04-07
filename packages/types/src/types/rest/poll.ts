import type { APIMessage, APIPollAnswer, APIPollQuestion, APIPollResults, APIUser, LayoutTypes } from "#types/payloads";
import type { ISO8601Date, Nullable, Snowflake } from "#types/shared";

/**
 * https://discord.com/developers/docs/resources/poll#get-answer-voters
 */
export interface RESTGetAnswerVotes {
  users: APIUser[];
}

/**
 * https://discord.com/developers/docs/resources/poll#get-answer-voters-query-string-params
 */
export interface RESTGetAnswerVotesQueryParams {
  after?: Snowflake;
  limit?: number;
}

/**
 * https://discord.com/developers/docs/resources/poll#poll-create-request-object-poll-create-request-object-structure
 */
export interface RESTPollCreateRequest {
  allow_multiselect: boolean;
  answers: APIPollAnswer[];
  expiry: Nullable<ISO8601Date>;
  layout_type: LayoutTypes;
  question: APIPollQuestion;
  results?: APIPollResults;
}

/**
 * https://discord.com/developers/docs/resources/poll#end-poll
 */
export type RESTEndPoll = APIMessage;

import type { ISO8601Date } from "../shared/discord.js";
import type { APIPartialEmoji } from "./emoji.js";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/poll#poll-object-poll-object-structure
 */
export interface APIPoll {
  allow_multiselect: boolean;
  answers: APIPollAnswer[];
  expiry: ISO8601Date | null;
  layout_type: PollLayoutTypes;
  question: APIPollQuestion;
  results?: APIPollResults;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/poll#poll-answer-object-poll-answer-object-structure
 */
export interface APIPollAnswer {
  answer_id?: number;
  poll_media: APIPollMedia;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/poll#poll-results-object-poll-answer-count-object-structure
 */
export interface APIPollAnswerCount {
  count: number;
  id: number;
  me_voted: boolean;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/poll#poll-media-object-poll-media-object-structure
 */
export interface APIPollMedia {
  emoji?: APIPartialEmoji;
  text?: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/poll#poll-results-object-poll-results-object-structure
 */
export interface APIPollResults {
  answer_counts: APIPollAnswerCount[];
  is_finalized: boolean;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/poll#poll-media-object-poll-media-object-structure
 */
export type APIPollQuestion = Pick<APIPollMedia, "text">;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/poll#layout-type
 */
export enum PollLayoutTypes {
  Default = 1,
}

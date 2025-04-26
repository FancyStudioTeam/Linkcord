import type { ISO8601Date, Nullable } from "#types/shared";
import type { APIPartialEmoji } from "./emoji.js";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/poll#poll-object-poll-object-structure
 */
export interface APIPoll {
  allow_multiselect: boolean;
  answers: APIPollAnswer[];
  /**
   * @remarks
   * - This field value is marked as nullable to support non-expiring polls in
   *   the future, but currently all polls have an expiry date.
   */
  expiry: Nullable<ISO8601Date>;
  layout_type: PollLayoutTypes;
  /**
   * @remarks
   * - This field is an {@link APIPollMedia | `APIPollMedia`} object that only
   *   supports the {@link APIPollMedia.text | `text`} field.
   */
  question: APIPollQuestion;
  results?: APIPollResults;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/poll#poll-answer-object-poll-answer-object-structure
 */
export interface APIPollAnswer {
  /**
   * @remarks
   * - This field is only present for Gateway events.
   */
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
  /**
   * @remarks
   * - This field should be always non-null for questions and answers, but this
   *   may change in the future.
   */
  text?: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/poll#poll-media-object-poll-media-object-structure
 */
export interface APIPollQuestion extends Pick<APIPollMedia, "text"> {}

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
 * @see https://discord.com/developers/docs/resources/poll#layout-type
 */
export enum PollLayoutTypes {
  Default = 1,
}

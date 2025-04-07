import type { ISO8601Date, Nullable } from "#types/shared";
import type { APIPartialEmoji } from "./emoji.js";

/**
 * Represents a Discord poll structure.
 * @see https://discord.com/developers/docs/resources/poll#poll-object-poll-object-structure
 */
export interface APIPoll {
  /** Whether a user can select multiple answers of the poll. */
  allow_multiselect: boolean;
  /** The list of answers of the poll. */
  answers: APIPollAnswer[];
  /**
   * The time at which the poll expires.
   * @remarks This property is nullable to support future non-expiring polls, but currently all polls have an expiration time.
   */
  expiry: Nullable<ISO8601Date>;
  /**
   * The layout type of the poll.
   * @remarks Currently Discord only supports the {@link LayoutTypes.Default | Default} layout type.
   */
  layout_type: LayoutTypes;
  /**
   * The question of the poll.
   * @remarks This is an {@link APIPollMedia} object which only allows the {@link APIPollMedia.text | text} property.
   */
  question: APIPollQuestion;
  /** The results of the poll. */
  results?: APIPollResults;
}

/**
 * Represents a Discord poll answer structure.
 * @see https://discord.com/developers/docs/resources/poll#poll-answer-object-poll-answer-object-structure
 */
export interface APIPollAnswer {
  /**
   * The id of the answer.
   * @remarks This is only present in Gateway responses.
   */
  answer_id: number;
  /** The poll media of the answer. */
  poll_media: APIPollMedia;
}

/**
 * Represents a Discord poll answer count structure.
 * @see https://discord.com/developers/docs/resources/poll#poll-results-object-poll-answer-count-object-structure
 */
export interface APIPollAnswerCount {
  /** The number of votes of the answer. */
  count: number;
  /** The id of the answer. */
  id: number;
  /** Whether the current user voted for the answer. */
  me_voted: boolean;
}

/**
 * Represents a Discord poll media structure.
 * @see https://discord.com/developers/docs/resources/poll#poll-media-object-poll-media-object-structure
 */
export interface APIPollMedia {
  /** The emoji of the poll media. */
  emoji?: APIPartialEmoji;
  /**
   * The text of the poll media.
   * @remarks This should be always non-null for questions and answers, but this may change in the future.
   */
  text?: string;
}

/**
 * Represents a Discord poll question structure.
 * @see https://discord.com/developers/docs/resources/poll#poll-media-object-poll-media-object-structure
 */
export interface APIPollQuestion extends Pick<APIPollMedia, "text"> {}

/**
 * Represents a Discord poll results structure.
 * @see https://discord.com/developers/docs/resources/poll#poll-results-object-poll-results-object-structure
 */
export interface APIPollResults {
  /** The list of answer counts of the poll. */
  answer_counts: APIPollAnswerCount[];
  /** Whether the answer counts have been precisely counted. */
  is_finalized: boolean;
}

/**
 * The available layout types for a poll.
 * @see https://discord.com/developers/docs/resources/poll#layout-type
 */
export enum LayoutTypes {
  Default = 1,
}

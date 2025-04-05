import type { ISO8601Date, Nullable, Snowflake } from "#types/shared";

/**
 * https://discord.com/developers/docs/resources/poll#poll-object-poll-object-structure
 */
export interface APIPoll {
  allow_multiselect: boolean;
  answers: APIPollAnswer[];
  expiry: Nullable<ISO8601Date>;
  layout_type: LayoutType;
  question: APIPollQuestion;
  results?: APIPollResults;
}

/**
 * https://discord.com/developers/docs/resources/poll#poll-answer-object-poll-answer-object-structure
 */
export interface APIPollAnswer {
  /** @remarks Only present in Gateway events. */
  answer_id: number;
  poll_media: APIPollMedia;
}

/**
 * https://discord.com/developers/docs/resources/poll#poll-results-object-poll-answer-count-object-structure
 */
export interface APIPollAnswerCount {
  count: number;
  id: number;
  me_voted: boolean;
}

/**
 * https://discord.com/developers/docs/resources/poll#poll-media-object-poll-media-object-structure
 */
export interface APIPollMedia {
  emoji?: APIPollMediaEmoji;
  text?: string;
}

/**
 * https://discord.com/developers/docs/resources/poll#poll-media-object-poll-media-object-structure
 */
export interface APIPollMediaEmoji {
  id?: Nullable<Snowflake>;
  name?: Nullable<string>;
}

/**
 * https://discord.com/developers/docs/resources/poll#poll-results-object-poll-results-object-structure
 */
export interface APIPollResults {
  answer_counts: APIPollAnswerCount[];
  is_finalized: boolean;
}

/**
 * https://discord.com/developers/docs/resources/poll#poll-object-poll-object-structure
 */
export type APIPollQuestion = Pick<APIPollMedia, "text">;

/**
 * https://discord.com/developers/docs/resources/poll#layout-type
 */
export enum LayoutType {
  Default = 1,
}

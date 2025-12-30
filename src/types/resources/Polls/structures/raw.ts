import type { ISO8601Date } from '#types/miscellaneous/discord.js';
import type { RawPartialEmoji } from '#types/resources/Emojis/index.js';
import type { PollLayoutType } from '../enums.js';

/**
 * @see https://discord.com/developers/docs/resources/poll#poll-create-request-object-poll-create-request-object-structure
 */
export interface RawMessagePoll {
	allow_multiselect?: boolean;
	answers: RawPollAnswer[];
	duration?: number;
	layout_type?: PollLayoutType;
	question: RawPollQuestion;
}

/**
 * @see https://discord.com/developers/docs/resources/poll#poll-object-poll-object-structure
 */
export interface RawPoll {
	allow_multiselect: boolean;
	answers: RawPollAnswer[];
	expiry: ISO8601Date | null;
	layout_type: PollLayoutType;
	questions: RawPollMedia;
	results?: RawPollResults;
}

/**
 * @see https://discord.com/developers/docs/resources/poll#poll-answer-object-poll-answer-object-structure
 */
export interface RawPollAnswer {
	answer_id?: number;
	poll_media: RawPollMedia;
}

/**
 * @see https://discord.com/developers/docs/resources/poll#poll-results-object-poll-answer-count-object-structure
 */
export interface RawPollAnswerCount {
	count: number;
	id: number;
	me_voted: boolean;
}

/**
 * @see https://discord.com/developers/docs/resources/poll#poll-media-object-poll-media-object-structure
 */
export interface RawPollMedia {
	emoji?: RawPartialEmoji;
	text?: string;
}

/**
 * @see https://discord.com/developers/docs/resources/poll#poll-results-object-poll-results-object-structure
 */
export interface RawPollResults {
	answers_counts: RawPollAnswerCount[];
	is_finalized: boolean;
}

/**
 * @see https://discord.com/developers/docs/resources/poll#poll-media-object
 */
export type RawPollQuestion = Pick<RawPollMedia, 'text'>;

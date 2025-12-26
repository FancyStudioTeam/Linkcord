import type { ISO8601Date } from '#types/miscellaneous/discord.js';
import type { APIPartialEmoji } from '#types/resources/Emojis/index.js';
import type { PollLayoutType } from '../enums.js';

/**
 * @see https://discord.com/developers/docs/resources/poll#poll-create-request-object-poll-create-request-object-structure
 */
export interface APIMessagePoll {
	allow_multiselect?: boolean;
	answers: APIPollAnswer[];
	duration?: number;
	layout_type?: PollLayoutType;
	question: APIPollQuestion;
}

/**
 * @see https://discord.com/developers/docs/resources/poll#poll-object-poll-object-structure
 */
export interface APIPoll {
	allow_multiselect: boolean;
	answers: APIPollAnswer[];
	expiry: ISO8601Date | null;
	layout_type: PollLayoutType;
	questions: APIPollMedia;
	results?: APIPollResults;
}

/**
 * @see https://discord.com/developers/docs/resources/poll#poll-answer-object-poll-answer-object-structure
 */
export interface APIPollAnswer {
	answer_id?: number;
	poll_media: APIPollMedia;
}

/**
 * @see https://discord.com/developers/docs/resources/poll#poll-results-object-poll-answer-count-object-structure
 */
export interface APIPollAnswerCount {
	count: number;
	id: number;
	me_voted: boolean;
}

/**
 * @see https://discord.com/developers/docs/resources/poll#poll-media-object-poll-media-object-structure
 */
export interface APIPollMedia {
	emoji?: APIPartialEmoji;
	text?: string;
}

/**
 * @see https://discord.com/developers/docs/resources/poll#poll-results-object-poll-results-object-structure
 */
export interface APIPollResults {
	answers_counts: APIPollAnswerCount[];
	is_finalized: boolean;
}

/**
 * @see https://discord.com/developers/docs/resources/poll#poll-media-object
 */
export type APIPollQuestion = Pick<APIPollMedia, 'text'>;

import type { PartialEmoji } from "#types/resources/Emojis/index.js";
import type { PollLayoutType } from "../enums.js";

/**
 * @see https://discord.com/developers/docs/resources/poll#poll-create-request-object-poll-create-request-object-structure
 */
export interface MessagePoll {
	allowMultiselect?: boolean;
	answers: PollAnswer[];
	duration?: number;
	layoutType?: PollLayoutType;
	question: PollQuestion;
}

/**
 * @see https://discord.com/developers/docs/resources/poll#poll-answer-object-poll-answer-object-structure
 */
export interface PollAnswer {
	answerId?: number;
	pollMedia: PollMedia;
}

/**
 * @see https://discord.com/developers/docs/resources/poll#poll-results-object-poll-answer-count-object-structure
 */
export interface PollAnswerCount {
	count: number;
	id: number;
	meVoted: boolean;
}

/**
 * @see https://discord.com/developers/docs/resources/poll#poll-media-object-poll-media-object-structure
 */
export interface PollMedia {
	emoji?: PartialEmoji;
	text?: string;
}

/**
 * @see https://discord.com/developers/docs/resources/poll#poll-results-object-poll-results-object-structure
 */
export interface PollResults {
	answersCounts: PollAnswerCount[];
	isFinalized: boolean;
}

/**
 * @see https://discord.com/developers/docs/resources/poll#poll-media-object
 */
export type PollQuestion = Pick<PollMedia, "text">;

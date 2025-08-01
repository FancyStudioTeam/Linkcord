import type { Client } from "#client/Client.js";
import { MISSING_REQUIRED_FIELD_FROM_DATA } from "#errors/messages.js";
import type { Poll } from "#structures/discord/Poll.js";
import { PollAnswer } from "#structures/discord/PollAnswer.js";
import type {
	APIMessageActivity,
	APIMessageCall,
	APIPollAnswer,
	APIPollAnswerCount,
	APIPollQuestion,
	APIPollResults,
	MessageActivity,
	MessageCall,
	PollAnswerCount,
	PollResults,
} from "#types/index.js";

/**
 * Transforms raw Discord API message activity into a
 * {@link MessageActivity | `MessageActivity`} object.
 *
 * @param messageActivityData - The raw Discord API message activity data.
 *
 * @returns The transformed {@link MessageActivity | `MessageActivity`}
 * object.
 */
function transformMessageActivity(messageActivityData: APIMessageActivity): MessageActivity {
	const { party_id, type } = messageActivityData;

	return {
		partyId: party_id ?? null,
		type,
	};
}

/**
 * Transforms raw Discord API message call into a
 * {@link MessageCall | `MessageCall`} object.
 *
 * @param messageCallData - The raw Discord API message call data.
 *
 * @returns The transformed {@link MessageCall | `MessageCall`} object.
 */
function transformMessageCall(messageCallData: APIMessageCall): MessageCall {
	const { ended_timestamp, participants } = messageCallData;

	return {
		endedTimestamp: ended_timestamp ?? null,
		participants,
	};
}

/**
 * Transforms raw Discord API poll answer count into a
 * {@link PollAnswerCount | `PollAnswerCount`} object.
 *
 * @param pollAnswerCountData - The raw Discord API poll answer count data.
 *
 * @returns The transformed {@link PollAnswerCount | `PollAnswerCount`}
 * object.
 */
function transformPollAnswerCount(pollAnswerCountData: APIPollAnswerCount): PollAnswerCount {
	const { count, id, me_voted } = pollAnswerCountData;

	return {
		count,
		id,
		meVoted: me_voted,
	};
}

/**
 * Transforms raw Discord API poll answers into a map of
 * {@link PollAnswer | `PollAnswer`} instances.
 *
 * @param pollAnswersData - The raw Discord API poll answers data.
 * @param client - The client to use when instantiating the
 * 		{@link PollAnswer | `PollAnswer`} instances.
 * @param poll - The poll associated with the answers.
 *
 * @returns The transformed map of {@link PollAnswer | `PollAnswer`}
 * instances.
 */
function transformPollAnswersMap(
	pollAnswersData: APIPollAnswer[],
	client: Client,
	poll: Poll,
): Map<number, PollAnswer> {
	const pollAnswersIteratorMap: [number, PollAnswer][] = [];

	for (const pollAnswer of pollAnswersData) {
		const transformedPollAnswer = new PollAnswer(client, pollAnswer, poll);
		const { answerId } = transformedPollAnswer;

		pollAnswersIteratorMap.push([answerId, transformedPollAnswer]);
	}

	const pollAnswersMap = new Map(pollAnswersIteratorMap);

	return pollAnswersMap;
}

/**
 * Transforms raw Discord API poll question into a string.
 *
 * @param pollQuestionData - The raw Discord API poll question data.
 *
 * @returns The transformed string.
 */
function transformPollQuestion(pollQuestionData: APIPollQuestion): string {
	const { text } = pollQuestionData;

	if (!text) {
		throw new TypeError(MISSING_REQUIRED_FIELD_FROM_DATA("text", "APIPollQuestion"));
	}

	return text;
}

/**
 * Transforms raw Discord API poll results into a
 * {@link PollResults | `PollResults`} object.
 *
 * @param pollResultsData - The raw Discord API poll results data.
 *
 * @returns The transformed {@link PollResults | `PollResults`} object.
 */
function transformPollResults(pollResultsData: APIPollResults): PollResults {
	const { answer_counts, is_finalized } = pollResultsData;
	const transformedAnswerCounts = answer_counts.map((pollAnswerCount) =>
		transformPollAnswerCount(pollAnswerCount),
	);

	return {
		answerCounts: transformedAnswerCounts,
		isFinalized: is_finalized,
	};
}

/**
 * Transformers for message-related data.
 *
 * @internal
 */
export const MessageTransformer = Object.freeze({
	transformMessageActivity,
	transformMessageCall,
	transformPollAnswerCount,
	transformPollAnswersMap,
	transformPollQuestion,
	transformPollResults,
});

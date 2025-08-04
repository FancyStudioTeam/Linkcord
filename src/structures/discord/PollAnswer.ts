import type { Client } from "#client/index.js";
import { MISSING_REQUIRED_FIELD_FROM_DATA } from "#errors/messages.js";
import type {
	APIPollAnswer,
	GetChannelPollAnswerVotersOptions,
	JSONPollAnswer,
	Snowflake,
} from "#types/index.js";
import { Base } from "./Base.js";
import type { Poll } from "./Poll.js";
import type { User } from "./User.js";

/**
 * Represents a Discord poll answer.
 * @see https://discord.com/developers/docs/resources/poll#poll-answer-object-poll-answer-object-structure
 * @public
 */
export class PollAnswer extends Base {
	/**
	 * The ID of the answer.
	 */
	readonly answerId: number;
	/**
	 * The {@link Poll | `Poll`} instance associated with the answer.
	 */
	readonly poll: Poll;
	/**
	 * The text of the answer.
	 */
	readonly text: string;

	/**
	 * Creates a new {@link PollAnswer | `PollAnswer`} instance.
	 * @param client - The client that instantiated the poll answer.
	 * @param data - The {@link APIPollAnswer | `APIPollAnswer`} object.
	 * @param poll - The {@link Poll | `Poll`} instance associated with the
	 * answer.
	 */
	constructor(client: Client, data: APIPollAnswer, poll: Poll) {
		super(client);

		const { answer_id, poll_media } = data;
		const { text } = poll_media;

		if (!answer_id) {
			throw new TypeError(MISSING_REQUIRED_FIELD_FROM_DATA("answer_id", "APIPollAnswer"));
		}

		if (!text) {
			throw new TypeError(MISSING_REQUIRED_FIELD_FROM_DATA("text", "APIPollMedia"));
		}

		this.answerId = answer_id;
		this.poll = poll;
		this.text = text;
	}

	/**
	 * @internal
	 */
	protected _patch(): void {
		return;
	}

	/**
	 * Fetches the users that voted for the poll answer.
	 * @param options - The options to use when fetching the voters.
	 * @returns The users that voted for the poll answer.
	 * @see https://discord.com/developers/docs/resources/poll#get-answer-voters
	 */
	async fetchVoters(
		options: GetChannelPollAnswerVotersOptions = {},
	): Promise<Map<Snowflake, User>> {
		const { answerId, poll } = this;
		const { message } = poll;
		const { channelId, id: messageId } = message;

		return await super._api.getChannelPollAnswerVoters(channelId, messageId, answerId, options);
	}

	/**
	 * Converts the {@link PollAnswer | `PollAnswer`} instance to a JSON
	 * object.
	 * @returns The {@link JSONPollAnswer | `JSONPollAnswer`} object.
	 */
	toJSON(): JSONPollAnswer {
		const { answerId, poll, text } = this;

		return Object.freeze({
			answerId,
			poll,
			text,
		});
	}
}

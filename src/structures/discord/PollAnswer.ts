import type { Client } from "#client/Client.js";
import { MISSING_REQUIRED_FIELD_FROM_DATA } from "#errors/messages.js";
import type {
	APIPollAnswer,
	GetChannelPollAnswerVotersOptions,
	JSONPollAnswer,
	Snowflake,
} from "#types/index.js";
import { Base } from "./base/Base.js";
import type { Poll } from "./Poll.js";
import type { User } from "./User.js";

/**
 * TODO: Add `emoji` property.
 */
/**
 * Represents a Discord poll answer.
 *
 * @public
 */
export class PollAnswer extends Base {
	/**
	 * The ID of the answer.
	 */
	readonly answerId: number;
	/**
	 * The poll associated with the answer.
	 */
	readonly poll: Poll;
	/**
	 * The text of the answer.
	 */
	readonly text: string;

	/**
	 * Creates a new {@link PollAnswer | `PollAnswer`} instance.
	 *
	 * @param client - The client that instantiated the poll answer.
	 * @param data - The raw Discord API poll answer data.
	 * @param poll - The poll associated with the answer.
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
		undefined;
	}

	/**
	 * Fetches the users that voted for the poll answer.
	 *
	 * @param options - The options to use when fetching the voters.
	 *
	 * @returns The users that voted for the poll answer.
	 *
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
	 *
	 * @returns The JSON poll answer data.
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

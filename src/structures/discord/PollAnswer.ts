import type { Client } from "#client/index.js";
import { METHOD_NOT_IMPLEMENTED } from "#errors/messages/General.js";
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
 * @group Discord/Structures
 * @public
 */
export class PollAnswer extends Base {
	/**
	 * The ID of the answer.
	 */
	readonly answerId: number;
	/**
	 * The ID of the emoji of the answer.
	 */
	readonly emojiId: Snowflake | null;
	/**
	 * The name of the emoji of the answer.
	 */
	readonly emojiName: string | null;
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
	 * @param data - The {@link APIPollAnswer | `APIPollAnswer`} object from
	 * the Discord API.
	 * @param poll - The {@link Poll | `Poll`} instance associated with the
	 * answer.
	 */
	constructor(client: Client, data: APIPollAnswer, poll: Poll) {
		super(client);

		const { answer_id, poll_media } = data;
		const { emoji, text } = poll_media;
		const { id: emojiId, name: emojiName } = emoji ?? {};

		if (!answer_id) {
			throw new TypeError(MISSING_REQUIRED_FIELD_FROM_DATA("answer_id", "APIPollAnswer"));
		}

		if (!text) {
			throw new TypeError(MISSING_REQUIRED_FIELD_FROM_DATA("text", "APIPollMedia"));
		}

		this.answerId = answer_id;
		this.emojiId = emojiId ?? null;
		this.emojiName = emojiName ?? null;
		this.poll = poll;
		this.text = text;
	}

	/**
	 * Clones the current {@link PollAnswer | `PollAnswer`} instance.
	 * @returns The cloned {@link PollAnswer | `PollAnswer`} instance.
	 * @internal
	 */
	protected _clone(): this {
		return super._cloneThis();
	}

	/**
	 * Patches the {@link PollAnswer | `PollAnswer`} instance with the given
	 * data.
	 * @internal
	 */
	protected _patch(): void {
		// Use `void` to avoid TypeScript complaining about the return type
		// but still being able to execute the following code.
		return void process.emitWarning(METHOD_NOT_IMPLEMENTED());
	}

	/**
	 * Fetches the users that voted for this poll answer.
	 * @param options - The options to use when fetching the voters.
	 * @returns The users that voted for this poll answer.
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
	 * Converts the {@link PollAnswer | `PollAnswer`} instance to a
	 * {@link JSONPollAnswer | `JSONPollAnswer`} object.
	 * @returns The {@link JSONPollAnswer | `JSONPollAnswer`} object.
	 */
	toJSON(): JSONPollAnswer {
		const { answerId, emojiId, emojiName, poll, text } = this;

		return Object.freeze({
			answerId,
			emojiId,
			emojiName,
			poll,
			text,
		});
	}
}

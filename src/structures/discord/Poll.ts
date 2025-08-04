import type { Client } from "#client/index.js";
import { MISSING_REQUIRED_FIELD_FROM_DATA } from "#errors/messages.js";
import { MessageTransformer } from "#structures/transformers/MessageTransformer.js";
import type { APIPoll, JSONPoll, PollLayoutTypes, PollResults } from "#types/index.js";
import { Base } from "./Base.js";
import type { Message } from "./Message.js";
import type { PollAnswer } from "./PollAnswer.js";

/**
 * Represents a Discord message poll.
 * @see https://discord.com/developers/docs/resources/poll#poll-object-poll-object-structure
 * @public
 */
export class Poll extends Base {
	/**
	 * Whether the poll allows to select multiple options.
	 */
	readonly allowMultiselect: boolean;
	/**
	 * The answers of the poll.
	 */
	readonly answers: Map<number, PollAnswer>;
	/**
	 * The timestamp at which the poll expires.
	 */
	readonly expiresTimestamp: number;
	/**
	 * The layout type of the poll.
	 */
	readonly layoutType: PollLayoutTypes;
	/**
	 * The {@link Message | `Message`} instance associated with the poll.
	 */
	readonly message: Message;
	/**
	 * The question of the poll.
	 */
	readonly question: string;
	/**
	 * The results of the poll.
	 */
	results!: PollResults | null;

	/**
	 * Creates a new {@link Poll | `Poll`} instance.
	 * @param client - The client that instantiated the poll.
	 * @param data - The {@link APIPoll | `APIPoll`} object.
	 * @param message - The {@link Message | `Message`} instance associated
	 * with the poll.
	 */
	constructor(client: Client, data: APIPoll, message: Message) {
		super(client);

		const { allow_multiselect, answers, expiry, layout_type, question } = data;

		if (!expiry) {
			throw new TypeError(MISSING_REQUIRED_FIELD_FROM_DATA("expiry", "APIPoll"));
		}

		this.allowMultiselect = allow_multiselect;
		this.answers = MessageTransformer.transformPollAnswersMap(answers, client, this);
		this.expiresTimestamp = Date.parse(expiry);
		this.layoutType = layout_type;
		this.message = message;
		this.question = MessageTransformer.transformPollQuestion(question);
		this._patch(data);
	}

	/**
	 * Patches the {@link Poll | `Poll`} instance with the given data.
	 * @param data - The data to use when patching the poll.
	 * @internal
	 */
	protected _patch(data: PollData = {}): void {
		const { results } = data;

		if (results) {
			this.results = MessageTransformer.transformPollResults(results);
		} else {
			this.results ??= null;
		}
	}

	/**
	 * The date at which the poll expires.
	 */
	get expiresAt(): Date {
		const { expiresTimestamp } = this;

		return new Date(expiresTimestamp);
	}

	/**
	 * Expires a poll in a channel.
	 * @returns The {@link Message | `Message`} instance associated with the
	 * poll.
	 * @see https://discord.com/developers/docs/resources/poll#end-poll
	 */
	async expire(): Promise<Message> {
		const { message } = this;
		const { channelId, id: messageId } = message;

		return await super._api.postChannelPollExpire(channelId, messageId);
	}

	/**
	 * Converts the {@link Poll | `Poll`} instance to a JSON object.
	 * @returns The {@link JSONPoll | `JSONPoll`} object.
	 */
	toJSON(): JSONPoll {
		const {
			allowMultiselect,
			answers,
			expiresAt,
			expiresTimestamp,
			layoutType,
			message,
			question,
			results,
		} = this;

		return Object.freeze({
			allowMultiselect,
			answers,
			expiresAt,
			expiresTimestamp,
			layoutType,
			message,
			question,
			results,
		});
	}
}

/**
 * The available data to patch from a {@link Poll | `Poll`} instance.
 * @internal
 */
type PollData = Partial<APIPoll>;

import type { Client } from "#client/Client.js";
import { METHOD_NOT_IMPLEMENTED, MISSING_REQUIRED_FIELDS_FROM_DATA } from "#errors/messages.js";
import type { APIPollAnswer, JSONPollAnswer } from "#types/index.js";
import { Base } from "./base/Base.js";
import type { Poll } from "./Poll.js";

/**
 * TODO: Add `emoji` property and `fetchVoters` method.
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
	 * The poll at which the answer belongs.
	 */
	readonly poll: Poll;
	/**
	 * The text of the answer.
	 */
	readonly text: string;

	constructor(client: Client, data: APIPollAnswer, poll: Poll) {
		super(client);

		const { answer_id, poll_media } = data;
		const { text } = poll_media;

		if (!(answer_id && text)) {
			throw new TypeError(
				MISSING_REQUIRED_FIELDS_FROM_DATA(["answer_id", "poll_media.text"], "poll answer"),
			);
		}

		this.answerId = answer_id;
		this.poll = poll;
		this.text = text;
	}

	/**
	 * Patches the poll answer properties with the given data.
	 *
	 * @internal
	 */
	protected _patch(): void {
		throw new Error(METHOD_NOT_IMPLEMENTED());
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

import type { Client } from "#client/index.js";
import type { APIMessage } from "#types/index.js";
import { Base } from "./Base.js";

/**
 * Represents a Discord message object.
 * @see https://discord.com/developers/docs/resources/message#message-object-message-structure
 */
export class Message extends Base {
	/** The content of the message. */
	content: string;

	constructor(client: Client, data: APIMessage) {
		super(client);

		const { content } = data;

		this.content = content;
	}

	/**
	 * Patches the current {@link Message | `Message`} instance with the given data.
	 * @param data - The updated data to use when patching the current {@link Message | `Message`} instance.
	 */
	protected patch(data: Partial<APIMessage> = {}): void {
		const { content } = data;

		if (content !== undefined) {
			this.content = content;
		}
	}
}

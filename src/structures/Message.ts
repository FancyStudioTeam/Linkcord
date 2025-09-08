import type { Client } from "#client/index.js";
import { parseEmbeds } from "#transformers/Messages.js";
import type { APIMessage, Embed } from "#types/index.js";
import { Base } from "./Base.js";
import { User } from "./User.js";

/**
 * Represents a Discord message object.
 * @see https://discord.com/developers/docs/resources/message#message-object-message-structure
 */
export class Message extends Base {
	/** The author of the message. */
	readonly author: User;
	/** The content of the message. */
	content: string;
	/** The embeds of the message. */
	readonly embeds: Embed[];

	constructor(client: Client, data: APIMessage) {
		super(client);

		const { author, content, embeds } = data;

		this.author = new User(client, author);
		this.content = content;
		this.embeds = parseEmbeds(embeds);
	}

	/**
	 * Patches the current {@link Message | `Message`} instance with the given data.
	 * @param data - The updated data to use when patching the current {@link Message | `Message`} instance.
	 */
	protected patch(data: Partial<APIMessage> = {}): void {
		const { content } = data;

		if (content !== undefined) this.content = content;
	}
}

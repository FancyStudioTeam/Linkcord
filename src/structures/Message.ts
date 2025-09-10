import type { Client } from "#client/index.js";
import { parseEmbeds } from "#transformers/Messages.js";
import type { APIMessage, Embed, Snowflake } from "#types/index.js";
import { Base } from "./Base.js";
import { User } from "./User.js";

/**
 * Represents a Discord message object.
 * @see https://discord.com/developers/docs/resources/message#message-object-message-structure
 *
 * @group Structures/Classes
 */
export class Message extends Base {
	/** The author of the message. */
	readonly author: User;
	/** The ID of the channel where the message was created. */
	readonly channelId: Snowflake;
	/** The content of the message. */
	content: string;
	/** The embeds of the message. */
	readonly embeds: Embed[];

	/**
	 * Creates a new {@link Message | `Message`} instance.
	 * @param client - The client that instantiated the {@link Message | `Message`} instance.
	 * @param data - The {@link APIMessage | `APIMessage`} object from the Discord API.
	 */
	constructor(client: Client, data: APIMessage) {
		super(client);

		const { author, channel_id: channelId, content, embeds } = data;

		this.author = new User(client, author);
		this.channelId = channelId;
		this.content = content;
		this.embeds = parseEmbeds(embeds);
	}

	/**
	 * Patches the current {@link Message | `Message`} instance with the given data.
	 * @param data - The updated data for the current {@link Message | `Message`} instance.
	 */
	protected patch(data: Partial<APIMessage> = {}): void {
		const { content } = data;

		if (content !== undefined) this.content = content;
	}
}

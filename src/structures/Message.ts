import type { Client } from "#client/index.js";
import { parseEmbeds } from "#transformers/Messages.js";
import type { APIMessage, Embed, Snowflake } from "#types/index.js";
import { isUndefined } from "#utils/helpers/AssertionUtils.js";
import { FormatterUtils } from "#utils/index.js";
import { Base } from "./Base.js";

const { messageLink } = FormatterUtils;

/**
 * @see https://discord.com/developers/docs/resources/message#message-object-message-structure
 */
export class Message extends Base {
	/** The ID of the channel where the message was sent. */
	readonly channelId: Snowflake;
	/** The ID of the message. */
	readonly id: Snowflake;

	/** The content of the message. */
	content: string;
	/** The embeds of the message. */
	embeds: Embed[];

	constructor(client: Client, data: APIMessage) {
		super(client);

		const { channel_id, content, embeds, id } = data;

		this.channelId = channel_id;
		this.content = content;
		this.embeds = parseEmbeds(embeds);
		this.id = id;
	}

	/** The formatted link to the message. */
	get messageLink() {
		return messageLink(this.channelId, this.id);
	}

	protected patch(data?: Partial<APIMessage>): void {
		const { content, embeds } = data ?? {};

		if (!isUndefined(content)) {
			this.content = content;
		}

		if (!isUndefined(embeds)) {
			this.embeds = parseEmbeds(embeds);
		}
	}
}

import type { Client } from "#client/index.js";
import type { APIMessage, Snowflake } from "#types/index.js";
import { AssertionUtils } from "#utils/helpers/AssertionUtils.js";
import { FormatterUtils } from "#utils/index.js";
import { Base } from "./Base.js";

const { isUndefined } = AssertionUtils;
const { messageLink } = FormatterUtils;

/**
 * @see https://discord.com/developers/docs/resources/message#message-object-message-structure
 */
export class Message extends Base {
	/** The ID of the channel where the message was sent. */
	readonly channelId: Snowflake;
	/** The content of the message. */
	content: string;
	/** The ID of the message. */
	readonly id: Snowflake;

	constructor(client: Client, data: APIMessage) {
		super(client);

		const { channel_id: channelId, content, id } = data;

		this.channelId = channelId;
		this.content = content;
		this.id = id;
	}

	get messageLink() {
		return messageLink(this.channelId, this.id);
	}

	protected patch(data: Partial<APIMessage> = {}): void {
		const { content } = data;

		if (!isUndefined(content)) {
			this.content = content;
		}
	}
}

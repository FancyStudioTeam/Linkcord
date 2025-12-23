import type { Client } from "#client/index.js";
import { deserializeMessageComponentsArray } from "#transformers/Components/Deserializer.js";
import { deserializeEmbedsArray } from "#transformers/Messages/Deserializer.js";
import type { APIMessage, Embed, MessageComponents, Snowflake } from "#types/index.js";
import { isUndefined } from "#utils/helpers/AssertionUtils.js";
import { messageLink } from "#utils/index.js";
import { Base } from "./Base.js";

/**
 * @see https://discord.com/developers/docs/resources/message#message-object-message-structure
 */
export class Message extends Base {
	/** The ID of the channel where the message was sent. */
	readonly channelId: Snowflake;
	/** The ID of the message. */
	readonly id: Snowflake;

	/** The components of the message. */
	components: MessageComponents[];
	/** The content of the message. */
	content: string;
	/** The embeds of the message. */
	embeds: Embed[];

	constructor(client: Client, data: APIMessage) {
		super(client);

		const { channel_id, components, content, embeds, id } = data;

		this.channelId = channel_id;
		this.components = deserializeMessageComponentsArray(components);
		this.content = content;
		this.embeds = deserializeEmbedsArray(embeds);
		this.id = id;
	}

	/** The formatted link to the message. */
	get messageLink() {
		return messageLink(this.channelId, this.id);
	}

	protected patch(data?: Partial<APIMessage>): void {
		const { components, content, embeds } = data ?? {};

		if (!isUndefined(components)) this.components = deserializeMessageComponentsArray(components);
		if (!isUndefined(content)) this.content = content;
		if (!isUndefined(embeds)) this.embeds = deserializeEmbedsArray(embeds);
	}
}

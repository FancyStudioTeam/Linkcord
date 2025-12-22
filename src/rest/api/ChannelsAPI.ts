import { CHANNEL_MESSAGES_ENDPOINT } from "#rest/endpoints/Endpoints.js";
import { Message } from "#structures/Message.js";
import { serializeCreateMessageOptions } from "#transformers/Messages.js";
import type { CreateMessageOptions, RESTPostAPIMessage, Snowflake } from "#types/index.js";
import { BaseAPI } from "./BaseAPI.js";

export class ChannelsAPI extends BaseAPI {
	/**
	 * @see https://discord.com/developers/docs/resources/message#create-message
	 */
	async createMessage(channelId: Snowflake, options: CreateMessageOptions): Promise<Message> {
		const { client } = this;
		const serializedOptions = serializeCreateMessageOptions(options);

		const messageResponseData = await super.post<RESTPostAPIMessage>(CHANNEL_MESSAGES_ENDPOINT(channelId), {
			body: JSON.stringify(serializedOptions),
		});
		const messageData = new Message(client, messageResponseData);

		return messageData;
	}
}

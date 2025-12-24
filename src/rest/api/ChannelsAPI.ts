import { CHANNEL_MESSAGES_ENDPOINT } from "#rest/endpoints/Endpoints.js";
import { RESTMethod } from "#rest/structures/RESTManager.types.js";
import { Message } from "#structures/Message.js";
import type { CreateMessageOptions, RESTPostAPIMessage, Snowflake } from "#types/index.js";
import { BaseAPI } from "./BaseAPI.js";

export class ChannelsAPI extends BaseAPI {
	/**
	 * @see https://discord.com/developers/docs/resources/message#create-message
	 */
	async createMessage(channelId: Snowflake, options: CreateMessageOptions): Promise<Message> {
		const { client, rest } = this;

		const messageResponseData = await rest.makeRequest<RESTPostAPIMessage>(CHANNEL_MESSAGES_ENDPOINT(channelId), {
			body: JSON.stringify({
				content: options.content,
			}),
			method: RESTMethod.Post,
		});
		const messageData = new Message(client, messageResponseData);

		return messageData;
	}
}

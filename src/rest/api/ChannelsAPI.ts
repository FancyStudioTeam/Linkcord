import { Endpoints } from "#rest/endpoints/Endpoints.js";
import { Message } from "#structures/Message.js";
import { normalizeEmbeds, serializeEmbeds } from "#transformers/Messages.js";
import type {
	CreateMessageOptions,
	RESTPostAPIMessage,
	RESTPostAPIMessageJSONParams,
	Snowflake,
} from "#types/index.js";
import { BaseAPI } from "./BaseAPI.js";

/** API class that handles all request related to `/channels` endpoints. */
export class ChannelsAPI extends BaseAPI {
	/**
	 * Performs a {@link RESTPostAPIMessage | `POST /channels/(channel.id)/messages`} request to the Discord API.
	 * @param channelId - The ID of the channel where the message will be created.
	 * @param options - The options to use when creating the message.
	 * @returns The created {@link Message | `Message`} instance.
	 * @see https://discord.com/developers/docs/resources/message#create-message
	 */
	async createMessage(channelId: Snowflake, options: CreateMessageOptions): Promise<Message> {
		const { content, embeds } = options ?? {};
		const json: RESTPostAPIMessageJSONParams = {};

		if (content) {
			json.content = content;
		}

		if (embeds) {
			const normalizedEmbeds = normalizeEmbeds(embeds);
			const serializedEmbeds = serializeEmbeds(normalizedEmbeds);

			json.embeds = serializedEmbeds;
		}

		const messageResponseData = await super.post<RESTPostAPIMessage, RESTPostAPIMessageJSONParams>(
			Endpoints.channelMessages(channelId),
			{
				json,
			},
		);
		const messageData = new Message(super.client, messageResponseData);

		return messageData;
	}
}

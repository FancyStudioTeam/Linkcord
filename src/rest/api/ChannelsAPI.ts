import { CHANNEL_MESSAGES_ENDPOINT } from "#rest/endpoints/Endpoints.js";
import { Message } from "#structures/Message.js";
import { normalizeEmbeds, serializeEmbeds } from "#transformers/Messages.js";
import type {
	CreateMessageOptions,
	RESTPostAPIMessage,
	RESTPostAPIMessageJSONParams,
	Snowflake,
} from "#types/index.js";
import { BaseAPI } from "./BaseAPI.js";

export class ChannelsAPI extends BaseAPI {
	/**
	 * @see https://discord.com/developers/docs/resources/message#create-message
	 */
	async createMessage(channelId: Snowflake, options: CreateMessageOptions): Promise<Message> {
		const { content, embeds, nonce, tts } = options;
		const { client } = this;

		const body: RESTPostAPIMessageJSONParams = {};

		if (content) body.content = content;

		if (embeds) {
			const normalizedEmbeds = normalizeEmbeds(embeds);
			const serializedEmbeds = serializeEmbeds(normalizedEmbeds);

			body.embeds = serializedEmbeds;
		}

		if (nonce) body.nonce = nonce;
		if (tts) body.tts = tts;

		const messageResponseData = await super.post<RESTPostAPIMessage>(CHANNEL_MESSAGES_ENDPOINT(channelId), {
			body: JSON.stringify(body),
		});
		const messageData = new Message(client, messageResponseData);

		return messageData;
	}
}

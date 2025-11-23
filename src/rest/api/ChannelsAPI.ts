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

const { channelMessages } = Endpoints;

export class ChannelsAPI extends BaseAPI {
	/**
	 * @see https://discord.com/developers/docs/resources/message#create-message
	 */
	async createMessage(channelId: Snowflake, options: CreateMessageOptions): Promise<Message> {
		const { content, embeds, nonce, tts } = options ?? {};
		const json: RESTPostAPIMessageJSONParams = {};

		if (content) json.content = content;

		if (embeds) {
			const normalizedEmbeds = normalizeEmbeds(embeds);
			const serializedEmbeds = serializeEmbeds(normalizedEmbeds);

			json.embeds = serializedEmbeds;
		}

		if (nonce) json.nonce = nonce;
		if (tts) json.tts = tts;

		const messageResponseData = await super.post<RESTPostAPIMessage, RESTPostAPIMessageJSONParams>(
			channelMessages(channelId),
			{
				json,
			},
		);
		const messageData = new Message(super.client, messageResponseData);

		return messageData;
	}
}

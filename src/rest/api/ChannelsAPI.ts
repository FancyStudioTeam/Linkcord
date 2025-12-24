import { CHANNEL_MESSAGES_ENDPOINT } from "#rest/endpoints/Endpoints.js";
import { type File, type MakeRequestOptions, RESTContentType, RESTMethod } from "#rest/structures/RESTManager.types.js";
import { Message } from "#structures/Message.js";
import { serializeCreateMessageOptions } from "#transformers/Messages/REST.js";
import type {
	APIPartialAttachent,
	CreateMessageOptions,
	RESTPostAPIMessage,
	RESTPostAPIMessageJSONParams,
	Snowflake,
} from "#types/index.js";
import { BaseAPI } from "./BaseAPI.js";

export class ChannelsAPI extends BaseAPI {
	#appendToForm(options: RESTPostAPIMessageJSONParams, files: File[]): FormData {
		const form = new FormData();

		const { length: filesLength } = files;
		const attachments: APIPartialAttachent[] = [];

		for (let index = 0; index < filesLength; index++) {
			const file = files[index];
			const { data, name } = file;

			const blob = new Blob([
				data,
			]);

			form.append(`files[${index}]`, blob, name);
			attachments.push({
				filename: name,
				// @ts-expect-error
				id: index,
			});
		}

		form.append(
			"payload_json",
			JSON.stringify({
				...options,
				attachments,
			}),
		);

		return form;
	}

	/**
	 * @see https://discord.com/developers/docs/resources/message#create-message
	 */
	async createMessage(channelId: Snowflake, options: CreateMessageOptions): Promise<Message> {
		const { client, rest } = this;

		const { files } = options;
		const { length: filesLength } = files ?? [];

		const serializedOptions = serializeCreateMessageOptions(options);

		const requestOptions: MakeRequestOptions = {
			method: RESTMethod.Post,
		};

		if (files && filesLength) {
			const form = this.#appendToForm(serializedOptions, files);

			requestOptions.body = form;
			requestOptions.contentType = RESTContentType.MultipartFormData;
		} else {
			requestOptions.body = JSON.stringify(serializeCreateMessageOptions);
			requestOptions.contentType = RESTContentType.ApplicationJSON;
		}

		const messageResponseData = await rest.makeRequest<RESTPostAPIMessage>(CHANNEL_MESSAGES_ENDPOINT(channelId), requestOptions);
		const messageData = new Message(client, messageResponseData);

		return messageData;
	}
}

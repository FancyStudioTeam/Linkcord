import { CHANNEL_MESSAGES_ENDPOINT } from '#rest/endpoints/Endpoints.js';
import { type File, type MakeRequestOptions, RESTMethod } from '#rest/structures/RESTManager.types.js';
import { Message } from '#structures/Message.js';
import { serializeCreateMessageOptions } from '#transformers/Messages/REST.js';
import type { CreateMessageOptions, RESTPostAPIMessage, RESTPostAPIMessageJSONParams, Snowflake } from '#types/index.js';
import { BaseAPI } from './BaseAPI.js';

export class ChannelsAPI extends BaseAPI {
	/**
	 * @see https://discord.com/developers/docs/reference#uploading-files
	 */
	#appendToForm(options: RESTPostAPIMessageJSONParams, files: File[]): FormData {
		const formData = new FormData();

		let fileIndex = 0;

		for (const file of files) {
			fileIndex++;

			const { data, name } = file;
			const blob = new Blob([
				data,
			]);

			formData.append(`files[${fileIndex}]`, blob, name);

			options.attachments ??= [];
			options.attachments.push({
				filename: name,
				// @ts-expect-error
				id: fileIndex,
			});
		}

		formData.append('payload_json', JSON.stringify(options));

		return formData;
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
			body: files && filesLength ? this.#appendToForm(serializedOptions, files) : JSON.stringify(serializedOptions),
			method: RESTMethod.Post,
		};

		const messageResponseData = await rest.makeRequest<RESTPostAPIMessage>(CHANNEL_MESSAGES_ENDPOINT(channelId), requestOptions);
		const messageData = new Message(client, messageResponseData);

		return messageData;
	}
}

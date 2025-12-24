import { serializeMessageComponentsArray } from "#transformers/Components/Serializer.js";
import type { CreateMessageOptions, RESTPostAPIMessageJSONParams } from "#types/index.js";
import { serializeEmbedsArray } from "./Serializer.js";

/**
 * @see https://discord.com/developers/docs/resources/message#create-message-jsonform-params
 */
export function serializeCreateMessageOptions(options: CreateMessageOptions): RESTPostAPIMessageJSONParams {
	const { components, content, embeds, nonce, tts } = options;
	const rawOptions: RESTPostAPIMessageJSONParams = {};

	if (components) {
		rawOptions.components = serializeMessageComponentsArray(components);
	}

	if (content) {
		rawOptions.content = content;
	}

	if (embeds) {
		rawOptions.embeds = serializeEmbedsArray(embeds);
	}

	if (nonce) {
		rawOptions.nonce = nonce;
	}

	if (tts) {
		rawOptions.tts = tts;
	}

	return rawOptions;
}

import { serializeMessageComponentsArray } from '#transformers/Components/Serializer.js';
import { normalizeMessageFlags } from '#transformers/Messages/Normalizer.js';
import { serializeEmbedsArray } from '#transformers/Messages/Serializer.js';
import {
	type CreateInteractionResponseOptions,
	type CreateMessageInteractionResponseOptions,
	InteractionCallbackType,
	type RawCreateInteractionResponseOptions,
	type RawCreateMessageInteractionResponseOptions,
} from '#types/index.js';
import { isUndefined } from '#utils/helpers/AssertionUtils.js';

export function serializeCreateInteractionResponseOptions(
	createInteractionResponseOptions: CreateInteractionResponseOptions,
): RawCreateInteractionResponseOptions {
	const { type } = createInteractionResponseOptions;

	switch (type) {
		case InteractionCallbackType.ApplicationCommandAutocompleteResult:
		case InteractionCallbackType.LaunchActivity:
		case InteractionCallbackType.Modal:
		case InteractionCallbackType.Pong:
			throw new Error('Interaction callback type not handled');
		default:
			return serializeCreateMessageInteractionResponseOptions(createInteractionResponseOptions);
	}
}

export function serializeCreateMessageInteractionResponseOptions(
	createMessageInteractionResponseOptions: CreateMessageInteractionResponseOptions,
): RawCreateMessageInteractionResponseOptions {
	const { data, type } = createMessageInteractionResponseOptions;
	const { components, content, embeds, flags, tts } = data;
	const rawCreateMessageInteractionResponseOptions: RawCreateMessageInteractionResponseOptions = {
		data: {},
		type,
	};

	if (!isUndefined(components)) {
		rawCreateMessageInteractionResponseOptions.data.components = serializeMessageComponentsArray(components);
	}

	if (!isUndefined(content)) {
		rawCreateMessageInteractionResponseOptions.data.content = content;
	}

	if (!isUndefined(embeds)) {
		rawCreateMessageInteractionResponseOptions.data.embeds = serializeEmbedsArray(embeds);
	}

	if (!isUndefined(flags)) {
		rawCreateMessageInteractionResponseOptions.data.flags = normalizeMessageFlags(flags);
	}

	if (!isUndefined(tts)) {
		rawCreateMessageInteractionResponseOptions.data.tts = tts;
	}

	return rawCreateMessageInteractionResponseOptions;
}

import type { CreateMessageOptions, RawCreateMessageOptions } from '#types/index.js';
import { normalizeMessageComponentsArray, normalizeMessageFlags, normalizeMessageStickersArray } from './Normalizer.js';
import { serializeEmbedsArray } from './Serializer.js';

/**
 * @see https://discord.com/developers/docs/resources/message#create-message-jsonform-params
 */
export function serializeCreateMessageOptions(createMessageOptions: CreateMessageOptions): RawCreateMessageOptions {
	const { components, content, embeds, enforceNonce, flags, nonce, stickers, tts } = createMessageOptions;
	const rawCreateMessageOptions: RawCreateMessageOptions = {};

	if (components) {
		rawCreateMessageOptions.components = normalizeMessageComponentsArray(components);
	}

	if (content) {
		rawCreateMessageOptions.content = content;
	}

	if (embeds) {
		rawCreateMessageOptions.embeds = serializeEmbedsArray(embeds);
	}

	if (enforceNonce) {
		rawCreateMessageOptions.enforce_nonce = enforceNonce;
	}

	if (flags) {
		rawCreateMessageOptions.flags = normalizeMessageFlags(flags);
	}

	if (nonce) {
		rawCreateMessageOptions.nonce = nonce;
	}

	if (stickers) {
		rawCreateMessageOptions.sticker_ids = normalizeMessageStickersArray(stickers);
	}

	if (tts) {
		rawCreateMessageOptions.tts = tts;
	}

	return rawCreateMessageOptions;
}

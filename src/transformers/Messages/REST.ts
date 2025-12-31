import { serializeMessageComponentsArray } from '#transformers/Components/Serializer.js';
import type {
	CreateMessageOptions,
	MessageFlagsResolvable,
	MessageStickerResolvable,
	RESTPostAPIMessageJSONParams,
	Snowflake,
} from '#types/index.js';
import { isArray, isInstanceOf } from '#utils/helpers/AssertionUtils.js';
import { BitField } from '#utils/index.js';
import { serializeEmbedsArray } from './Serializer.js';

export function normalizeMessageFlags(messageFlags: MessageFlagsResolvable): number {
	if (isInstanceOf(messageFlags, BitField)) {
		return messageFlags.bitField;
	}

	if (isArray(messageFlags)) {
		return new BitField().add(...messageFlags);
	}

	return messageFlags;
}

export function normalizeMessageSticker(messageSticker: MessageStickerResolvable): Snowflake {
	return messageSticker;
}

export function normalizeMessageStickersArray(messageStickersArray: MessageStickerResolvable[]): Snowflake[] {
	return messageStickersArray.map(normalizeMessageSticker);
}

/**
 * @see https://discord.com/developers/docs/resources/message#create-message-jsonform-params
 */
export function serializeCreateMessageOptions(options: CreateMessageOptions): RESTPostAPIMessageJSONParams {
	const { components, content, embeds, enforceNonce, flags, nonce, stickers, tts } = options;
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

	if (enforceNonce) {
		rawOptions.enforce_nonce = enforceNonce;
	}

	if (flags) {
		rawOptions.flags = normalizeMessageFlags(flags);
	}

	if (nonce) {
		rawOptions.nonce = nonce;
	}

	if (stickers) {
		rawOptions.sticker_ids = normalizeMessageStickersArray(stickers);
	}

	if (tts) {
		rawOptions.tts = tts;
	}

	return rawOptions;
}

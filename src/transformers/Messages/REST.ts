import { serializeMessageComponentsArray } from "#transformers/Components/Serializer.js";
import type {
	CreateMessageOptions,
	MessageFlagsResolvable,
	RESTPostAPIMessageJSONParams,
	Snowflake,
	StickerResolvable,
} from "#types/index.js";
import { isArray } from "#utils/helpers/AssertionUtils.js";
import { BitFieldResolver } from "#utils/index.js";
import { serializeEmbedsArray } from "./Serializer.js";

export function normalizeMessageFlags(messageFlags: MessageFlagsResolvable): number {
	if (isArray(messageFlags)) {
		return new BitFieldResolver().add(...messageFlags);
	}

	return messageFlags;
}

export function normalizeStickers(stickers: StickerResolvable[]): Snowflake[] {
	return stickers;
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
		rawOptions.sticker_ids = normalizeStickers(stickers);
	}

	if (tts) {
		rawOptions.tts = tts;
	}

	return rawOptions;
}

import { BuilderBase } from '#builders/index.js';
import { serializeMessageComponents } from '#transformers/Components/Serializer.js';
import type {
	MessageComponentResolvable,
	MessageFlagsResolvable,
	MessageStickerResolvable,
	RawMessageComponents,
	Snowflake,
} from '#types/index.js';
import { isArray, isInstanceOf } from '#utils/helpers/AssertionUtils.js';
import { BitField } from '#utils/index.js';

export function normalizeMessageComponent(messageComponents: MessageComponentResolvable): RawMessageComponents {
	if (isInstanceOf(messageComponents, BuilderBase)) {
		return serializeMessageComponents(messageComponents.toJSON());
	}

	return serializeMessageComponents(messageComponents);
}

export function normalizeMessageComponentsArray(messageComponentsArray: MessageComponentResolvable[]): RawMessageComponents[] {
	return messageComponentsArray.map(normalizeMessageComponent);
}

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

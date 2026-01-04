import type { MessageFlagsResolvable, MessageStickerResolvable, Snowflake } from '#types/index.js';
import { isArray, isInstanceOf } from '#utils/helpers/AssertionUtils.js';
import { BitField } from '#utils/index.js';

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

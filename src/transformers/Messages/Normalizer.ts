import { BuilderBase } from '#builders/index.js';
import { serializeMessageChildComponent } from '#transformers/Components/Serializer.js';
import type {
	MessageChildComponent,
	MessageComponentResolvable,
	MessageFlagsResolvable,
	MessageStickerResolvable,
	RawMessageChildComponent,
	Snowflake,
} from '#types/index.js';
import { isArray, isInstanceOf } from '#utils/helpers/AssertionUtils.js';
import { BitField } from '#utils/index.js';

export function normalizeMessageComponentResolvable(messageComponentResolvable: MessageComponentResolvable): RawMessageChildComponent {
	let result: MessageChildComponent;

	if (isInstanceOf(messageComponentResolvable, BuilderBase)) {
		result = messageComponentResolvable.toJSON();
	} else {
		result = messageComponentResolvable;
	}

	return serializeMessageChildComponent(result);
}

export function normalizeMessageComponentsResolvableArray(
	messageComponentsResolvableArray: MessageComponentResolvable[],
): RawMessageChildComponent[] {
	return messageComponentsResolvableArray.map(normalizeMessageComponentResolvable);
}

export function normalizeMessageFlagsResolvable(messageFlagsResolvable: MessageFlagsResolvable): number {
	let result: number;

	if (isInstanceOf(messageFlagsResolvable, BitField)) {
		result = messageFlagsResolvable.bitField;
	} else if (isArray(messageFlagsResolvable)) {
		result = new BitField().add(...messageFlagsResolvable);
	} else {
		result = messageFlagsResolvable;
	}

	return result;
}

export function normalizeMessageStickerResolvable(messageStickerResolvable: MessageStickerResolvable): Snowflake {
	return messageStickerResolvable;
}

export function normalizeMessageStickersResolvableArray(messageStickersResolvableArray: MessageStickerResolvable[]): Snowflake[] {
	return messageStickersResolvableArray.map(normalizeMessageStickerResolvable);
}

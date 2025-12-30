import type { PartialEmoji, RawPartialEmoji } from '#types/index.js';
import { isUndefined } from '#utils/helpers/AssertionUtils.js';

/**
 * @see https://discord.com/developers/docs/resources/emoji#emoji-object-emoji-structure
 */
export function serializePartialEmoji(partialEmoji: PartialEmoji): RawPartialEmoji {
	const { animated, id, name } = partialEmoji;
	const rawPartialEmoji: RawPartialEmoji = {};

	if (!isUndefined(animated)) {
		rawPartialEmoji.animated = animated;
	}

	if (!isUndefined(id)) {
		rawPartialEmoji.id = id;
	}

	if (!isUndefined(name)) {
		rawPartialEmoji.name = name;
	}

	return rawPartialEmoji;
}

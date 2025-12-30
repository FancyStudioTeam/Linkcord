import type { PartialEmoji, RawPartialEmoji } from '#types/index.js';
import { isUndefined } from '#utils/helpers/AssertionUtils.js';

/**
 * @see https://discord.com/developers/docs/resources/emoji#emoji-object-emoji-structure
 */
export function deserializePartialEmoji(rawPartialEmoji: RawPartialEmoji): PartialEmoji {
	const { animated, id, name } = rawPartialEmoji;
	const partialEmoji: PartialEmoji = {};

	if (!isUndefined(animated)) {
		partialEmoji.animated = animated;
	}

	if (!isUndefined(id)) {
		partialEmoji.id = id;
	}

	if (!isUndefined(name)) {
		partialEmoji.name = name;
	}

	return partialEmoji;
}

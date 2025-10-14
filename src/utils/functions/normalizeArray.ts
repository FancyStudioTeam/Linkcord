import type { RestOrArray } from "#utils/types/Util.js";

/**
 * Normalizes either a rest parameter or an array of items.
 *
 * @param items - The items to normalize.
 * @returns The normalized array of items.
 *
 * @typeParam Item - The inferred type from the `items` parameter.
 * @group Builders/Functions
 */
export function normalizeArray<Item>(...items: RestOrArray<Item>): Item[] {
	const firstElement = items[0];

	if (Array.isArray(firstElement)) {
		return Array.from(firstElement);
	}

	return items as Item[];
}

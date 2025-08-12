import type { RestOrArray } from "#builders/types/Common.js";

/**
 * Normalizes either a rest parameter or an array of items.
 * @param items - The items to normalize.
 * @returns The normalized array of items.
 */
export function normalizeArray<Item>(...items: RestOrArray<Item>): Item[] {
	const firstElement = items[0];

	if (Array.isArray(firstElement)) {
		return [...firstElement];
	}

	return items as Item[];
}

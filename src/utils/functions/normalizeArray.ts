/**
 * Normalizes a rest parameter or an array of items.
 *
 * @param items - The items to normalize.
 * @returns A new array containing the normalized items.
 *
 * @typeParam Item - The inferred type from the `items` parameter.
 *
 * @group Utils/Functions
 */
export function normalizeArray<Item>(...items: Item[]): Item[] {
	const firstElement = items[0];

	return Array.isArray(firstElement) ? [...firstElement] : items;
}

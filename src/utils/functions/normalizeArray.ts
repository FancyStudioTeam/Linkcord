/**
 * Normalizes a rest parameter or an array of items.
 *
 * @param items - The array of items to normalize.
 * @returns A new array containing the normalized items.
 *
 * @typeParam Item - The inferred type from the `items` parameter.
 */
export function normalizeArray<Item>(items: Item[]): Item[];

/**
 * Normalizes a rest parameter or an array of items.
 *
 * @param items - The rest parameter of items to normalize.
 * @returns A new array containing the normalized items.
 *
 * @typeParam Item - The inferred type from the `items` parameter.
 */
export function normalizeArray<Item>(...items: Item[]): Flatten<Item>[];

export function normalizeArray<Item>(...items: Item[]): Item[] {
	const firstElement = items[0];

	return Array.isArray(firstElement) ? [...firstElement] : items;
}

/**
 * Represents an array of items that is flattened.
 *
 * @typeParam Item - The shape of the item in the array.
 */
type Flatten<Item> = Item extends (infer ItemArray)[] ? ItemArray : Item;

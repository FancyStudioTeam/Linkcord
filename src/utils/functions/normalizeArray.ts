export function normalizeArray<Item>(items: Item[]): Item[];
export function normalizeArray<Item>(...items: Item[]): Flatten<Item>[];
export function normalizeArray<Item>(...items: Item[]): Item[] {
	const firstElement = items[0];

	return Array.isArray(firstElement) ? [...firstElement] : items;
}

type Flatten<Item> = Item extends (infer ItemArray)[] ? ItemArray : Item;

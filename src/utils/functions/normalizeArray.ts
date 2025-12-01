import type { RestOrArray } from "#utils/types/index.js";

export function normalizeArray<Item>(...items: RestOrArray<Item>): Item[] {
	return items.flat() as Item[];
}

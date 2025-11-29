import type { Iterable } from "#client/types/index.js";

export class CacheManager<Key, Value> {
	readonly #cache: Map<Key, Value>;
	readonly #limit: number;

	constructor(limit = Infinity, initialCachedValues: Iterable<Key, Value> = []) {
		this.#cache = new Map(initialCachedValues);
		this.#limit = limit;
	}

	get #isCacheLimitExceeded(): boolean {
		const cache = this.#cache;
		const limit = this.#limit;

		const { size: cacheSize } = cache;
		const isCacheLimitExceeded = cacheSize >= limit;

		return isCacheLimitExceeded;
	}

	get size(): number {
		const cache = this.#cache;
		const { size } = cache;

		return size;
	}

	#deleteOldestValue(): boolean {
		const cache = this.#cache;
		const cacheEntries = cache.entries();
		const [firstCachedValueKey] = cacheEntries.next().value ?? [];

		if (firstCachedValueKey) {
			return cache.delete(firstCachedValueKey);
		}

		return false;
	}

	add(key: Key, value: Value): boolean {
		if (this.#isCacheLimitExceeded) {
			this.#deleteOldestValue();
		}

		return this.set(key, value);
	}

	delete(key: Key): boolean {
		const cache = this.#cache;

		return cache.delete(key);
	}

	get(key: Key): Value | undefined {
		const cache = this.#cache;
		const cachedValue = cache.get(key);

		return cachedValue;
	}

	set(key: Key, value: Value): boolean {
		const cache = this.#cache;
		const limit = this.#limit;

		if (this.#isCacheLimitExceeded) {
			throw new Error(`Cache exceeded the limit of ${limit} cached entries`);
		}

		cache.set(key, value);

		return true;
	}
}

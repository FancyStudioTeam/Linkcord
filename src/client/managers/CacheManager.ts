/** biome-ignore-all lint/suspicious/useAwait: Caching methods are kept asynchronous for future compatibility. */

import type { Iterable } from "#client/types/index.js";

/** The cache manager for the client. */
export class CacheManager<Key extends string, Value> {
	/** The map where the cached values are stored. */
	readonly #cache: Map<Key, Value>;
	/** The maximum number of cached values allowed. */
	readonly #limit: number;

	/**
	 * Creates a new {@link CacheManager | `CacheManager`} instance.
	 * @param limit - The maximum number of cached values allowed.
	 * @param initialCachedValues - The initial values to cache when instantiating the cache manager.
	 */
	constructor(limit = Infinity, initialCachedValues: Iterable<Key, Value> = []) {
		this.#cache = new Map(initialCachedValues);
		this.#limit = limit;
	}

	/** The number of cached values. */
	get size(): number {
		const cache = this.#cache;
		const { size } = cache;

		return size;
	}

	/**
	 * Adds a value to the cache.
	 * @param key - The key of the value to add.
	 * @param value - The value to add.
	 */
	async add(key: Key, value: Value): Promise<void> {
		const cache = this.#cache;
		const limit = this.#limit;

		const { size: cacheSize } = cache;

		// If the cache is full, remove the oldest value.
		if (cacheSize >= limit) {
			const entries = cache.entries();
			const [firstCachedValueKey] = entries.next().value ?? [];

			if (firstCachedValueKey) {
				cache.delete(firstCachedValueKey);
			}
		}

		cache.set(key, value);
	}

	/**
	 * Deletes a value from the cache.
	 * @param key - The key of the value to remove.
	 * @returns Whether the cached value was deleted.
	 */
	async delete(key: Key): Promise<boolean> {
		const cache = this.#cache;

		return cache.delete(key);
	}

	/**
	 * Gets a value from the cache.
	 * @param key - The key of the cached value to get.
	 * @returns The cached value, if exists.
	 */
	async get(key: Key): Promise<Value | undefined> {
		const cache = this.#cache;
		const cachedValue = cache.get(key);

		return cachedValue;
	}
}

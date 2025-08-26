/** biome-ignore-all lint/suspicious/useAwait: Caching methods are kept asynchronous for future compatibility. */

import type { Iterable } from "#client/types/index.js";
import type { Base } from "#structures/index.js";

/** The cache manager for the client. */
export class CacheManager<Key extends string, Value extends Base> {
	/** The map where the cached values are stored. */
	readonly #cache: Map<Key, Value>;
	/** The maximum number of cached values allowed in the cache manager. */
	readonly #limit: number;

	/**
	 * Creates a new {@link CacheManager | `CacheManager`} instance.
	 * @param limit - The maximum number of cached values allowed in the cache manager.
	 * @param initialCachedValues - The initial values to cache when instantiating the cache manager.
	 */
	constructor(limit = Infinity, initialCachedValues: Iterable<Key, Value> = []) {
		this.#cache = new Map(initialCachedValues);
		this.#limit = limit;
	}

	/**
	 * Adds a value to the cache.
	 * @param key - The key of the value to add.
	 * @param value - The value to add.
	 */
	protected __add__(key: Key, value: Value): void {
		const cache = this.#cache;
		const limit = this.#limit;

		const { size: cacheSize } = cache;

		// If the cache is full, remove the oldest value and add the new one.
		// TODO: Test if oldest values are removed when the cache is full.
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
	 * Patches the data of a cached value with the given data, if exists.
	 * @param key - The key of the cached value to patch.
	 * @param data - The data to use to patch the cached value.
	 */
	protected __patch__(key: Key, data: unknown): void {
		const cache = this.#cache;
		const existing = cache.get(key);

		if (existing) {
			// biome-ignore lint/complexity/useLiteralKeys: Private method.
			existing["__patch__"](data);
		}
	}

	/**
	 * Removes a value from the cache, if exists.
	 * @param key - The key of the value to remove.
	 * @returns Whether the value has been removed.
	 */
	protected __remove__(key: Key): boolean {
		const cache = this.#cache;

		return cache.delete(key);
	}

	/** Gets the number of cached values in the cache manager. */
	get size(): number {
		const cache = this.#cache;
		const { size: cacheSize } = cache;

		return cacheSize;
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

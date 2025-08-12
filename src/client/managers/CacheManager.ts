/*
 * biome-ignore-all lint/correctness/noUnusedPrivateClassMembers: Biome uses
 * "this" to check if these private members are being used, but we are
 * destructuring them from "this".
 */

import type { Iterable } from "#client/types/index.js";
import type { Base } from "#structures/index.js";
import type { Snowflake } from "#types/index.js";

/**
 * The cache manager for the client.
 * @group Client/Managers
 * @public
 */
export class CacheManager<Key extends string, Value extends Base> {
	/** The maximum number of cached values allowed in the cache manager. */
	private readonly __limit__: number;

	/** The map where the cached values are stored. */
	readonly cache: Map<Snowflake, Value>;

	/**
	 * Creates a new {@link CacheManager | `CacheManager`} instance.
	 * @param limit - The maximum number of cached values allowed in the cache
	 * 	manager.
	 * @param initialCachedValues - The initial values to cache when
	 * 	instantiating the cache manager.
	 */
	constructor(limit = Infinity, initialCachedValues: Iterable<Key, Value> = []) {
		this.__limit__ = limit;
		this.cache = new Map(initialCachedValues);
	}

	/**
	 * Adds a value to the cache.
	 * @param key - The key of the value to add.
	 * @param value - The value to add.
	 */
	private __add__(key: Snowflake, value: Value): void {
		const { __limit__: limit, cache } = this;
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
	private __patch__(key: Snowflake, data: unknown): void {
		const { cache } = this;
		const existing = cache.get(key);

		if (existing) {
			// biome-ignore lint/complexity/useLiteralKeys: Private method.
			existing["_patch"](data);
		}
	}

	/**
	 * Removes a value from the cache, if exists.
	 * @param key - The key of the value to remove.
	 * @returns Whether the value has been removed.
	 */
	private __remove__(key: Snowflake): boolean {
		const { cache } = this;

		return cache.delete(key);
	}
}

/*
 * biome-ignore-all lint/correctness/noUnusedPrivateClassMembers: Biome uses
 * "this" to check if these private members are being used, but we are
 * destructuring them from "this".
 */

import type { Base } from "#structures/index.js";
import type { Snowflake } from "#types/index.js";

/**
 * The cache manager for the client.
 * @group Client/Managers
 * @public
 */
export class CacheManager<Key extends string, Value extends Base> {
	/**
	 * The maximum number of cached values in the cache manager.
	 */
	private readonly __limit__: number;

	/**
	 * The cached values of the cache manager.
	 */
	readonly cache: Map<Snowflake, Value>;

	/**
	 * Creates a new {@link CacheManager | `CacheManager`} instance.
	 * @param limit - The maximum number of cached values in the cache
	 * 		manager.
	 * @param iterable - The initial iterable of key-value pairs for the
	 * 		cache manager.
	 */
	constructor(limit: number = Infinity, iterable: Iterable<Key, Value> = []) {
		this.__limit__ = limit;
		this.cache = new Map(iterable);
	}

	/**
	 * Adds a value to the cache manager.
	 * @param key - The key of the value to add.
	 * @param value - The value to add.
	 * @internal
	 */
	protected __add__(key: Snowflake, value: Value): void {
		const { __limit__, cache } = this;
		const { size: cacheSize } = cache;

		if (cacheSize >= __limit__) {
			return void process.emitWarning(
				`The entry "${key}" has not been added due to the cache limit. (${cacheSize}/${__limit__} allowed entries)`,
				"[CacheManager]",
			);
		}

		cache.set(key, value);
	}

	/**
	 * Patches the data of a cached value with the given data, if exists.
	 * @param key - The key of the value to patch.
	 * @param data - The data to use to patch the cached value.
	 * @internal
	 */
	protected __patch__(key: Snowflake, data: unknown): void {
		const { cache } = this;
		const existing = cache.get(key);

		// biome-ignore lint/complexity/useLiteralKeys: Private method.
		existing?.["_patch"](data);
	}

	/**
	 * Removes a value from the cache manager, if exists.
	 * @param key - The key of the value to remove.
	 * @returns Whether the value was removed.
	 * @internal
	 */
	protected __remove__(key: Snowflake): boolean {
		const { cache } = this;

		return cache.delete(key);
	}
}

/**
 * Represents an iterable of key-value pairs for the cache manager.
 * @internal
 */
type Iterable<Key extends string, Value extends Base> = readonly [Key, Value][];

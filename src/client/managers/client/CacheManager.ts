import type { Base } from "#structures/discord/base/Base.js";
import type { Snowflake } from "#types/index.js";

/**
 * The cache manager for the client.
 * @public
 */
export class CacheManager<Key extends string, Value extends Base> {
	/**
	 * The cached values of the cache manager.
	 */
	readonly cache: Map<Snowflake, Value>;

	/**
	 * Creates a new {@link CacheManager | `CacheManager`} instance.
	 * @param iterable - The initial iterable of key-value pairs for the
	 * cache manager.
	 */
	constructor(iterable?: Iterable<Key, Value>) {
		this.cache = new Map(iterable ?? []);
	}

	/**
	 * Adds a value to the cache manager.
	 * @param key - The key of the value to add.
	 * @param value - The value to add.
	 * @internal
	 */
	protected _add(key: Snowflake, value: Value): void {
		const { cache } = this;

		cache.set(key, value);
	}

	/**
	 * Patches the data of a cached value with the given data, if exists.
	 * @param key - The key of the value to patch.
	 * @param data - The data to use to patch the cached value.
	 * @internal
	 */
	protected _patch(key: Snowflake, data: Record<PropertyKey, unknown>): void {
		const { cache } = this;
		const existing = cache.get(key);

		// biome-ignore lint/complexity/useLiteralKeys: Protected method.
		existing?.["_patch"](data);
	}

	/**
	 * Removes a value from the cache manager, if exists.
	 * @param key - The key of the value to remove.
	 * @returns Whether the value was removed.
	 * @internal
	 */
	protected _remove(key: Snowflake): boolean {
		const { cache } = this;

		return cache.delete(key);
	}
}

/**
 * Represents an iterable of key-value pairs for the cache manager.
 * @internal
 */
type Iterable<Key, Value> = readonly [Key, Value][];

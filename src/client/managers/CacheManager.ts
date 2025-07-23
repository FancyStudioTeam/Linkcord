import { Base } from "#structures/discord/base/Base.js";
import type { Snowflake } from "#types/index.js";

/**
 * @public
 */
export class CacheManager<Key extends string, Value> {
	readonly cache: Map<Snowflake, Value>;

	constructor(iterable?: Iterable<Key, Value>) {
		this.cache = new Map(iterable ?? []);
	}

	/**
	 * @internal
	 */
	protected add(key: Snowflake, value: Value): Value {
		const { cache } = this;

		cache.set(key, value);

		const existing = cache.get(key);

		if (!existing) {
			throw new Error(`Cache entry with key "${key}" does not exist.`);
		}

		return existing;
	}

	/**
	 * @internal
	 */
	protected remove(key: Snowflake): void {
		const { cache } = this;
		const existing = cache.get(key);

		if (existing) {
			cache.delete(key);
		}

		return;
	}

	/**
	 * @internal
	 */
	protected patch(key: Snowflake, value: unknown): void {
		const { cache } = this;
		const existing = cache.get(key);

		if (existing && existing instanceof Base) {
			/**
			 * biome-ignore lint/complexity/useLiteralKeys: Accessing private
			 * members from the {@link Base | `Base`} class.
			 */
			existing["_patch"](value);
		}
	}
}

/**
 * @internal
 */
type Iterable<Key, Value> = readonly [Key, Value][];

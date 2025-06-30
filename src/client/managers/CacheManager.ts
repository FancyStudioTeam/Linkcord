import { Base } from "#structures/discord/base/Base.js";
import type { Snowflake } from "#types/index.js";

/**
 * @public
 */
export class CacheManager<Key extends string, Value> {
    cache: Map<Snowflake, Value>;

    constructor(iterable?: Iterable<Key, Value>) {
        this.cache = new Map(iterable ?? []);
    }

    /**
     * @internal
     */
    protected add(key: Snowflake, value: Value): void {
        const { cache } = this;
        const existing = cache.get(key);

        if (existing) {
            return;
        }

        cache.set(key, value);

        return;
    }

    /**
     * @internal
     */
    protected patch(key: Snowflake, value: Record<number | string, unknown>): void {
        const { cache } = this;
        const existing = cache.get(key);

        if (
            existing &&
            existing instanceof Base &&
            "patch" in existing &&
            typeof existing.patch === "function"
        ) {
            existing.patch(value);
        }
    }
}

/**
 * @internal
 */
type Iterable<Key, Value> = readonly [Key, Value][];

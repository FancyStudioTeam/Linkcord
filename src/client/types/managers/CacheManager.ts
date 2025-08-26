import type { Base } from "#structures/index.js";

/** Represents an iterable of key-value pairs for the cache manager. */
export type Iterable<Key extends string, Value extends Base> = readonly [Key, Value][];

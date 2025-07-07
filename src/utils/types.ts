import type { Uncached } from "#client/ClientEvents.js";

/**
 * @public
 */
export type MaybeUncached<Type> = Type | Uncached;

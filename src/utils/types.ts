import type { Uncached } from "#structures/Uncached.js";

/**
 * @public
 */
export type JSONProperties<Instance extends Newable> = {
	/**
	 * biome-ignore lint/complexity/noBannedTypes: Expect any function.
	 */
	[Key in keyof InstanceType<Instance> as InstanceType<Instance>[Key] extends Function
		? never
		: Key]: InstanceType<Instance>[Key];
};

/**
 * @public
 */
export type MaybeUncached<Type> = Type | Uncached;

/**
 * biome-ignore-start lint/suspicious/noExplicitAny: Expect anything.
 */
/**
 * @internal
 */
type Newable = new (...args: any[]) => any;
/**
 * biome-ignore-end lint/suspicious/noExplicitAny: Expect anything.
 */

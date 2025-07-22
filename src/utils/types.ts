import type { Uncached } from "#structures/Uncached.js";

/**
 * @public
 */
export type JSONProperties<Instance extends Newable> = Readonly<
	Omit<
		{
			/**
			 * biome-ignore lint/complexity/noBannedTypes: Expect any function.
			 */
			[Key in keyof InstanceType<Instance> as InstanceType<Instance>[Key] extends Function
				? never
				: Key]: InstanceType<Instance>[Key];
		},
		"client"
	>
>;

/**
 * @public
 */
export type MaybeUncached<Type> = Type | Uncached;

/**
 * biome-ignore-start lint/suspicious/noExplicitAny: Expect anything.
 *
 * @remarks
 * Use suppression ranges to prevent IntelliSense from inferring Biome
 * comments.
 */
/**
 * @internal
 */
type Newable = new (...args: any[]) => any;
/**
 * biome-ignore-end lint/suspicious/noExplicitAny: Expect anything.
 */

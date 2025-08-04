import type { Uncached } from "#structures/Uncached.js";

/**
 * @public
 */
export type JSONProperties<Instance extends Newable> = Readonly<
	Omit<
		{
			// biome-ignore lint/complexity/noBannedTypes: Allow any function.
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
 * @internal
 */
// biome-ignore lint/suspicious/noExplicitAny: Expect anything.
type Newable = new (...args: any[]) => any;

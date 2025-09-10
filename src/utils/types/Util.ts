declare const brand: unique symbol;

/** Represents a branded type. */
export type Brand<Type, Brand extends string> = Type & {
	readonly [brand]: Brand;
};

/** Represents the properties of an instance that can be serialized into a JSON object. */
/*export type JSONProperties<Instance extends Newable<unknown>> = Readonly<
	Omit<
		{
			// biome-ignore lint/complexity/noBannedTypes: Exlude any method from the instance.
			[Key in keyof InstanceType<Instance> as InstanceType<Instance>[Key] extends Function
				? never
				: Key]: InstanceType<Instance>[Key];
		},
		"client"
	>
>;*/

/** Represents a conditional type that returns the `TrueResult` if the `Condition` is `true`, or the `FalseResult` if the condition is `false`. */
export type If<Condition, TrueResult, FalseResult = null> = Condition extends true
	? TrueResult
	: Condition extends false
		? FalseResult
		: never;

/** Represents a class that can be instantiated. */
// biome-ignore lint/suspicious/noExplicitAny: Expect anything.
export type Newable<Class> = new (...args: any[]) => Class;

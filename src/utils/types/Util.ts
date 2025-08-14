/**
 * Represents the properties of an instance that can be serialized into a JSON object.
 * @public
 */
export type JSONProperties<Instance extends Newable> = Readonly<
	Omit<
		{
			/*
			 * biome-ignore lint/complexity/noBannedTypes: Exlude any method
			 * from the instance.
			 */
			[Key in keyof InstanceType<Instance> as InstanceType<Instance>[Key] extends Function
				? never
				: Key]: InstanceType<Instance>[Key];
		},
		"client"
	>
>;

/**
 * Represents a conditional type that returns the `TrueResult` if the `Condition` is `true`.
 * Otherwise, it returns the `FalseResult`.
 * If `Condition` does not extend either `true` or `false`, it will return `never`.
 * @public
 */
export type If<Condition, TrueResult, FalseResult = null> = Condition extends true
	? TrueResult
	: Condition extends false
		? FalseResult
		: never;

/**
 * Represents a class that can be instantiated.
 * @public
 */
// biome-ignore lint/suspicious/noExplicitAny: Expect anything.
export type Newable<Class = unknown> = new (...args: any[]) => Class;

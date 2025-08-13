/**
 * Represents the properties of an instance that can be serialized into a
 * JSON object.
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
 * Represents a class that can be instantiated.
 * @public
 */
// biome-ignore lint/suspicious/noExplicitAny: Expect anything.
export type Newable<Class = unknown> = new (...args: any[]) => Class;

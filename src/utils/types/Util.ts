declare const Brand: unique symbol;

/**
 * Represents a type that can be awaited.
 *
 * @typeParam Type - The shape of the type that can be awaited.
 */
export type Awaitable<Type> = Promise<Type> | Type;

/**
 * Represents a type that is marked with a brand.
 *
 * @typeParam Type - The shape of the type to mark as branded.
 * @typeParam Brand - The name of the brand to use.
 */
export type Brand<Type, Brand extends string> = Type & {
	readonly [Brand]: Brand;
};

/**
 * Represents a type that is the constructor of a class.
 *
 * @typeParam Class - The shape of the class for the constructor.
 */
// biome-ignore lint/suspicious/noExplicitAny: Expect anything in the constructor arguments.
export type Constructor<Class> = new (...args: any[]) => Class;

/**
 * Represents a type that evaluates a boolean condition.
 *
 * @typeParam Condition - The boolean condition to evaluate.
 * @typeParam TrueResult - The shape of the result when the evaluation is `true`.
 * @typeParam FalseResult - The shape of the result when the evaluation is `false`.
 */
export type If<Condition, TrueResult, FalseResult = null> = Condition extends true
	? TrueResult
	: Condition extends false
		? FalseResult
		: never;

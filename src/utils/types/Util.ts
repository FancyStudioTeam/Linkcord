declare const Brand: unique symbol;

/**
 * Represents a type that can be awaited.
 *
 * @typeParam Type - The shape of the type that can be awaited.
 * @group Utils/Types
 */
export type Awaitable<Type> = Promise<Type> | Type;

/**
 * Represents a type that is marked as a branded type.
 *
 * @typeParam Type - The shape of the type to mark as branded.
 * @typeParam Brand - The name of the brand to use.
 * @group Utils/Types
 */
export type Brand<Type, Brand extends string> = Type & {
	readonly [Brand]: Brand;
};

/**
 * Represents a type that evaluates a boolean condition.
 *
 * @typeParam Condition - The boolean condition to evaluate.
 * @typeParam TrueResult - The shape of the result when the evaluation is `true`.
 * @typeParam FalseResult - The shape of the result when the evaluation is `false`.
 * @group Utils/Types
 */
export type If<Condition, TrueResult, FalseResult = null> = Condition extends true
	? TrueResult
	: Condition extends false
		? FalseResult
		: never;

/**
 * Represents an instance of a class.
 *
 * @typeParam Class - The shape of the class.
 * @group Utils/Types
 */
// biome-ignore lint/suspicious/noExplicitAny: Expect anything in the constructor arguments.
export type Newable<Class> = new (...args: any[]) => Class;

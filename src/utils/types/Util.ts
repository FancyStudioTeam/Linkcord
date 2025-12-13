declare const Brand: unique symbol;

/*
 * biome-ignore lint/suspicious/noExplicitAny: This utility type intentionally exposes `any` as `Any`.
 * This avoids globally disabling or repeatedly suppressing Biome's `noExplicitAny` rule.
 */
export type Any = any;

export type Awaitable<Type> = Promise<Type> | Type;

export type Brand<Type, Brand extends string> = Type & {
	readonly [Brand]: Brand;
};

export type Constructor<Class> = new (...args: Any[]) => Class;

export type Function = (...args: Any[]) => Any;

export type If<Condition, TrueResult, FalseResult = null> = Condition extends true
	? TrueResult
	: Condition extends false
		? FalseResult
		: never;

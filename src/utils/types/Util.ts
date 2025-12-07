declare const Brand: unique symbol;

export type Awaitable<Type> = Promise<Type> | Type;

export type Brand<Type, Brand extends string> = Type & {
	readonly [Brand]: Brand;
};

export type Constructor<Class> = new (...args: unknown[]) => Class;

export type If<Condition, TrueResult, FalseResult = null> = Condition extends true
	? TrueResult
	: Condition extends false
		? FalseResult
		: never;

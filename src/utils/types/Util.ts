declare const Brand: unique symbol;

///////////////////////////////////////////////////////////////////////////

export type Awaitable<Type> = Promise<Type> | Type;

///////////////////////////////////////////////////////////////////////////

export type Brand<Type, Brand extends string> = Type & {
	readonly [Brand]: Brand;
};

///////////////////////////////////////////////////////////////////////////

// biome-ignore lint/suspicious/noExplicitAny: Expect anything in the constructor arguments
export type Constructor<Class> = new (...args: any[]) => Class;

///////////////////////////////////////////////////////////////////////////

export type If<Condition, TrueResult, FalseResult = null> = Condition extends true
	? TrueResult
	: Condition extends false
		? FalseResult
		: never;

export type Snowflake = string;

export type Awaitable<T> = T | Promise<T>;
export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;

export type DiscordAPIVersion = 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type If<Value extends boolean, TrueResult, FalseResult = null> = Value extends true
  ? TrueResult
  : Value extends false
    ? FalseResult
    : TrueResult | FalseResult;

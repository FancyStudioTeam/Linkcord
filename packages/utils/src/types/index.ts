/** Represents a type depending on a boolean condition. */
export type If<Condition, TrueResult, FalseResult = null> = Condition extends true
  ? TrueResult
  : Condition extends false
    ? FalseResult
    : TrueResult | FalseResult;

/** Represents a type that is either the defined type or `null`. */
export type Nullable<Type> = Type | null;

/** Represents a type that is either the defined type or `undefined`. */
export type Optional<Type> = Type | undefined;

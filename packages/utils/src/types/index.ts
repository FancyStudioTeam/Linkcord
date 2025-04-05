export type If<Condition, TrueResult, FalseResult = null> = Condition extends true
  ? TrueResult
  : Condition extends false
    ? FalseResult
    : TrueResult | FalseResult;

export type Nullable<Type> = Type | null;

export type Optional<Type> = Type | undefined;

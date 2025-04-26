/**
 * @internal
 */
export type If<Condition, TrueResult, FalseResult = null> = Condition extends true
  ? TrueResult
  : Condition extends false
    ? FalseResult
    : never;

/**
 * @internal
 */
export type Nullable<Type> = Type | null;

/**
 * @internal
 */
export type Optional<Type> = Type | undefined;

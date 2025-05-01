/**
 * @public
 */
export type If<Condition, TrueResult, FalseResult = null> = Condition extends true
  ? TrueResult
  : Condition extends false
    ? FalseResult
    : never;

/**
 * @public
 */
export type Nullable<Type> = Type | null;

/**
 * @public
 */
export type Optional<Type> = Type | undefined;

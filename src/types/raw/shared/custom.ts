/**
 * @public
 */
export type If<Condition, TrueResult, FalseResult = null> = Condition extends true
    ? TrueResult
    : Condition extends false
      ? FalseResult
      : never;

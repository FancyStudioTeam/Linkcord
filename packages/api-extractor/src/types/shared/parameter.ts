import type { APITokenRange } from "./token-range.js";

/**
 * @public
 */
export interface APIParameter {
  isOptional: boolean;
  parameterName: string;
  parameterTokenRange: APITokenRange;
}

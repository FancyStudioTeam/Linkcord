import type { APITokenRange } from "./token-range.js";

export interface APIParameter {
  isOptional: boolean;
  parameterName: string;
  parameterTokenRange: APITokenRange;
}

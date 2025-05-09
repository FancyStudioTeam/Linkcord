import type { APITokenRange } from "./APITokenRange.js";

export interface APIParameter {
  isOptional: boolean;
  parameterName: string;
  parameterTokenRange: APITokenRange;
}

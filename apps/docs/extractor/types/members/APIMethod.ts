import type { APIChildMemberBase, APIMemberKind, APIParameter, APITokenRange } from "../index.js";

export interface APIMethod extends APIChildMemberBase<APIMemberKind.Method> {
  isAbstract: boolean;
  isOptional: boolean;
  isProtected: boolean;
  isStatic: boolean;
  overloadIndex: number;
  parameters: APIParameter[];
  returnTypeTokenRange: APITokenRange;
}

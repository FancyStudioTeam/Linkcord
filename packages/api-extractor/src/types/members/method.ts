import type { APIParameter } from "../shared/parameter.js";
import type { APITokenRange } from "../shared/token-range.js";
import type { APIChildMemberBase } from "./base/child-member.js";
import type { APIMemberKind } from "./member.js";

export interface Method extends APIChildMemberBase<APIMemberKind.Method> {
  isAbstract: boolean;
  isOptional: boolean;
  isProtected: boolean;
  isStatic: boolean;
  overloadIndex: number;
  parameters: APIParameter[];
  returnTypeTokenRange: APITokenRange;
}

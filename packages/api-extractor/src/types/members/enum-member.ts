import type { APITokenRange } from "../shared/token-range.js";
import type { APIChildMemberBase } from "./base/child-member.js";
import type { APIMemberKind } from "./member.js";

export interface APIEnumMember extends APIChildMemberBase<APIMemberKind.EnumMember> {
  initializerTokenRange: APITokenRange;
}

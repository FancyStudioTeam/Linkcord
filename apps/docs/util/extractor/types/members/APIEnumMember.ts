import type { APIChildMemberBase } from "../base/APIChildMember.js";
import type { APIMemberKind } from "../index.js";
import type { APITokenRange } from "../shared/APITokenRange.js";

export interface APIEnumMember extends APIChildMemberBase<APIMemberKind.EnumMember> {
  initializerTokenRange: APITokenRange;
}

import type { APIChildMemberBase, APIMemberKind, APITokenRange } from "../index.js";

export interface APIEnumMember extends APIChildMemberBase<APIMemberKind.EnumMember> {
  initializerTokenRange: APITokenRange;
}

import type { APIMemberKind } from "types/APIExtractor";
import type { APIChildMemberBase } from "types/base/APIChildMember";
import type { APITokenRange } from "types/shared/APITokenRange";

export interface APIEnumMember extends APIChildMemberBase<APIMemberKind.EnumMember> {
  initializerTokenRange: APITokenRange;
}

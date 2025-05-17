import type { APITokenRange } from "../shared/token-range.js";
import type { APIChildMember } from "./base/child-member.js";
import type { APIMemberKind } from "./member.js";

export interface APIEnumMember extends APIChildMember<APIMemberKind.EnumMember> {
  initializerTokenRange: APITokenRange;
}

import type { APIChildMemberBase } from "../base/APIChildMember.js";
import type { APIMemberKind } from "../index.js";
import type { APITokenRange } from "../shared/APITokenRange.js";

export interface APIPropertySignature extends APIChildMemberBase<APIMemberKind.PropertySignature> {
  isOptional: boolean;
  isReadonly: boolean;
  propertyTypeTokenRange: APITokenRange;
}

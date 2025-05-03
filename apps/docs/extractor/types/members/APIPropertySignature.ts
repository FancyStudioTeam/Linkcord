import type { APIChildMemberBase, APIMemberKind, APITokenRange } from "../index.js";

export interface APIPropertySignature extends APIChildMemberBase<APIMemberKind.PropertySignature> {
  isOptional: boolean;
  isReadonly: boolean;
  propertyTypeTokenRange: APITokenRange;
}

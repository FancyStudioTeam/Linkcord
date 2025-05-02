import type { APIMemberKind } from "types/APIExtractor";
import type { APIChildMemberBase } from "types/base/APIChildMember";
import type { APITokenRange } from "types/shared/APITokenRange";

export interface APIPropertySignature extends APIChildMemberBase<APIMemberKind.PropertySignature> {
  isOptional: boolean;
  isReadonly: boolean;
  propertyTypeTokenRange: APITokenRange;
}

import type { APIMemberKind } from "#types/APIExtractor";
import type { APIChildMemberBase } from "#types/base/APIChildMember";
import type { APITokenRange } from "#types/shared/APITokenRange";

export interface APIVariable extends APIChildMemberBase<APIMemberKind.Variable> {
  fileUrlPath: string;
  isReadonly: boolean;
  releaseTag: string;
  variableTypeTokenRange: APITokenRange;
}

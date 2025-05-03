import type { APIChildMemberBase } from "../base/APIChildMember.js";
import type { APIMemberKind } from "../index.js";
import type { APITokenRange } from "../shared/APITokenRange.js";

export interface APIVariable extends APIChildMemberBase<APIMemberKind.Variable> {
  fileUrlPath: string;
  isReadonly: boolean;
  releaseTag: string;
  variableTypeTokenRange: APITokenRange;
}

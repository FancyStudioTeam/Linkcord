import type { APIChildMemberBase, APIMemberKind, APITokenRange } from "../index.js";

export interface APIVariable extends APIChildMemberBase<APIMemberKind.Variable> {
  fileUrlPath: string;
  isReadonly: boolean;
  releaseTag: string;
  variableTypeTokenRange: APITokenRange;
}

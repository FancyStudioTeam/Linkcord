import type { APIChildMemberBase, APIMemberKind, APIReleaseTag, APITokenRange } from "../index.js";

export interface APIVariable extends APIChildMemberBase<APIMemberKind.Variable> {
  fileUrlPath: string;
  isReadonly: boolean;
  releaseTag: APIReleaseTag;
  variableTypeTokenRange: APITokenRange;
}

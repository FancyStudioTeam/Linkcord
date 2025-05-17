import type { APITokenRange } from "../shared/index.js";
import type { APIChildMemberBase, APIReleaseTag } from "./base/index.js";
import type { APIMemberKind } from "./member.js";

export interface APIVariable extends APIChildMemberBase<APIMemberKind.Variable> {
  fileUrlPath: string;
  isReadonly: boolean;
  releaseTag: APIReleaseTag;
  variableTypeTokenRange: APITokenRange;
}

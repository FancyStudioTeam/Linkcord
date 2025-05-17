import type { APITokenRange } from "../shared/token-range.js";
import type { APIChildMemberBase } from "./base/child-member.js";
import type { APIReleaseTag } from "./base/documented-member.js";
import type { APIMemberKind } from "./member.js";

export interface APIVariable extends APIChildMemberBase<APIMemberKind.Variable> {
  fileUrlPath: string;
  isReadonly: boolean;
  releaseTag: APIReleaseTag;
  variableTypeTokenRange: APITokenRange;
}

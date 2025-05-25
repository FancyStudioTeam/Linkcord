import type { APIParameter } from "../shared/parameter.js";
import type { APITokenRange } from "../shared/token-range.js";
import type { APIDocumentedMemberBase } from "./base/documented-member.js";
import type { APIMemberKind } from "./member.js";

/**
 * @public
 */
export interface APIFunction
  extends Omit<APIDocumentedMemberBase<APIMemberKind.Function, never>, "members" | "preserveMemberOrder"> {
  overloadIndex: number;
  parameters: APIParameter[];
  returnTypeTokenRange: APITokenRange;
}

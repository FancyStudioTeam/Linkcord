import type { APITokenRange } from "../shared/token-range.js";
import type { APIDocumentedMemberBase } from "./base/documented-member.js";
import type { APIMemberKind } from "./member.js";

export interface APITypeAlias
  extends Omit<APIDocumentedMemberBase<APIMemberKind.TypeAlias, never>, "members" | "preserveMemberOrder"> {
  typeTokenRange: APITokenRange;
}

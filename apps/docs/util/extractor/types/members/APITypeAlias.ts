import type { APIDocumentedMemberBase } from "../base/APIDocumentedMemberBase.js";
import type { APIMemberKind } from "../index.js";
import type { APITokenRange } from "../shared/APITokenRange.js";

export interface APITypeAlias
  extends Omit<APIDocumentedMemberBase<APIMemberKind.TypeAlias>, "members" | "preserveMemberOrder"> {
  typeTokenRange: APITokenRange;
}

import type { APIDocumentedMemberBase, APIMemberKind, APITokenRange } from "../index.js";

export interface APITypeAlias
  extends Omit<APIDocumentedMemberBase<APIMemberKind.TypeAlias>, "members" | "preserveMemberOrder"> {
  typeTokenRange: APITokenRange;
}

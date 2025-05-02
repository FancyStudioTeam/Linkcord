import type { APIMemberKind } from "types/APIExtractor";
import type { APIDocumentedMemberBase } from "types/base/APIDocumentedMemberBase";
import type { APITokenRange } from "types/shared/APITokenRange";

export interface APITypeAlias
  extends Omit<APIDocumentedMemberBase<APIMemberKind.TypeAlias>, "members" | "preserveMemberOrder"> {
  typeTokenRange: APITokenRange;
}

import type { APIMemberKind } from "types/APIExtractor";
import type { APIDocumentedMemberBase } from "types/base/APIDocumentedMemberBase";
import type { APITokenRange } from "types/shared/APITokenRange";

export interface APIInterface extends APIDocumentedMemberBase<APIMemberKind.Interface> {
  extendsTokenRange: APITokenRange[];
}

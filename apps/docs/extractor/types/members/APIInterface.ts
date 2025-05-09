import type { APIDocumentedMemberBase, APIMemberKind, APIPropertySignature, APITokenRange } from "../index.js";

export interface APIInterface extends APIDocumentedMemberBase<APIMemberKind.Interface, AnyInterfaceMember> {
  extendsTokenRanges: APITokenRange[];
}

export type AnyInterfaceMember = APIPropertySignature;

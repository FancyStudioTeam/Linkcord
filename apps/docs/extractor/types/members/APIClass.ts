import type { APIConstructor, APIDocumentedMemberBase, APIMemberKind, APIMethod, APITokenRange } from "../index.js";

export interface APIClass extends APIDocumentedMemberBase<APIMemberKind.Class, AnyClassMember> {
  implementTokenRanges: APITokenRange[];
  isAbstract: boolean;
}

export type AnyClassMember = APIConstructor | APIMethod;

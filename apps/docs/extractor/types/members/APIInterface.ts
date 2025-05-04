import type { APIDocumentedMemberBase, APIMemberKind, APITokenRange } from "../index.js";
import type { APIPropertySignature } from "./APIPropertySignature.js";

export interface APIInterface extends APIDocumentedMemberBase<APIMemberKind.Interface, AnyInterfaceMember> {
  extendsTokenRanges: APITokenRange[];
}

export type AnyInterfaceMember = APIPropertySignature;

import type { APIDocumentedMemberBase, APIMemberKind, APITokenRange } from "../index.js";
import type { APIPropertySignature } from "./APIPropertySignature.js";

export interface APIInterface extends APIDocumentedMemberBase<APIMemberKind.Interface, AnyInterfaceMember> {
  extendsTokenRange: APITokenRange[];
}

export type AnyInterfaceMember = APIPropertySignature;

import type { APIDocumentedMemberBase } from "../base/APIDocumentedMemberBase.js";
import type { APIMemberKind } from "../index.js";
import type { APITokenRange } from "../shared/APITokenRange.js";
import type { APIPropertySignature } from "./APIPropertySignature.js";

export interface APIInterface extends APIDocumentedMemberBase<APIMemberKind.Interface, InterfaceMembers> {
  extendsTokenRange: APITokenRange[];
}

type InterfaceMembers = APIPropertySignature;

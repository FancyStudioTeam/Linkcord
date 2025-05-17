import type { APITokenRange } from "../shared/token-range.js";
import type { APIDocumentedMemberBase } from "./base/documented-member.js";
import type { APIMemberKind } from "./member.js";
import type { APIPropertySignature } from "./property-signature.js";

export interface APIInterface extends APIDocumentedMemberBase<APIMemberKind.Interface, AnyInterfaceMember> {
  extendsTokenRanges: APITokenRange[];
}

export type AnyInterfaceMember = APIPropertySignature;

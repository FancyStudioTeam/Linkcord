import type { APITokenRange } from "../shared/token-range.js";
import type { APIDocumentedMemberBase } from "./base/documented-member.js";
import type { APIConstructor } from "./constructor.js";
import type { APIMemberKind } from "./member.js";
import type { APIMethod } from "./method.js";

/**
 * @public
 */
export interface APIClass extends APIDocumentedMemberBase<APIMemberKind.Class, AnyClassMember> {
  implementTokenRanges: APITokenRange[];
  isAbstract: boolean;
}

/**
 * @public
 */
export type AnyClassMember = APIConstructor | APIMethod;

import type { APIDocumentedMemberBase } from "./base/documented-member.js";
import type { APIEnumMember } from "./enum-member.js";
import type { APIMemberKind } from "./member.js";

/**
 * @public
 */
export type AnyEnumMember = APIEnumMember;

/**
 * @public
 */
export type APIEnum = APIDocumentedMemberBase<APIMemberKind.Enum, AnyEnumMember>;

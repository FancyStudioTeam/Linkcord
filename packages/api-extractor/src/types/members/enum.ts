import type { APIDocumentedMemberBase } from "./base/documented-member.js";
import type { APIEnumMember } from "./enum-member.js";
import type { APIMemberKind } from "./member.js";

export type AnyEnumMember = APIEnumMember;

export type APIEnum = APIDocumentedMemberBase<APIMemberKind.Enum, AnyEnumMember>;

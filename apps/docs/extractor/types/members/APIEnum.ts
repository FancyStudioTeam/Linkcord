import type { APIDocumentedMemberBase, APIEnumMember, APIMemberKind } from "../index.js";

export interface APIEnum extends APIDocumentedMemberBase<APIMemberKind.Enum, AnyEnumMember> {}

export type AnyEnumMember = APIEnumMember;

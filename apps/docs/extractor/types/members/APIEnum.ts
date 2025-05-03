import type { APIDocumentedMemberBase, APIMemberKind } from "../index.js";
import type { APIEnumMember } from "./APIEnumMember.js";

export interface APIEnum extends APIDocumentedMemberBase<APIMemberKind.Enum, AnyEnumMember> {}

export type AnyEnumMember = APIEnumMember;

import type { APIDocumentedMemberBase } from "../base/APIDocumentedMemberBase.js";
import type { APIMemberKind } from "../index.js";
import type { APIEnumMember } from "./APIEnumMember.js";

export interface APIEnum extends APIDocumentedMemberBase<APIMemberKind.Enum, APIEnumMember> {}

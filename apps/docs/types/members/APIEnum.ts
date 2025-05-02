import type { APIMemberKind } from "types/APIExtractor";
import type { APIDocumentedMemberBase } from "types/base/APIDocumentedMemberBase";
import type { APIEnumMember } from "./APIEnumMember.js";

export interface APIEnum extends APIDocumentedMemberBase<APIMemberKind.Enum, APIEnumMember> {}

import type { APIMemberKind } from "../index.js";
import type { APIDocumentedMemberBase } from "./APIDocumentedMemberBase.js";

export interface APIChildMemberBase<Kind extends AnyChildMemberKind>
  extends Omit<APIDocumentedMemberBase<Kind>, "fileUrlPath" | "members" | "preserveMemberOrder"> {}

type AnyChildMemberKind =
  | APIMemberKind.Constructor
  | APIMemberKind.EnumMember
  | APIMemberKind.Method
  | APIMemberKind.PropertySignature
  | APIMemberKind.Variable;

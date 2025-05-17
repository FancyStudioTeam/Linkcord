import type { APIMemberKind } from "../member.js";
import type { APIDocumentedMemberBase } from "./documented-member.js";

export type APIChildMember<Kind extends APIMemberKind> = Omit<
  APIDocumentedMemberBase<Kind, never>,
  "fileUrlPath" | "members" | "preserveMemberOrder"
>;

import type { APIMemberKind } from "../member.js";
import type { APIDocumentedMemberBase } from "./documented-member.js";

export type APIChildMemberBase<Kind extends APIMemberKind> = Omit<
  APIDocumentedMemberBase<Kind, never>,
  "fileUrlPath" | "members" | "preserveMemberOrder"
>;

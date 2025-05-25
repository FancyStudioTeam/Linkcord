import type { APIMemberKind } from "../member.js";
import type { APIDocumentedMemberBase } from "./documented-member.js";

/**
 * @public
 */
export type APIChildMemberBase<Kind extends APIMemberKind> = Omit<
  APIDocumentedMemberBase<Kind, never>,
  "fileUrlPath" | "members" | "preserveMemberOrder"
>;

import type { APIExcerptToken } from "../../shared/excerpt-token.js";
import type { APIMemberKind } from "../member.js";
import type { APIMemberBase } from "./member.js";

/**
 * @public
 */
export interface APIDocumentedMemberBase<Kind extends APIMemberKind, Member> extends APIMemberBase<Kind, Member> {
  docComment: string;
  excerptTokens: APIExcerptToken[];
  fileUrlPath: string;
  releaseTag: APIReleaseTag;
}

/**
 * @public
 */
export enum APIReleaseTag {
  Alpha = "Alpha",
  Beta = "Beta",
  Private = "Private",
  Public = "Public",
}

import type { APIExcerptToken, APIMemberKind } from "../index.js";
import type { APIMemberBase } from "./APIMemberBase.js";

export interface APIDocumentedMemberBase<Kind extends APIMemberKind, Member = unknown>
  extends APIMemberBase<Kind, Member> {
  docComment: string;
  excerptTokens: APIExcerptToken[];
  fileUrlPath: string;
  releaseTag: APIReleaseTag;
}

export enum APIReleaseTag {
  Alpha = "Alpha",
  Beta = "Beta",
  Private = "Private",
  Public = "Public",
}

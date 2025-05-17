import type { APIExcerptToken } from "#types";
import type { APIMemberKind } from "../member.js";
import type { APIMemberBase } from "./member.js";

export interface APIDocumentedMemberBase<Kind extends APIMemberKind, Member> extends APIMemberBase<Kind, Member> {
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

import type { APIMemberKind } from "types/APIExtractor";
import type { APIExcerptToken } from "types/shared/APIExcerptToken.js";
import type { APIMemberBase } from "./APIMemberBase.js";

export interface APIDocumentedMemberBase<Kind extends APIMemberKind, Member = unknown>
  extends APIMemberBase<Kind, Member> {
  docComment: string;
  excerptTokens: APIExcerptToken[];
  fileUrlPath: string;
  releaseTag: string;
}

import type { APIExcerptTokenBase } from "../base/APIExcerptTokenBase.js";

export interface APIContentExcerptToken extends APIExcerptTokenBase<APIExcerptTokenKind.Content> {}

export interface APIReferenceExcerptToken extends APIExcerptTokenBase<APIExcerptTokenKind.Reference> {
  canonicalReference: string;
}

export type APIExcerptToken = APIContentExcerptToken | APIReferenceExcerptToken;

export enum APIExcerptTokenKind {
  Content = "Content",
  Reference = "Reference",
}

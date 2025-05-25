import type { APIExcerptTokenBase } from "./base/excerpt-token.js";

/**
 * @public
 */
export interface APIContentExcerptToken extends APIExcerptTokenBase<APIExcerptTokenKind.Content> {}

/**
 * @public
 */
export interface APIReferenceExcerptToken extends APIExcerptTokenBase<APIExcerptTokenKind.Reference> {
  canonicalReference: string;
}

/**
 * @public
 */
export type APIExcerptToken = APIContentExcerptToken | APIReferenceExcerptToken;

/**
 * @public
 */
export enum APIExcerptTokenKind {
  Content = "Content",
  Reference = "Reference",
}

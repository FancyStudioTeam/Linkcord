import type { APIExcerptTokenKind } from "../excerpt-token.js";

/**
 * @public
 */
export interface APIExcerptTokenBase<Kind extends APIExcerptTokenKind> {
  kind: Kind;
  text: string;
}

import type { APIExcerptTokenKind } from "../excerpt-token.js";

export interface APIExcerptTokenBase<Kind extends APIExcerptTokenKind> {
  kind: Kind;
  text: string;
}

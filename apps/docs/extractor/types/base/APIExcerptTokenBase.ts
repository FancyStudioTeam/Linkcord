import type { APIExcerptTokenKind } from "../index.js";

export interface APIExcerptTokenBase<Kind extends APIExcerptTokenKind> {
  kind: Kind;
  text: string;
}

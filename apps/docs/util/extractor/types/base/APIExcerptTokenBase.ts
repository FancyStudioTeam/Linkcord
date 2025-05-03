import type { APIExcerptTokenKind } from "../shared/APIExcerptToken.js";

export interface APIExcerptTokenBase<Kind extends APIExcerptTokenKind> {
  kind: Kind;
  text: string;
}

import type { APIExcerptTokenKind } from "types/shared/APIExcerptToken";

export interface APIExcerptTokenBase<Kind extends APIExcerptTokenKind> {
  kind: Kind;
  text: string;
}

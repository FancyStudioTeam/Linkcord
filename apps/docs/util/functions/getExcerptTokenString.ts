import type { APIExcerptToken } from "#types/shared/APIExcerptToken";

export const getExcerptTokenString = (excerptTokens: APIExcerptToken[]): string =>
  excerptTokens
    .map((token) => token.text)
    .join("")
    .trim();

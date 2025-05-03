import type { APIExcerptToken } from "#extractor/types";

export const formatExcerptTokens = (excerptTokens: APIExcerptToken[]): string => {
  const filteredExcerptTokens = excerptTokens.filter(Boolean);
  const joinedExcerptTokens = filteredExcerptTokens.map(({ text }) => text).join("");

  return joinedExcerptTokens;
};

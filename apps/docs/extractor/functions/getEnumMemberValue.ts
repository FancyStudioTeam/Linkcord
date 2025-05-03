import type { APIEnumMember } from "#extractor/types";
import { formatExcerptTokens } from "./formatExcerptTokens.js";

export const getEnumMemberValue = (member: APIEnumMember): string => {
  const { excerptTokens, initializerTokenRange } = member;
  const { endIndex, startIndex } = initializerTokenRange;
  const slicedExcerptTokens = excerptTokens.slice(startIndex, endIndex);
  const formattedExcerptTokens = formatExcerptTokens(slicedExcerptTokens);

  return formattedExcerptTokens;
};

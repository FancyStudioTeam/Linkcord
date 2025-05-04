import type { APIPropertySignature } from "#extractor/types";
import { formatExcerptTokens } from "./formatExcerptTokens.js";

export const getPropertyType = (member: APIPropertySignature): string => {
  const { excerptTokens, propertyTypeTokenRange } = member;
  const { endIndex, startIndex } = propertyTypeTokenRange;
  const slicedExcerptTokens = excerptTokens.slice(startIndex, endIndex);
  const formattedExcerptTokens = formatExcerptTokens(slicedExcerptTokens);

  return formattedExcerptTokens;
};

import { cache } from "react";
import { APIExtractor } from "#extractor/APIExtractor";

export const extractor = new APIExtractor();
export const getTypeMembers = cache(extractor.getTypesPackageMembers);

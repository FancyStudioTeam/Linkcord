import { cache } from "react";
import { APIExtractor } from "#extractor/APIExtractor";

export enum PackageName {
  Gateway = "gateway",
  Linkcord = "linkcord",
  Types = "types",
  Utils = "utils",
  Voice = "voice",
}

export const availablePackages = [
  PackageName.Gateway,
  PackageName.Linkcord,
  PackageName.Types,
  PackageName.Utils,
  PackageName.Voice,
] as const;

export const extractor = new APIExtractor();

export const getGatewayMembers = cache(extractor.getGatewayPackageMembers);
export const getLinkcordMembers = cache(extractor.getLinkcordPackageMembers);
export const getTypeMembers = cache(extractor.getTypesPackageMembers);
export const getVoiceMembers = cache(extractor.getVoicePackageMembers);

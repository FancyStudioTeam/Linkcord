import { cache } from "react";
import { APIExtractor } from "#extractor/APIExtractor";

export enum PackageName {
  Gateway = "gateway",
  Linkcord = "linkcord",
  Types = "types",
  Voice = "voice",
}

export const availablePackages: PackageName[] = [
  PackageName.Gateway,
  PackageName.Linkcord,
  PackageName.Types,
  PackageName.Voice,
] as const;

export const extractor = new APIExtractor();

export const getGatewayMembers = cache(extractor.getGatewayPackageMembers.bind(extractor));
export const getLinkcordMembers = cache(extractor.getLinkcordPackageMembers.bind(extractor));
export const getTypeMembers = cache(extractor.getTypesPackageMembers.bind(extractor));
export const getVoiceMembers = cache(extractor.getVoicePackageMembers.bind(extractor));

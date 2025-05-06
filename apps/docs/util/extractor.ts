import { cache } from "react";
import { APIExtractor } from "#extractor/APIExtractor";

export enum PackageName {
  Gateway = "gateway",
  Linkcord = "linkcord",
  Rest = "rest",
  Types = "types",
  Utils = "utils",
  Voice = "voice",
}

export const availablePackages: PackageName[] = [
  PackageName.Gateway,
  PackageName.Linkcord,
  PackageName.Rest,
  PackageName.Types,
  PackageName.Utils,
  PackageName.Voice,
] as const;

export const extractor = new APIExtractor();
export const getTypeMembers = cache(extractor.getTypesPackageMembers);

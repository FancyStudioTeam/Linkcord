import { type PackageName, availablePackages } from "#util/extractor";
import { notFound } from "#util/responses/notFound";
import { getMembersFromPackage } from "./getMembersFromPackage.js";

export const getPackageMembers = (name?: string) => {
  if (!(name && availablePackages.includes(name as PackageName))) {
    throw notFound("This package does not exist.");
  }

  const packageName = name as PackageName;
  const members = getMembersFromPackage(packageName);

  return members;
};

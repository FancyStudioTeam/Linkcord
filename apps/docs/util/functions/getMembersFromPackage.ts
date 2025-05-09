import type { MembersFunction } from "#extractor/APIExtractor";
import type { AnyEntryPointMember } from "#extractor/types";
import { PackageName, getGatewayMembers, getLinkcordMembers, getTypeMembers, getVoiceMembers } from "#util/extractor";

export const getMembersFromPackage = (packageName: PackageName): AnyEntryPointMember[] => {
  const packages: Record<PackageName, MembersFunction> = {
    [PackageName.Gateway]: getGatewayMembers,
    [PackageName.Linkcord]: getLinkcordMembers,
    [PackageName.Types]: getTypeMembers,
    [PackageName.Voice]: getVoiceMembers,
  };
  const selectedPackage = packages[packageName];
  const packageMembers = selectedPackage();

  return packageMembers;
};

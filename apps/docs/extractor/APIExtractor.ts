import APIExtractorTypesJSON from "#public/api/types.api.json";
import type { APIPackage } from "./types/APIPackage.js";
import type { AnyEntryPointMember } from "./types/members/APIEntryPoint.js";

export class APIExtractor {
  getTypesPackage(): APIPackage {
    return APIExtractorTypesJSON as APIPackage;
  }

  getTypesPackageMembers(): AnyEntryPointMember[] {
    const { members: packageMembers } = this.getTypesPackage();
    const entryPoint = packageMembers[0];
    const { members } = entryPoint;

    return members;
  }
}

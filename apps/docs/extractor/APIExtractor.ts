import APIExtractorTypesJSON from "./schemas/types.api.json";
import type { APIPackage } from "./types/APIPackage.js";
import type { AnyEntryPointMember } from "./types/members/APIEntryPoint.js";

const getTypesPackage = () => APIExtractorTypesJSON as APIPackage;

export class APIExtractor {
  getTypesPackageMembers(): AnyEntryPointMember[] {
    const typesPackage = getTypesPackage();
    const { members: packageMembers } = typesPackage;
    const entryPoint = packageMembers[0];
    const { members } = entryPoint;

    return members;
  }
}

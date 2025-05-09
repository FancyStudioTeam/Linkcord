import { PackageName } from "#util/extractor";
import APIExtractorGatewayJSON from "./schemas/gateway.api.json";
import APIExtractorLinkcordJSON from "./schemas/linkcord.api.json";
import APIExtractorTypesJSON from "./schemas/types.api.json";
import APIExtractorVoiceJSON from "./schemas/voice.api.json";
import type { APIPackage } from "./types/APIPackage.js";
import type { AnyEntryPointMember } from "./types/members/APIEntryPoint.js";

export class APIExtractor {
  private _getGatewayPackage(): APIPackage {
    return APIExtractorGatewayJSON as APIPackage;
  }

  private _getLinkcordPackage(): APIPackage {
    return APIExtractorLinkcordJSON as APIPackage;
  }

  private _getTypesPackage(): APIPackage {
    return APIExtractorTypesJSON as APIPackage;
  }

  private _getVoicePackage(): APIPackage {
    return APIExtractorVoiceJSON as APIPackage;
  }

  getPackageMembers(packageName: PackageName): AnyEntryPointMember[] {
    const packages: Record<PackageName, PackageFunction> = {
      [PackageName.Gateway]: this._getGatewayPackage,
      [PackageName.Linkcord]: this._getLinkcordPackage,
      [PackageName.Types]: this._getTypesPackage,
      [PackageName.Voice]: this._getVoicePackage,
    };
    const selectedPackage = packages[packageName]();
    const { members: packageMembers } = selectedPackage;
    const entryPoint = packageMembers[0];
    const { members } = entryPoint;

    return members;
  }

  getGatewayPackageMembers(): AnyEntryPointMember[] {
    return this.getPackageMembers(PackageName.Gateway);
  }

  getLinkcordPackageMembers(): AnyEntryPointMember[] {
    return this.getPackageMembers(PackageName.Linkcord);
  }

  getTypesPackageMembers(): AnyEntryPointMember[] {
    return this.getPackageMembers(PackageName.Types);
  }

  getVoicePackageMembers(): AnyEntryPointMember[] {
    return this.getPackageMembers(PackageName.Voice);
  }
}

export type MembersFunction = () => AnyEntryPointMember[];
export type PackageFunction = () => APIPackage;

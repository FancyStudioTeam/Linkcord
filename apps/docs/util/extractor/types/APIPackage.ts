import type { APIMemberKind } from "./index.js";
import type { APIEntryPoint } from "./members/APIEntryPoint.js";

export interface APIPackage {
  canonicalReference: string;
  docComment: string;
  kind: APIMemberKind.Package;
  members: APIEntryPoint[];
  metadata: APIMetadata;
  preserveMemberOrder: boolean;
}

export interface APIMetadata {
  oldestForwardsCompatibleVersion: number;
  schemaVersion: number;
  toolPackage: string;
  toolVersion: string;
}

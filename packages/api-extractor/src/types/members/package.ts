import type { APIEntryPoint } from "./entry-point.js";
import type { APIMemberKind } from "./member.js";

export interface APIMetadata {
  oldestForwardsCompatibleVersion: number;
  schemaVersion: number;
  toolPackage: string;
  toolVersion: string;
}

export interface APIPackage {
  canonicalReference: string;
  docComment: string;
  kind: APIMemberKind.Package;
  members: APIEntryPoint[];
  metadata: APIMetadata;
  name: string;
  preserveMemberOrder: boolean;
}

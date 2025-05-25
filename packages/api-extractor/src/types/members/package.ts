import type { APIEntryPoint } from "./entry-point.js";
import type { APIMemberKind } from "./member.js";

/**
 * @public
 */
export interface APIMetadata {
  oldestForwardsCompatibleVersion: number;
  schemaVersion: number;
  toolPackage: string;
  toolVersion: string;
}

/**
 * @public
 */
export interface APIPackage {
  canonicalReference: string;
  docComment: string;
  kind: APIMemberKind.Package;
  members: APIEntryPoint[];
  metadata: APIMetadata;
  name: string;
  preserveMemberOrder: boolean;
}

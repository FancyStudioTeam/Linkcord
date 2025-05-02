import type { APIMemberKind } from "types/APIExtractor";

export interface APIMemberBase<Kind extends APIMemberKind, Member = unknown> {
  canonicalReference: string;
  kind: Kind;
  name: string;
  preserveMemberOrder: boolean;
  members: Member[];
}

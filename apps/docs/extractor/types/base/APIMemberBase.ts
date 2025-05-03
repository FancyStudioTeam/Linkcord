import type { APIMemberKind } from "../index.js";

export interface APIMemberBase<Kind extends APIMemberKind, Member = unknown> {
  canonicalReference: string;
  kind: Kind;
  name: string;
  preserveMemberOrder: boolean;
  members: Member[];
}

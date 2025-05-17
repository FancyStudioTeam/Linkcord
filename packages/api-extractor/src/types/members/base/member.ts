import type { APIMemberKind } from "../member.js";

export interface APIMemberBase<Kind extends APIMemberKind, Member> {
  canonicalReference: string;
  kind: Kind;
  members: Member[];
  name: string;
  preserveMemberOrder: boolean;
}

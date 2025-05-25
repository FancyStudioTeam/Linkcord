import type { APIMemberKind } from "../member.js";

/**
 * @public
 */
export interface APIMemberBase<Kind extends APIMemberKind, Member> {
  canonicalReference: string;
  kind: Kind;
  members: Member[];
  name: string;
  preserveMemberOrder: boolean;
}

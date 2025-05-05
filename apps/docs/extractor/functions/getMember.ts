import type { AnyEntryPointMember } from "#extractor/types";
import { getTypeMembers } from "#util/extractor";

export const getMember = (name: string): AnyEntryPointMember | null => {
  const members = getTypeMembers();
  const member = members.find((member) => member.name === name);

  return member ?? null;
};

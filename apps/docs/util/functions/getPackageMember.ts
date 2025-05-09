import type { AnyEntryPointMember } from "#extractor/types";
import { notFound } from "#util/responses/notFound";

export const getPackageMember = (members: AnyEntryPointMember[], name?: string) => {
  const member = members.find((member) => member.name === name);

  if (!member) {
    throw notFound("This member does not exist.");
  }

  return member;
};

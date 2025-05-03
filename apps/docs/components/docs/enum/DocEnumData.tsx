import type { EnumData as MemberEnumData } from "#util/functions/extractor/getEnumData";
import { DocEnumMembers } from "./DocEnumMembers.js";

export const DocEnumData = ({
  memberData,
}: {
  memberData: MemberEnumData;
}) => {
  const { enumMembers } = memberData;

  return <DocEnumMembers enumMembers={enumMembers} />;
};

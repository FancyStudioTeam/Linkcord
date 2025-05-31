import type { APIEnum } from "@fancystudioteam/api-extractor";
import { DocEnumMembers } from "./DocEnumMembers.js";

export const DocEnum = ({
  data,
}: {
  data: APIEnum;
}) => {
  const { members } = data;

  return <DocEnumMembers members={members} />;
};

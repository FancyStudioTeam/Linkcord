import type { APIEnum } from "#extractor/types";
import { DocEnumMembers } from "./DocEnumMembers.js";

export const DocEnum = ({
  data,
}: {
  data: APIEnum;
}) => {
  const { members } = data;

  return <DocEnumMembers members={members} />;
};

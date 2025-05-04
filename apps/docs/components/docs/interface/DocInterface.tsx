import type { APIInterface } from "#extractor/types";
import { DocInterfaceProperties } from "./DocInterfaceProperties.js";

export const DocInterface = ({
  data,
}: {
  data: APIInterface;
}) => {
  const { members } = data;

  return <DocInterfaceProperties members={members} />;
};

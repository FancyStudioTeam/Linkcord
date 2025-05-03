import type { AnyTopLevelKind } from "#types/APIExtractor";
import { KIND_COLORS } from "#util/kindData";

export const Kind = ({
  kind,
}: {
  kind: AnyTopLevelKind;
}) => {
  const color = KIND_COLORS[kind].text;

  return <span className={`${color} text-md lowercase`}>{kind}</span>;
};

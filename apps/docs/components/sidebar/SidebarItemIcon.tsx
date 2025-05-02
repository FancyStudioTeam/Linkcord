import type { APIMemberKind } from "#types/APIExtractor";
import { kindData } from "#util/kindData";

export const SidebarItemIcon = ({
  kind,
}: {
  kind: APIMemberKind;
}) => {
  const data = kindData[kind];
  const icon = data?.icon;
  const color = data?.colors.text.normal;

  return icon?.(`${color} shrink-0`);
};

import type { ApiItemKind } from "@microsoft/api-extractor-model";
import { kindData } from "~/utils/kindData";

export const SidebarItemIcon = ({
  kind,
}: {
  kind: ApiItemKind;
}) => {
  const data = kindData[kind];
  const icon = data?.icon;
  const color = data?.colors.text.normal;

  return icon?.(`${color} shrink-0`);
};

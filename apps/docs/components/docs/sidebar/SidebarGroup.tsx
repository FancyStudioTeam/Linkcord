import { Collapsible } from "#components/ui/Collapsible.jsx";
import { APIMemberKind, type AnyEntryPointMember, type AnyTopLevelKind } from "#extractor/types";
import { SidebarGroupItem } from "./SidebarGroupItem.jsx";

const GROUP_KIND_LABELS: Record<AnyTopLevelKind, string> = {
  [APIMemberKind.Enum]: "Enumerations",
  [APIMemberKind.Interface]: "Interfaces",
  [APIMemberKind.TypeAlias]: "Types",
  [APIMemberKind.Variable]: "Variables",
};

export const SidebarGroup = ({
  items,
  kind,
}: {
  items: AnyEntryPointMember[];
  kind: AnyTopLevelKind;
}) => (
  <Collapsible
    items={items}
    renderItem={(item) => <SidebarGroupItem item={item} />}
    titleNode={<span className="text-sm">{GROUP_KIND_LABELS[kind]}</span>}
  />
);

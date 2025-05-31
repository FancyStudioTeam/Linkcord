import { APIMemberKind, type AnyEntryPointMember, type AnyEntryPointMemberKind } from "@fancystudioteam/api-extractor";
import { Collapsible } from "#components/ui/Collapsible.jsx";
import type { PackageName } from "#util/extractor";
import { SidebarGroupItem } from "./SidebarGroupItem.jsx";

const GROUP_KIND_LABELS: Record<AnyEntryPointMemberKind, string> = {
  [APIMemberKind.Class]: "Classes",
  [APIMemberKind.Enum]: "Enumerations",
  [APIMemberKind.Function]: "Functions",
  [APIMemberKind.Interface]: "Interfaces",
  [APIMemberKind.TypeAlias]: "Types",
  [APIMemberKind.Variable]: "Variables",
};

export const SidebarGroup = ({
  items,
  kind,
  packageName,
}: {
  items: AnyEntryPointMember[];
  kind: AnyTopLevelKind;
  packageName: PackageName;
}) => (
  <Collapsible
    items={items}
    renderItem={(item) => <SidebarGroupItem item={item} packageName={packageName} />}
    titleNode={<span className="text-sm">{GROUP_KIND_LABELS[kind]}</span>}
  />
);

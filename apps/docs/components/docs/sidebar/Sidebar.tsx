import type { AnyEntryPointMember, AnyEntryPointMemberKind } from "@fancystudioteam/api-extractor";
import { Separator } from "#components/ui/Separator";
import type { PackageName } from "#util/extractor.js";
import { groupByKind } from "#util/functions/groupByKind";
import { SidebarGroup } from "./SidebarGroup.js";
import { SidebarHeader } from "./SidebarHeader.js";

export const Sidebar = ({
  members,
  packageName,
}: {
  members: AnyEntryPointMember[];
  packageName: PackageName;
}) => {
  const groupedMembers = groupByKind(members);
  const entries = Object.entries(groupedMembers) as [AnyEntryPointMemberKind, AnyEntryPointMember[]][];

  return (
    <div className="hidden h-full w-full max-w-80 flex-col gap-4 rounded-lg border border-zinc-700 bg-zinc-900 p-6 md:flex">
      <SidebarHeader packageName={packageName} />
      <Separator />
      <div className="flex flex-col gap-4 overflow-y-auto">
        {entries.map(([kind, items]) => (
          <SidebarGroup items={items} key={kind} kind={kind} packageName={packageName} />
        ))}
      </div>
    </div>
  );
};

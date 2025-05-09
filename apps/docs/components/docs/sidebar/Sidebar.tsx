import { groupBy } from "es-toolkit";
import { toPairs } from "es-toolkit/compat";
import { Separator } from "#components/ui/Separator";
import type { AnyEntryPointMember, AnyTopLevelKind } from "#extractor/types";
import { SidebarGroup } from "./SidebarGroup.js";
import { SidebarHeader } from "./SidebarHeader.js";

export const Sidebar = ({
  members,
}: {
  members: AnyEntryPointMember[];
}) => {
  const groupedMembers = groupBy(members, (member) => member.kind);
  const entries = toPairs(groupedMembers) as [AnyTopLevelKind, AnyEntryPointMember[]][];

  return (
    <div className="hidden h-full w-full max-w-80 flex-col gap-4 rounded-lg border border-zinc-700 bg-zinc-900 p-6 md:flex">
      <SidebarHeader />
      <Separator />
      <div className="flex flex-col gap-4 overflow-y-auto">
        {entries.map(([kind, items]) => (
          <SidebarGroup items={items} key={kind} kind={kind} />
        ))}
      </div>
    </div>
  );
};

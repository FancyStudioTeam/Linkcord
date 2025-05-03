import { groupBy } from "es-toolkit";
import type { AnyTopLevelKind } from "#types/APIExtractor";
import type { AnyEntryPointMember } from "#types/APIMember";
import { SidebarGroup } from "./SidebarGroup.js";
import { SidebarHeader } from "./SidebarHeader.js";

export const Sidebar = ({
  members,
}: {
  members: AnyEntryPointMember[];
}) => {
  const groupedMembers = groupBy(members, (member) => member.kind);
  const entries = Object.entries(groupedMembers) as [AnyTopLevelKind, AnyEntryPointMember[]][];

  return (
    <div className="flex h-full w-full max-w-80 flex-col gap-4 rounded-lg border border-zinc-700 bg-zinc-900 p-6">
      <SidebarHeader />
      <hr className="border-zinc-700" />
      <div className="flex flex-col gap-4 overflow-y-auto">
        {entries.map(([groupName, groupMembers]) => (
          <SidebarGroup groupMembers={groupMembers} groupKind={groupName} key={groupName} />
        ))}
      </div>
    </div>
  );
};

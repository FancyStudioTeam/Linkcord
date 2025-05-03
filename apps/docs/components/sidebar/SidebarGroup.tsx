import { ChevronsUpDown } from "lucide-react";
import { Collapsible } from "radix-ui";
import { useState } from "react";
import { APIMemberKind, type AnyTopLevelKind } from "#types/APIExtractor.js";
import type { AnyEntryPointMember } from "#types/APIMember";
import { SidebarMember } from "./SidebarMember.jsx";

const GROUP_KIND_LABELS: Record<AnyTopLevelKind, string> = {
  [APIMemberKind.Enum]: "Enumerations",
  [APIMemberKind.Interface]: "Interfaces",
  [APIMemberKind.TypeAlias]: "Types",
  [APIMemberKind.Variable]: "Variables",
};

export const SidebarGroup = ({
  groupKind,
  groupMembers,
}: {
  groupKind: AnyTopLevelKind;
  groupMembers: AnyEntryPointMember[];
}) => {
  const [open, setOpen] = useState(true);

  return (
    <Collapsible.Root open={open} onOpenChange={setOpen}>
      <Collapsible.Trigger className="flex w-full cursor-pointer select-none items-center justify-between font-extrabold font-mono text-md transition-opacity hover:opacity-50">
        {GROUP_KIND_LABELS[groupKind]}
        <ChevronsUpDown className="size-5" />
      </Collapsible.Trigger>
      <Collapsible.Content className="mt-2 flex flex-col gap-2">
        {groupMembers.map((groupMember) => (
          <SidebarMember groupMember={groupMember} key={groupMember.name} />
        ))}
      </Collapsible.Content>
    </Collapsible.Root>
  );
};

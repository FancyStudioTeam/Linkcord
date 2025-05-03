import { ChevronsUpDown } from "lucide-react";
import { Collapsible } from "radix-ui";
import { Fragment, useState } from "react";
import type { EnumMemberData } from "#util/functions/extractor/getEnumData.js";
import { DocEnumMembersItem } from "./DocEnumMembersItem.js";

export const DocEnumMembers = ({
  enumMembers,
}: {
  enumMembers: EnumMemberData[];
}) => {
  const [open, setOpen] = useState(true);

  return (
    <Collapsible.Root open={open} onOpenChange={setOpen}>
      <Collapsible.Trigger className="flex w-full cursor-pointer items-center justify-between gap-2 font-extrabold font-mono text-xl transition-opacity hover:opacity-50">
        Members
        <ChevronsUpDown className="size-5" />
      </Collapsible.Trigger>
      <Collapsible.Content className="mt-4 flex flex-col gap-2">
        {enumMembers.map((member, index) => (
          <Fragment key={member.displayName}>
            {!!index && <hr className="border-zinc-700" />}
            <DocEnumMembersItem displayName={member.displayName} value={member.value} />
          </Fragment>
        ))}
      </Collapsible.Content>
    </Collapsible.Root>
  );
};

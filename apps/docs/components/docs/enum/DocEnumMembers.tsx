import { SquareChartGantt } from "lucide-react";
import { Collapsible } from "#components/ui/Collapsible";
import type { APIEnumMember } from "#extractor/types";
import { DocEnumMembersItem } from "./DocEnumMembersItem.jsx";

export const DocEnumMembers = ({
  members,
}: {
  members: APIEnumMember[];
}) => (
  <Collapsible
    enableSeparator={true}
    items={members}
    renderItem={(member) => <DocEnumMembersItem member={member} />}
    titleNode={
      <span className="flex items-center gap-2">
        <SquareChartGantt className="size-5 shrink-0 text-amber-500" />
        Members
      </span>
    }
  />
);

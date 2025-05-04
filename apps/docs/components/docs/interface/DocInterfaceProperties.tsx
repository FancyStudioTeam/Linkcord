import { Cuboid } from "lucide-react";
import { Collapsible } from "#components/ui/Collapsible";
import type { APIPropertySignature } from "#extractor/types";
import { DocInterfacePropertiesItem } from "./DocInterfacePropertiesItem.js";

export const DocInterfaceProperties = ({
  members,
}: {
  members: APIPropertySignature[];
}) => (
  <Collapsible
    enableSeparator={true}
    items={members}
    renderItem={(member) => <DocInterfacePropertiesItem member={member} />}
    titleNode={
      <span className="flex items-center gap-2">
        <Cuboid className="size-5 shrink-0 text-emerald-500" />
        Properties
      </span>
    }
  />
);

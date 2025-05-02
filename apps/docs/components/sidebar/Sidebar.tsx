import type { AnyEntryPointMember } from "#types/APIMember.js";
import { SidebarMember } from "./SidebarMember.jsx";

export const Sidebar = ({
  members,
}: {
  members: AnyEntryPointMember[];
}) => (
  <div
    className="flex h-full w-full max-w-80 flex-col gap-1 overflow-y-auto rounded-lg border border-zinc-700 bg-zinc-900 p-6"
    style={{
      scrollbarColor: "oklch(37% 0.013 285.805) oklch(21% 0.006 285.885)",
    }}
  >
    {members.map((member) => (
      <SidebarMember member={member} key={`${member.kind}:${member.name}`} />
    ))}
  </div>
);

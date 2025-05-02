import { entryPointMember } from "~/utils/model";
import { SidebarItem } from "./SidebarItem.jsx";

export const Sidebar = () => {
  return (
    <div
      className="flex h-full w-full max-w-80 flex-col gap-1 overflow-y-auto rounded-lg border border-zinc-700 bg-zinc-900 p-6"
      style={{
        scrollbarColor: "oklch(37% 0.013 285.805) oklch(21% 0.006 285.885)",
      }}
    >
      {entryPointMember?.members.map((item) => (
        <SidebarItem item={item} key={`${item.kind}:${item.displayName}`} />
      ))}
    </div>
  );
};

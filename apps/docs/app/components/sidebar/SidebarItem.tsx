import type { ApiItem } from "@microsoft/api-extractor-model";
import { Link } from "@remix-run/react";
import { SidebarItemIcon } from "./SidebarItemIcon.jsx";

function truncate(string: string, length: number) {
  return string.length > length ? `${string.slice(0, length - 3)}...` : string;
}

export const SidebarItem = ({
  item,
}: {
  item: ApiItem;
}) => {
  const name = item.displayName;
  const kind = item.kind;

  return (
    <Link className="flex items-center gap-2 font-mono text-sm" to={`/docs/${kind}:${name}`}>
      <SidebarItemIcon kind={kind} />
      {truncate(name, 25)}
    </Link>
  );
};

import { Link } from "@remix-run/react";
import type { AnyEntryPointMember } from "#types/APIMember.js";
import { SidebarItemIcon } from "./SidebarItemIcon.jsx";

function truncate(string: string, length: number) {
  return string.length > length ? `${string.slice(0, length - 3)}...` : string;
}

export const SidebarMember = ({
  member,
}: {
  member: AnyEntryPointMember;
}) => {
  const { kind, name } = member;

  return (
    <Link className="flex items-center gap-2 font-mono text-sm" to={`/docs/${kind}:${name}`}>
      <SidebarItemIcon kind={kind} />
      {truncate(name, 25)}
    </Link>
  );
};

import { Link } from "@remix-run/react";
import type { AnyEntryPointMember } from "#extractor/types";
import { KIND_COLORS, KIND_ICONS } from "#util/kindData.js";

function truncate(string: string, length: number) {
  return string.length > length ? `${string.slice(0, length - 3)}...` : string;
}

export const SidebarGroupItem = ({
  item,
}: {
  item: AnyEntryPointMember;
}) => {
  const { kind, name } = item;
  const color = KIND_COLORS[kind].text;
  const KindIcon = KIND_ICONS[kind];

  return (
    <Link
      className="flex items-center gap-2 font-mono text-sm transition-opacity hover:opacity-50"
      to={`/docs/${kind}:${name}`}
    >
      <KindIcon className={`${color} size-5 shrink-0`} />
      {truncate(name, 25)}
    </Link>
  );
};

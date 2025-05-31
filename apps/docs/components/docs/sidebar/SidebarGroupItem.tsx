import type { AnyEntryPointMemberKind } from "@fancystudioteam/api-extractor";
import { Link } from "@remix-run/react";
import { twMerge } from "tailwind-merge";
import { KIND_COLORS, KIND_ICONS } from "#util/data";
import type { PackageName } from "#util/extractor.js";

function truncate(string: string, length: number) {
  return string.length > length ? `${string.slice(0, length - 3)}...` : string;
}

export const SidebarGroupItem = ({
  item,
  packageName,
}: {
  item: AnyEntryPointMemberKind;
  packageName: PackageName;
}) => {
  const { kind, name } = item;
  const { icon } = KIND_COLORS[kind];
  const KindIcon = KIND_ICONS[kind];

  return (
    <Link
      className="flex items-center gap-2 font-mono text-sm transition-opacity hover:opacity-50"
      to={`/docs/${packageName}/${name}`}
    >
      <KindIcon className={twMerge("size-5 shrink-0", icon)} />
      {truncate(name, 25)}
    </Link>
  );
};

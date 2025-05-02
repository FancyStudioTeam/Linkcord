import type { APIMemberKind } from "#types/APIExtractor";
import { kindData } from "#util/kindData";

export function KindBadge({
  kind,
}: {
  kind: APIMemberKind;
}) {
  const data = kindData[kind];
  const icon = data?.icon;
  const color = data?.colors.text.light;
  const background = data?.colors.background;

  return (
    <span
      className={`${background} ${color} flex max-w-max items-center justify-center gap-1 rounded-full px-4 py-2 text-xs`}
    >
      {icon?.("size-4 shrink-0")}
      {kind}
    </span>
  );
}

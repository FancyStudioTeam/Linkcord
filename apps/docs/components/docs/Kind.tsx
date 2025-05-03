import { twMerge } from "tailwind-merge";
import type { AnyTopLevelKind } from "#extractor/types";
import { KIND_COLORS } from "#util/kindData";

export const Kind = ({
  kind,
}: {
  kind: AnyTopLevelKind;
}) => {
  const { background, border, text } = KIND_COLORS[kind];

  return (
    <span
      className={twMerge(
        "flex select-none items-center gap-2 rounded-full border px-2 py-0.5 font-medium text-xs",
        background,
        border,
        text,
      )}
    >
      {kind}
    </span>
  );
};

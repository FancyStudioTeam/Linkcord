import { Unlink } from "lucide-react";
import { Tooltip } from "radix-ui";
import { twMerge } from "tailwind-merge";
import { Separator } from "./Separator.jsx";

export const UndocumentedDiscordFeatureTooltip = ({
  color,
}: {
  color: string;
}) => (
  <Tooltip.Provider delayDuration={0}>
    <Tooltip.Root>
      <Tooltip.Trigger asChild={true} className="cursor-pointer">
        <Unlink className={twMerge("size-5 shrink-0", color)} />
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content className="flex w-full max-w-lg flex-col gap-2 rounded-lg border border-zinc-700 bg-zinc-900 p-4 shadow-black shadow-xl">
          <div className="flex select-none items-center gap-2 font-extrabold text-md">
            <Unlink className={twMerge("size-5 shrink-0", color)} />
            Undocumented Discord Feature
          </div>
          <Separator />
          <p className="text-xs text-zinc-400">
            This feature has not been oficially documented by Discord, meaning it may change or break at any time.
          </p>
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  </Tooltip.Provider>
);

import { Cuboid, ListTree, type LucideIcon, SquareChartGantt, Wrench } from "lucide-react";
import { APIMemberKind, type AnyTopLevelKind } from "#types/APIExtractor";

export const KIND_ICONS: Record<AnyTopLevelKind, LucideIcon> = {
  [APIMemberKind.Enum]: SquareChartGantt,
  [APIMemberKind.Interface]: ListTree,
  [APIMemberKind.TypeAlias]: Wrench,
  [APIMemberKind.Variable]: Cuboid,
};

export const KIND_COLORS: Record<AnyTopLevelKind, KindColors> = {
  [APIMemberKind.Enum]: {
    background: "bg-amber-950",
    text: "text-amber-500",
  },
  [APIMemberKind.Interface]: {
    background: "bg-emerald-950",
    text: "text-emerald-500",
  },
  [APIMemberKind.TypeAlias]: {
    background: "bg-rose-950",
    text: "text-rose-500",
  },
  [APIMemberKind.Variable]: {
    background: "bg-cyan-950",
    text: "text-cyan-500",
  },
};

interface KindColors {
  background: string;
  text: string;
}

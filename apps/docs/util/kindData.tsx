import { Cuboid, ListTree, SquareChartGantt, Wrench } from "lucide-react";
import type { ReactNode } from "react";
import { APIMemberKind, type AnyTopLevelKind } from "#types/APIExtractor";

export const kindData: Record<AnyTopLevelKind, KindData | undefined> = {
  [APIMemberKind.Enum]: {
    colors: {
      background: "bg-amber-950",
      text: "text-amber-500",
    },
    icon: <SquareChartGantt />,
  },
  [APIMemberKind.Interface]: {
    colors: {
      background: "bg-emerald-950",
      text: "text-emerald-500",
    },
    icon: <ListTree />,
  },
  [APIMemberKind.TypeAlias]: {
    colors: {
      background: "bg-rose-950",
      text: "text-rose-500",
    },
    icon: <Wrench />,
  },
  [APIMemberKind.Variable]: {
    colors: {
      background: "bg-cyan-950",
      text: "text-cyan-500",
    },
    icon: <Cuboid />,
  },
};

interface KindData {
  colors: KindDataColors;
  icon: ReactNode;
}

interface KindDataColors {
  background: string;
  text: string;
}

import { Cuboid, ListTree, type LucideIcon, type LucideProps, SquareChartGantt, Wrench } from "lucide-react";
import type { ReactNode } from "react";
import { APIMemberKind } from "#types/APIExtractor";

const createIcon = (Icon: LucideIcon, defaultProps?: LucideProps) => (props: LucideProps) => (
  <Icon {...defaultProps} {...props} />
);

export const kindData: Record<APIMemberKind, KindData | undefined> = {
  [APIMemberKind.CallSignature]: undefined,
  [APIMemberKind.Class]: undefined,
  [APIMemberKind.ConstructSignature]: undefined,
  [APIMemberKind.Constructor]: undefined,
  [APIMemberKind.EntryPoint]: undefined,
  [APIMemberKind.EnumMember]: undefined,
  [APIMemberKind.Enum]: {
    colors: {
      background: "bg-amber-950",
      text: {
        light: "text-amber-400",
        normal: "text-amber-500",
      },
    },
    icon: createIcon(SquareChartGantt),
  },
  [APIMemberKind.Function]: undefined,
  [APIMemberKind.IndexSignature]: undefined,
  [APIMemberKind.Interface]: {
    colors: {
      background: "bg-emerald-950",
      text: {
        light: "text-emerald-400",
        normal: "text-emerald-500",
      },
    },
    icon: createIcon(ListTree),
  },
  [APIMemberKind.MethodSignature]: undefined,
  [APIMemberKind.Method]: undefined,
  [APIMemberKind.Model]: undefined,
  [APIMemberKind.Namespace]: undefined,
  [APIMemberKind.None]: undefined,
  [APIMemberKind.Package]: undefined,
  [APIMemberKind.PropertySignature]: undefined,
  [APIMemberKind.Property]: undefined,
  [APIMemberKind.TypeAlias]: {
    colors: {
      background: "bg-rose-950",
      text: {
        light: "text-rose-400",
        normal: "text-rose-500",
      },
    },
    icon: createIcon(Wrench),
  },
  [APIMemberKind.Variable]: {
    colors: {
      background: "bg-cyan-950",
      text: {
        light: "text-cyan-400",
        normal: "text-cyan-500",
      },
    },
    icon: createIcon(Cuboid),
  },
};

type IconRenderer = (props: LucideProps) => ReactNode;

interface KindData {
  colors: KindDataColors;
  icon: IconRenderer;
}

interface KindDataColors {
  background: string;
  text: KindDataColorText;
}

interface KindDataColorText {
  light: string;
  normal: string;
}

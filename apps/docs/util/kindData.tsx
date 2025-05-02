import { typeSquare as TypeSquare } from "@lucide/lab";
import { Box, Icon, SquareChartGantt, Wrench } from "lucide-react";
import type { ReactNode } from "react";
import { APIMemberKind } from "#types/APIExtractor";

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
    icon: (classNames?: string) => <SquareChartGantt className={classNames} />,
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
    icon: (classNames?: string) => <Box className={classNames} />,
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
    icon: (classNames?: string) => <Icon className={classNames} iconNode={TypeSquare} />,
  },
  [APIMemberKind.Variable]: {
    colors: {
      background: "bg-blue-950",
      text: {
        light: "text-blue-400",
        normal: "text-blue-500",
      },
    },
    icon: (classNames?: string) => <Wrench className={classNames} />,
  },
};

interface KindData {
  colors: KindDataColors;
  icon: (classNames?: string) => ReactNode;
}

interface KindDataColors {
  background: string;
  text: KindDataColorText;
}

interface KindDataColorText {
  light: string;
  normal: string;
}

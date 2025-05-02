import { typeSquare as TypeSquare } from "@lucide/lab";
import { ApiItemKind } from "@microsoft/api-extractor-model";
import { Box, Icon, SquareChartGantt, Wrench } from "lucide-react";
import type { ReactNode } from "react";

export const kindData: Record<ApiItemKind, KindData | undefined> = {
  [ApiItemKind.CallSignature]: undefined,
  [ApiItemKind.Class]: undefined,
  [ApiItemKind.ConstructSignature]: undefined,
  [ApiItemKind.Constructor]: undefined,
  [ApiItemKind.EntryPoint]: undefined,
  [ApiItemKind.EnumMember]: undefined,
  [ApiItemKind.Enum]: {
    colors: {
      background: "bg-amber-950",
      text: {
        light: "text-amber-400",
        normal: "text-amber-500",
      },
    },
    icon: (classNames?: string) => <SquareChartGantt className={classNames} />,
  },
  [ApiItemKind.Function]: undefined,
  [ApiItemKind.IndexSignature]: undefined,
  [ApiItemKind.Interface]: {
    colors: {
      background: "bg-emerald-950",
      text: {
        light: "text-emerald-400",
        normal: "text-emerald-500",
      },
    },
    icon: (classNames?: string) => <Box className={classNames} />,
  },
  [ApiItemKind.MethodSignature]: undefined,
  [ApiItemKind.Method]: undefined,
  [ApiItemKind.Model]: undefined,
  [ApiItemKind.Namespace]: undefined,
  [ApiItemKind.None]: undefined,
  [ApiItemKind.Package]: undefined,
  [ApiItemKind.PropertySignature]: undefined,
  [ApiItemKind.Property]: undefined,
  [ApiItemKind.TypeAlias]: {
    colors: {
      background: "bg-rose-950",
      text: {
        light: "text-rose-400",
        normal: "text-rose-500",
      },
    },
    icon: (classNames?: string) => <Icon className={classNames} iconNode={TypeSquare} />,
  },
  [ApiItemKind.Variable]: {
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

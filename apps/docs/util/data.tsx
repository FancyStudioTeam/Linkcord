import { APIMemberKind, type AnyEntryPointMemberKind } from "@fancystudioteam/api-extractor";
import {
  Asterisk,
  BookType,
  Cuboid,
  ListTree,
  type LucideIcon,
  Network,
  SquareChartGantt,
  SquareFunction,
  Volume2,
  Wrench,
} from "lucide-react";
import { PackageName } from "./extractor.js";

export const KIND_ICONS: Record<AnyEntryPointMemberKind, LucideIcon> = {
  [APIMemberKind.Class]: Network,
  [APIMemberKind.Enum]: SquareChartGantt,
  [APIMemberKind.Function]: SquareFunction,
  [APIMemberKind.Interface]: ListTree,
  [APIMemberKind.TypeAlias]: Wrench,
  [APIMemberKind.Variable]: Cuboid,
};

export const KIND_COLORS: Record<AnyEntryPointMemberKind, KindColors> = {
  [APIMemberKind.Class]: {
    background: "bg-indigo-950",
    border: "border-indigo-500",
    icon: "text-indigo-500",
    text: "text-indigo-500",
  },
  [APIMemberKind.Enum]: {
    background: "bg-amber-950",
    border: "border-amber-500",
    icon: "text-amber-500",
    text: "text-amber-500",
  },
  [APIMemberKind.Function]: {
    background: "bg-blue-950",
    border: "border-blue-500",
    icon: "text-blue-500",
    text: "text-blue-500",
  },
  [APIMemberKind.Interface]: {
    background: "bg-emerald-950",
    border: "border-emerald-500",
    icon: "text-emerald-500",
    text: "text-emerald-500",
  },
  [APIMemberKind.TypeAlias]: {
    background: "bg-rose-950",
    border: "border-rose-500",
    icon: "text-rose-500",
    text: "text-rose-500",
  },
  [APIMemberKind.Variable]: {
    background: "bg-cyan-950",
    border: "border-cyan-500",
    icon: "text-cyan-500",
    text: "text-cyan-500",
  },
};

export const PACKAGE_NAMES: Record<PackageName, string> = {
  [PackageName.Gateway]: "Gateway",
  [PackageName.Linkcord]: "Linkcord",
  [PackageName.Types]: "Types",
  [PackageName.Voice]: "Voice",
};

export const PACKAGE_ICONS: Record<PackageName, LucideIcon> = {
  [PackageName.Gateway]: Network,
  [PackageName.Linkcord]: Asterisk,
  [PackageName.Types]: BookType,
  [PackageName.Voice]: Volume2,
};

interface KindColors {
  background: string;
  border: string;
  icon: string;
  text: string;
}

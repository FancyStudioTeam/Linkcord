import {
  Asterisk,
  BookType,
  Cuboid,
  Globe,
  ListTree,
  type LucideIcon,
  Network,
  SquareChartGantt,
  Volume2,
  Wrench,
} from "lucide-react";
import { APIMemberKind, type AnyTopLevelKind } from "#extractor/types";
import { PackageName } from "./extractor.js";

export const KIND_ICONS: Record<AnyTopLevelKind, LucideIcon> = {
  [APIMemberKind.Enum]: SquareChartGantt,
  [APIMemberKind.Interface]: ListTree,
  [APIMemberKind.TypeAlias]: Wrench,
  [APIMemberKind.Variable]: Cuboid,
};

export const KIND_COLORS: Record<AnyTopLevelKind, KindColors> = {
  [APIMemberKind.Enum]: {
    background: "bg-amber-950",
    border: "border-amber-500",
    icon: "text-amber-500",
    text: "text-amber-500",
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
  [PackageName.Rest]: "REST",
  [PackageName.Types]: "Types",
  [PackageName.Utils]: "Utils",
  [PackageName.Voice]: "Voice",
};

export const PACKAGE_ICONS: Record<PackageName, LucideIcon> = {
  [PackageName.Gateway]: Network,
  [PackageName.Linkcord]: Asterisk,
  [PackageName.Rest]: Globe,
  [PackageName.Types]: BookType,
  [PackageName.Utils]: Wrench,
  [PackageName.Voice]: Volume2,
};

interface KindColors {
  background: string;
  border: string;
  icon: string;
  text: string;
}

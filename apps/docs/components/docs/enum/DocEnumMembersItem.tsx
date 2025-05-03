import { SquareChartGantt } from "lucide-react";

export const DocEnumMembersItem = ({
  displayName,
  value,
}: {
  displayName: string;
  value: string;
}) => (
  <div className="flex items-center gap-2 font-mono">
    <SquareChartGantt className="shrink-0 text-amber-500" />
    <span className="font-extrabold">{displayName}</span> = {value}
  </div>
);

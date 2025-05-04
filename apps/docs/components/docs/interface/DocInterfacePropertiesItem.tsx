import { Link } from "@remix-run/react";
import { UndocumentedDiscordFeatureTooltip } from "#components/ui/UndocumentedDiscordFeatureTooltip";
import { getPropertyType } from "#extractor/functions/getPropertyType";
import { type APIPropertySignature, APIReleaseTag } from "#extractor/types";

export const DocInterfacePropertiesItem = ({
  member,
}: {
  member: APIPropertySignature;
}) => {
  const { isOptional, name, releaseTag } = member;
  const value = getPropertyType(member);

  return (
    <div className="flex items-center gap-2">
      {releaseTag === APIReleaseTag.Alpha && <UndocumentedDiscordFeatureTooltip color={"text-emerald-500"} />}
      {isOptional && (
        <span className="boder-cyan-500 rounded-full border bg-cyan-950 px-2 py-0.5 text-cyan-500 text-xs lowercase">
          Optional
        </span>
      )}
      <Link className="font-extrabold" id={name} to={`#${name}`}>
        {name}
        {isOptional && "?"}:
      </Link>
      <Link className="text-indigo-500" to={"#"}>
        {value}
      </Link>
    </div>
  );
};

import { type APIEnumMember, APIReleaseTag } from "@fancystudioteam/api-extractor";
import { UndocumentedDiscordFeatureTooltip } from "#components/ui/UndocumentedDiscordFeatureTooltip";
import { getEnumMemberValue } from "#extractor/functions/getEnumMemberValue";

export const DocEnumMembersItem = ({
  member,
}: {
  member: APIEnumMember;
}) => {
  const { name, releaseTag } = member;
  const value = getEnumMemberValue(member);

  return (
    <div className="flex items-center gap-2">
      {releaseTag === APIReleaseTag.Alpha && <UndocumentedDiscordFeatureTooltip color={"text-amber-500"} />}
      <span className="font-extrabold">{name}</span> = {value}
    </div>
  );
};

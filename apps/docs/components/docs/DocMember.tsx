import { APIReleaseTag, type AnyEntryPointMember } from "@fancystudioteam/api-extractor";
import { CodeBlock } from "#components/CodeBlock";
import { Separator } from "#components/ui/Separator";
import { UndocumentedDiscordFeatureTooltip } from "#components/ui/UndocumentedDiscordFeatureTooltip";
import { KIND_COLORS } from "#util/data";
import { getDocData } from "#util/functions/getDocData";
import { AutomaticScroll } from "./AutomaticScroll.js";
import { Kind } from "./Kind.jsx";

export const DocMember = ({
  data,
  htmlCodeBlock,
}: {
  data: AnyEntryPointMember;
  htmlCodeBlock: string;
}) => {
  const { kind, name, releaseTag } = data;
  const { icon } = KIND_COLORS[kind];
  const docData = getDocData(data);

  return (
    <div className="flex flex-col gap-6">
      <AutomaticScroll>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <Kind kind={kind} />
            <h1 className="flex items-center gap-2 font-extrabold text-2xl">
              {name}
              {releaseTag === APIReleaseTag.Alpha && <UndocumentedDiscordFeatureTooltip color={icon} />}
            </h1>
          </div>
          <CodeBlock htmlCodeBlock={htmlCodeBlock} />
        </div>
        {docData && (
          <>
            <Separator />
            {docData}
          </>
        )}
      </AutomaticScroll>
    </div>
  );
};

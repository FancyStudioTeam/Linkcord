import { CodeBlock } from "#components/CodeBlock";
import type { AnyMemberData } from "#util/functions/extractor/getMemberData";
import { getDocData } from "#util/functions/getDocData.js";
import { Kind } from "./Kind.jsx";

export const DocMember = ({
  memberData,
}: {
  memberData: AnyMemberData;
}) => {
  const { displayName, excerptToken, kind } = memberData;
  const docDataComponent = getDocData(memberData);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <h1 className="flex items-center gap-4 font-extrabold font-mono text-2xl">
          <Kind kind={kind} />
          {displayName}
        </h1>
        {excerptToken && <CodeBlock html={excerptToken.htmlCodeBlock} />}
      </div>
      <hr className="border-zinc-700" />
      {docDataComponent}
    </div>
  );
};

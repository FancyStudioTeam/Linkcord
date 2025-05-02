import type { LoaderFunctionArgs } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { CodeBlock } from "#components/CodeBlock";
import { KindBadge } from "#components/docs/KindBadge";
import type { APIMemberKind } from "#types/APIExtractor";
import { getTypeMembers } from "#util/apiExtractor";
import { makeCodeBlock } from "#util/makeCodeBlock";
import { notFound } from "#util/responses/notFound";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { name: _name } = params;
  const [_memberKind, _memberName] = _name?.split(":") ?? "";

  if (!(_memberKind && _memberName)) {
    throw notFound();
  }

  const members = await getTypeMembers();
  const member = members.find((member) => member.kind === _memberKind && member.name === _memberName);

  if (!member) {
    throw notFound();
  }

  const { kind, name } = member;
  const data: MemberData = {
    kind,
    name,
  };

  if ("excerptTokens" in member) {
    const fullExcerptToken = member.excerptTokens
      .map((token) => token.text)
      .join("")
      .trim();
    const codeBlock = await makeCodeBlock(fullExcerptToken);

    data.codeBlock = codeBlock;
  }

  return data;
};

export default () => {
  const member = useLoaderData<typeof loader>();
  const { codeBlock, kind, name } = member;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 rounded-lg border border-zinc-700 bg-zinc-900 p-6">
        <h1 className="flex items-center gap-2 font-bold font-mono text-2xl">
          <KindBadge kind={kind} />
          {name}
        </h1>
        {/*codeBlock && (
          <>
            <hr className="border-zinc-700" />
            <CodeBlock html={codeBlock} />
          </>
        )*/}
      </div>
    </div>
  );
};

interface MemberData {
  codeBlock?: string;
  kind: APIMemberKind;
  name: string;
}

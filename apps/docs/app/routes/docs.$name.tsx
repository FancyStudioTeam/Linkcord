import type {
  ApiClass,
  ApiEnum,
  ApiEnumMember,
  ApiFunction,
  ApiInterface,
  ApiItemKind,
  ApiMethod,
  ApiProperty,
  ApiVariable,
} from "@microsoft/api-extractor-model";
import type { LoaderFunctionArgs } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { CodeBlock } from "~/components/CodeBlock";
import { KindBadge } from "~/components/docs/KindBadge";
import { makeCodeBlock } from "~/utils/makeCodeBlock";
import { entryPointMember } from "~/utils/model";
import { notFound } from "~/utils/notFound";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { name: _name } = params;
  const [kind, name] = _name?.split(":") ?? "";

  if (!(kind && name)) {
    throw notFound();
  }

  const member = entryPointMember?.members.find(
    (member) => member.kind === kind && member.displayName === name,
  ) as AnyApiMember;

  if (!member) {
    throw notFound();
  }

  const data: MemberData = {
    kind: member.kind,
    name: member.displayName,
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
        {codeBlock && (
          <>
            <hr className="border-zinc-700" />
            <CodeBlock html={codeBlock} />
          </>
        )}
      </div>
    </div>
  );
};

type AnyApiMember =
  | ApiClass
  | ApiEnum
  | ApiEnumMember
  | ApiFunction
  | ApiInterface
  | ApiMethod
  | ApiProperty
  | ApiVariable;

interface MemberData {
  codeBlock?: string;
  kind: ApiItemKind;
  name: string;
}

import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { DocMember } from "#components/docs/DocMember";
import { formatExcerptTokens } from "#extractor/functions/formatExcerptTokens";
import { getTypeMembers } from "#util/extractor";
import { createMetadata } from "#util/functions/createMetadata";
import { makeCodeBlock } from "#util/makeCodeBlock";
import { notFound } from "#util/responses/notFound";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { name: _name } = params;
  const [_memberKind, _memberName] = _name?.split(":") ?? "";

  if (!(_memberKind && _memberName)) {
    throw notFound();
  }

  const members = getTypeMembers();
  const member = members.find((member) => member.kind === _memberKind && member.name === _memberName);

  if (!member) {
    throw notFound();
  }

  const { excerptTokens } = member;
  const formattedExcerptTokens = formatExcerptTokens(excerptTokens);
  const htmlCodeBlock = await makeCodeBlock(formattedExcerptTokens);

  return {
    _data: member,
    htmlCodeBlock,
  };
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (data) {
    const { _data: member } = data;
    const { name, kind } = member;
    const title = `${kind}: ${name}`;

    return createMetadata([
      ["og:locale", "en"],
      ["og:title", title],
      ["og:type", "website"],
      ["title", title],
    ]);
  }

  return [];
};

export default () => {
  const { _data: data, htmlCodeBlock } = useLoaderData<typeof loader>();

  return <DocMember data={data} htmlCodeBlock={htmlCodeBlock} />;
};

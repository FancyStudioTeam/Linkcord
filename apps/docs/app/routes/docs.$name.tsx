import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { DocMember } from "#components/docs/DocMember";
import { formatExcerptTokens } from "#extractor/functions/formatExcerptTokens";
import { getMember } from "#extractor/functions/getMember";
import { createMetadata } from "#util/functions/createMetadata";
import { BASE_URL } from "#util/links";
import { makeCodeBlock } from "#util/makeCodeBlock";
import { notFound } from "#util/responses/notFound";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { name: _name } = params;
  const [_memberKind, _memberName] = _name?.split(":") ?? "";
  const member = getMember(_memberName, _memberKind);

  if (!(_memberKind && _memberName && member)) {
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

export const meta: MetaFunction<typeof loader> = ({ data, location }) => {
  const { pathname } = location;

  if (data) {
    const { _data: member } = data;
    const { name, kind } = member;
    const title = `${kind}: ${name}`;

    return createMetadata([
      ["og:image", `${BASE_URL}${pathname}/open_graph.svg`],
      ["og:locale", "en"],
      ["og:title", title],
      ["og:type", "website"],
      ["og:url", `${BASE_URL}${pathname}`],
      ["title", title],
    ]);
  }

  return [];
};

export default () => {
  const { _data: data, htmlCodeBlock } = useLoaderData<typeof loader>();

  return <DocMember data={data} htmlCodeBlock={htmlCodeBlock} />;
};

import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { DocMember } from "#components/docs/DocMember";
import { formatExcerptTokens } from "#extractor/functions";
import { createMetadata } from "#util/functions/createMetadata";
import { getPackageMember } from "#util/functions/getPackageMember";
import { getPackageMembers } from "#util/functions/getPackageMembers";
import { BASE_URL } from "#util/links";
import { makeCodeBlock } from "#util/makeCodeBlock";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { package: _package, name: _name } = params;
  const members = getPackageMembers(_package);
  const member = getPackageMember(members, _name);
  const { excerptTokens } = member;
  const formattedExcerptTokens = formatExcerptTokens(excerptTokens);
  const htmlCodeBlock = await makeCodeBlock(formattedExcerptTokens);

  return {
    data: member,
    htmlCodeBlock,
  };
};

export const meta: MetaFunction<typeof loader> = ({ data, location }) => {
  const { pathname } = location;

  if (data) {
    const { data: member } = data;
    const { name, kind } = member;
    const title = `${kind}: ${name}`;

    return createMetadata([
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
  const { data, htmlCodeBlock } = useLoaderData<typeof loader>();

  return <DocMember data={data} htmlCodeBlock={htmlCodeBlock} />;
};

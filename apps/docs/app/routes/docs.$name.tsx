import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { DocMember } from "#components/docs/DocMember";
import { getTypeMembers } from "#util/extractor";
import { createMetadata } from "#util/functions/createMetadata";
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

  return member;
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (data) {
    const { name, kind } = data;
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
  const memberData = useLoaderData<typeof loader>();

  return <DocMember memberData={memberData} />;
};

import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { DocMember } from "#components/docs/DocMember";
import { getTypeMembers } from "#util/apiExtractor";
import { getMemberData } from "#util/functions/extractor/getMemberData";
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

  const memberData = await getMemberData(member);

  return memberData;
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (data) {
    const { displayName, kind } = data;

    return [
      {
        title: `${kind}: ${displayName}`,
      },
    ];
  }

  return [];
};

export default () => {
  const memberData = useLoaderData<typeof loader>();

  return <DocMember memberData={memberData} />;
};

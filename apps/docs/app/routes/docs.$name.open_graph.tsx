import type { LoaderFunctionArgs } from "@remix-run/cloudflare";
import { getMember } from "#extractor/functions/getMember";
import { createOpenGraphImage } from "#util/functions/createOpenGraphImage";
import { notFound } from "#util/responses/notFound";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { name: _name } = params;
  const [_memberKind, _memberName] = _name?.split(":") ?? "";
  const member = getMember(_memberName, _memberKind);

  if (!(_memberKind && _memberName && member)) {
    throw notFound();
  }

  const dynamicImage = await createOpenGraphImage(member);

  return new Response(dynamicImage, {
    headers: {
      "Content-Type": "image/svg+xml",
    },
  });
};

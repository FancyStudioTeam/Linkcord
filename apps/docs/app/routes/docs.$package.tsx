import type { LoaderFunctionArgs } from "@remix-run/cloudflare";
import { Outlet, useLoaderData } from "@remix-run/react";
import { Navbar } from "#components/docs/navbar/Navbar";
import { Sidebar } from "#components/docs/sidebar/Sidebar";
import type { MembersFunction } from "#extractor/APIExtractor";
import {
  PackageName,
  availablePackages,
  getGatewayMembers,
  getLinkcordMembers,
  getTypeMembers,
  getVoiceMembers,
} from "#util/extractor";
import { notFound } from "#util/responses/notFound";

export const loader = ({ params }: LoaderFunctionArgs) => {
  const { package: _package } = params;

  if (!(_package && availablePackages.includes(_package as PackageName))) {
    throw notFound();
  }

  const packageName = _package as PackageName;
  const packages: Record<PackageName, MembersFunction> = {
    [PackageName.Gateway]: getGatewayMembers,
    [PackageName.Linkcord]: getLinkcordMembers,
    [PackageName.Types]: getTypeMembers,
    [PackageName.Voice]: getVoiceMembers,
  };
  const members = packages[packageName]();

  return {
    members,
  };
};

export default function Layout() {
  const { members } = useLoaderData<typeof loader>();

  return (
    <div className="flex h-screen w-full flex-col gap-6 p-6 md:flex-row">
      <Navbar />
      <Sidebar members={members} />
      <div className="flex h-full max-h-screen w-full justify-center rounded-lg border border-zinc-700 bg-zinc-900 p-6">
        <div className="w-full max-w-5xl overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

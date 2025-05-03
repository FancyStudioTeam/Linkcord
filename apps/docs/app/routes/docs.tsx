import { Outlet, useLoaderData } from "@remix-run/react";
import { Sidebar } from "#components/sidebar/Sidebar";
import { getTypeMembers } from "#util/apiExtractor";

export const loader = async () => {
  const members = await getTypeMembers();

  return {
    members,
  };
};

export default function Layout() {
  const { members } = useLoaderData<typeof loader>();

  return (
    <div className="flex h-screen flex-row gap-6 p-6">
      <Sidebar members={members} />
      <div className="flex h-full max-h-screen w-full justify-center overflow-y-auto rounded-lg border border-zinc-700 bg-zinc-900 p-6">
        <div className="w-full max-w-5xl">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

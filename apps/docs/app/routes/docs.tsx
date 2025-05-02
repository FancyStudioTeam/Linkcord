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
      <div className="flex h-full w-full items-center justify-center">
        <div className="h-full w-full max-w-7xl">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

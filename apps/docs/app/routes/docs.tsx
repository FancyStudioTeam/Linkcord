import { Outlet } from "@remix-run/react";
import { Sidebar } from "~/components/sidebar/Sidebar";

export default function Layout() {
  return (
    <div className="flex h-screen flex-row gap-6 p-6">
      <Sidebar />
      <div className="flex h-full w-full items-center justify-center">
        <div className="h-full w-full max-w-7xl">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

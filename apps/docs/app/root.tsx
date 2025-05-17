import "./base.css";
import { Outlet, isRouteErrorResponse, useRouteError } from "@remix-run/react";
import type { ReactNode } from "react";

export const Layout = ({
  children,
}: {
  children: ReactNode;
}) => <Layout>{children}</Layout>;

export const ErrorBoundary = () => {
  const error = useRouteError();
  const isRouteError = isRouteErrorResponse(error);
  const node = isRouteError ? (
    <>
      <h1 className="font-extrabold text-5xl">{error.status}</h1>
      {error.statusText && <p className="text-sm text-zinc-400">{error.statusText}</p>}
    </>
  ) : (
    <>
      <h1 className="font-extrabold text-5xl">Something went wrong...</h1>
    </>
  );

  return (
    <Layout>
      <div className="flex h-dvh w-full flex-col items-center justify-center gap-4">
        <div className="flex w-full max-w-md flex-col gap-4">
          <div className="flex flex-col items-center justify-center gap-4 rounded-md border border-zinc-700 bg-zinc-900 p-6 text-center">
            {node}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default () => <Outlet />;

import "./base.css";
import { Links, Meta, Outlet, Scripts, ScrollRestoration, isRouteErrorResponse, useRouteError } from "@remix-run/react";
import type { ReactNode } from "react";

export const Layout = ({
  children,
}: {
  children: ReactNode;
}) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <Meta />
      <Links />
    </head>
    <body className="bg-zinc-950 font-mono text-white">
      {children}
      <ScrollRestoration />
      <Scripts />
    </body>
  </html>
);

export default () => <Outlet />;

export const ErrorBoundary = () => {
  const error = useRouteError();
  const isRouteError = isRouteErrorResponse(error);

  if (isRouteError) {
    const { status, statusText } = error;

    return (
      <div className="flex h-dvh w-full flex-col items-center justify-center gap-4">
        <div className="flex w-full max-w-md flex-col gap-4">
          <div className="flex flex-col items-center justify-center gap-4 rounded-md border border-zinc-700 bg-zinc-900 p-6">
            <h1 className="font-extrabold text-5xl">{status}</h1>
            {statusText && <p className="text-sm text-zinc-400">{statusText}</p>}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-dvh w-full flex-col items-center justify-center gap-4">
      <div className="flex w-full max-w-md flex-col gap-4">
        <div className="flex flex-col items-center justify-center gap-4 rounded-md border border-zinc-700 bg-zinc-900 p-6">
          <h1 className="font-extrabold text-5xl">Something went wrong...</h1>
        </div>
      </div>
    </div>
  );
};

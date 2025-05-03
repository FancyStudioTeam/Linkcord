import "./base.css";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
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

import { redirect } from "@remix-run/cloudflare";

export const loader = async () => redirect("/docs");

export default () => null;

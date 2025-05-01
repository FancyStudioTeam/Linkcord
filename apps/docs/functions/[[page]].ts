import { createPagesFunctionHandler } from "@remix-run/cloudflare-pages";
// @ts-expect-error
// biome-ignore lint/style/noNamespaceImport:
// biome-ignore lint/correctness/useImportExtensions:
import * as build from "../build/server";

export const onRequest = createPagesFunctionHandler({
  build,
  mode: process.env.NODE_ENV,
});

import { createPagesFunctionHandler } from "@remix-run/cloudflare-pages";
// @ts-ignore
// biome-ignore lint/style/noNamespaceImport:
// biome-ignore lint/correctness/useImportExtensions:
import * as build from "../build/server";

export const onRequest = createPagesFunctionHandler({
  build,
  mode: process.env.NODE_ENV,
});

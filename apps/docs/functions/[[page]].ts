import { createPagesFunctionHandler } from "@remix-run/cloudflare-pages";
// @ts-expect-error
// biome-ignore lint/style/noNamespaceImport:
import * as build from "../build/server.js";

export const onRequest = createPagesFunctionHandler({
  build,
});

import mdx from "@mdx-js/rollup";
import { vitePlugin as remix, cloudflareDevProxyVitePlugin as remixCloudflareDevProxy } from "@remix-run/dev";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import arrayBuffer from "vite-plugin-arraybuffer";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  assetsInclude: ["**/*.ttf"],
  plugins: [
    arrayBuffer(),
    mdx(),
    remixCloudflareDevProxy(),
    remix({
      future: {
        // biome-ignore lint/style/useNamingConvention:
        v3_fetcherPersist: true,
        // biome-ignore lint/style/useNamingConvention:
        v3_lazyRouteDiscovery: true,
        // biome-ignore lint/style/useNamingConvention:
        v3_relativeSplatPath: true,
        // biome-ignore lint/style/useNamingConvention:
        v3_singleFetch: true,
        // biome-ignore lint/style/useNamingConvention:
        v3_throwAbortReason: true,
      },
    }),
    tailwindcss(),
    tsconfigPaths(),
  ],
});

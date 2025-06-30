import { defineConfig } from "vitest/config";
import tsconfigPaths from "vitest-tsconfig-paths";

export default defineConfig({
    plugins: [
        tsconfigPaths({
            projects: ["tsconfig.json"],
        }),
    ],
    test: {
        reporters: ["verbose"],
    },
});

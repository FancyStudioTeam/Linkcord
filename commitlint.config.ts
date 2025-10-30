import type { UserConfig } from "@commitlint/types";

// biome-ignore lint/style/noDefaultExport: Default exports are allowed for configuration files.
export default (<UserConfig>{
	extends: ["@commitlint/config-conventional"],
});

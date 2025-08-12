import type { UserConfig } from "@commitlint/types";

const configuration: UserConfig = {
	extends: ["@commitlint/config-conventional"],
	rules: {
		"type-enum": [
			2,
			"always",
			[
				"api-docs",
				"builders",
				"chore",
				"ci",
				"client",
				"docs",
				"feat",
				"fix",
				"gateway",
				"refactor",
				"rest",
				"style",
				"test",
				"types",
			],
		],
	},
};

export default configuration;

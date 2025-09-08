/**
 * @type {import("typedoc").TypeDocOptions}
 */
const configuration = {
	categorizeByGroup: true,
	entryPointStrategy: "Expand",
	entryPoints: ["./src/index.ts"],
	excludePrivate: true,
	excludeProtected: true,
	hideGenerator: true,
	includeHierarchySummary: true,
	includeVersion: true,
	name: "Linkcord",
	navigation: {
		includeCategories: true,
		includeFolders: true,
		includeGroups: true,
	},
	out: ".typedoc",
	plugin: ["typedoc-material-theme"],
	themeColor: "#2D3748",
	tsconfig: "./tsconfig.json",
};

export default configuration;

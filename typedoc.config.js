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
	kindSortOrder: ["Class", "Enum", "TypeLiteral", "Interface", "Variable"],
	name: "Linkcord",
	navigation: {
		includeCategories: true,
		includeFolders: true,
		includeGroups: true,
	},
	out: ".typedoc",
	plugin: ["typedoc-material-theme"],
	sort: ["kind", "alphabetical"],
	themeColor: "#E0E3FF",
	tsconfig: "./tsconfig.json",
};

export default configuration;

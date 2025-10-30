/**
 * @type {import("typedoc").TypeDocOptions}
 */

// biome-ignore lint/style/noDefaultExport: Default exports are allowed for configuration files.
export default {
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

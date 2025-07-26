/**
 * @type {import("typedoc").TypeDocOptions}
 */
const configuration = {
	entryPoints: ["./src/index.ts"],
	excludePrivate: true,
	excludeProtected: true,
	includeHierarchySummary: true,
	includeVersion: true,
	out: ".typedoc",
	plugin: ["typedoc-material-theme"],
};

export default configuration;

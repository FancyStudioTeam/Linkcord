import { tryImport } from "../tryImport.js";

describe("Function: tryImport", () => {
	it("Should check if the provided module is installed", async () => {
		const result = await tryImport<NodeFSModuleImport>("node:fs");

		expect(result).toBeDefined();
		expect(result?.readFileSync).toBeTypeOf("function");
	});

	it("Should return null if the provided module is not installed", async () => {
		const result = await tryImport<null>("non-existent-module");
		const expectedResult = null;

		expect(result).toBe(expectedResult);
	});
});

type NodeFSModuleImport = typeof import("node:fs");

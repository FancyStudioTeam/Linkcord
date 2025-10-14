import { tryImport } from "../tryImport.js";

describe("Function: tryImport", () => {
	it("Should check if the given module is installed", async () => {
		const result = await tryImport<typeof import("node:fs")>("node:fs");

		expect(result).toBeDefined();
		expect(result?.readFileSync).toBeInstanceOf(Function);
	});

	it("Should return null if the given module is not installed", async () => {
		const result = await tryImport("non-existent-module");
		const expectedResult = null;

		expect(result).toBe(expectedResult);
	});
});

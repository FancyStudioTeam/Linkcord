import { tryImport } from "../tryImport.js";

describe("Function: tryImport", () => {
	it("GIVEN installed module THEN checks if module has function 'readFileSync'", async () => {
		const result = await tryImport<typeof import("node:fs")>("node:fs");

		expect(result).toBeDefined();
		expect(result?.readFileSync).toBeInstanceOf(Function);
	});

	it("GIVEN uninstalled module THEN returns 'null'", async () => {
		const result = await tryImport("non-existent-module");
		const expectedResult = null;

		expect(result).toBe(expectedResult);
	});
});

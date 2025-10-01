import { tryImport } from "../tryImport.js";

describe("Function: tryImport", () => {
	it("GIVEN an installed module WHEN trying to import it THEN checks if the module has a function named 'readFileSync'", async () => {
		const result = await tryImport<typeof import("node:fs")>("node:fs");

		expect(result).toBeDefined();
		expect(result?.readFileSync).toBeInstanceOf(Function);
	});

	it("GIVEN an uninstalled module WHEN trying to import it THEN returns 'null'", async () => {
		const result = await tryImport("non-existent-module");
		const expectedResult = null;

		expect(result).toBe(expectedResult);
	});
});

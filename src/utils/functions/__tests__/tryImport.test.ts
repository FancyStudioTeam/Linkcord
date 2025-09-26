import { tryImport } from "../tryImport.js";

describe("Function: tryImport", () => {
	describe("GIVEN valid module", () => {
		it("THEN checks if module has function 'readFileSync'", async () => {
			const result = await tryImport<typeof import("node:fs")>("node:fs");

			expect(result).toBeDefined();
			expect(result?.readFileSync).toBeInstanceOf(Function);
		});
	});

	describe("GIVEN invalid module", () => {
		it("THEN returns 'null'", async () => {
			const result = await tryImport("non-existent-module");
			const expectedResult = null;

			expect(result).toBe(expectedResult);
		});
	});
});

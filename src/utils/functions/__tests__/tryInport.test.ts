import { tryImport } from "../tryImport.js";

describe("Function: tryImport", () => {
	it("Should return 'null' when importing a non-existent module.", async () => {
		const packageData = await tryImport("non-existent-module");
		const expectedPackageDataResult = null;

		expect(packageData).toBe(expectedPackageDataResult);
	});

	it("Should check if 'readFileSync' is defined when importing the module.", async () => {
		const packageData = await tryImport<typeof import("node:fs")>("node:fs");

		expect(packageData?.readFileSync).toBeDefined();
		expect(packageData?.readFileSync).toBeInstanceOf(Function);
	});
});

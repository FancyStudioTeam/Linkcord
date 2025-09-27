import { sep } from "node:path";
import { cwd } from "node:process";
import { ImportUtils } from "../ImportUtils.js";

const CURRENT_WORKING_DIRECTORY = cwd();
const FRAGMENTS = ["src", "utils", "index.ts"] as const;

describe("Method: ImportUtils.resolvePath", () => {
	describe("GIVEN valid fragments", () => {
		it("THEN returns resolved path", () => {
			const result = ImportUtils.resolvePath(...FRAGMENTS);
			const expectedResult = [CURRENT_WORKING_DIRECTORY, FRAGMENTS.join(sep)].join(sep);

			expect(result).toBe(expectedResult);
		});
	});
});

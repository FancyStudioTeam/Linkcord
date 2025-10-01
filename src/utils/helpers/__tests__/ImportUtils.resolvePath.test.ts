import { sep } from "node:path";
import { cwd } from "node:process";
import { ImportUtils } from "../ImportUtils.js";

const CURRENT_WORKING_DIRECTORY = cwd();
const FRAGMENTS = ["src", "utils", "index.ts"] as const;
const JOINED_FRAGMENTS = FRAGMENTS.join(sep);

describe("Method: ImportUtils.resolvePath", () => {
	it("GIVEN some valid fragments WHEN resolving them THEN returns the resolved path", () => {
		const result = ImportUtils.resolvePath(...FRAGMENTS);
		const expectedResult = [CURRENT_WORKING_DIRECTORY, JOINED_FRAGMENTS].join(sep);

		expect(result).toBe(expectedResult);
	});
});

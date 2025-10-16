import { normalizeArray } from "../normalizeArray.js";

const STRINGS_ARRAY = ["Hello", "world"];

describe("Function: normalizeArray", () => {
	it("Should normalize the given array of strings", () => {
		const result1 = normalizeArray(STRINGS_ARRAY);
		const result2 = normalizeArray(...STRINGS_ARRAY);

		const expectedResult = STRINGS_ARRAY;

		expect<string[]>(result1).toEqual(expectedResult);
		expect<string[]>(result2).toEqual(expectedResult);
	});
});

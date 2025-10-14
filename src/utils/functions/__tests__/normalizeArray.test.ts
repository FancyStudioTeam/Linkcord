import { normalizeArray } from "../normalizeArray.js";

const STRINGS_ARRAY = ["Hello", "world"];

describe("Function: normalizeArray", () => {
	it("Should return the original array", () => {
		const result = normalizeArray(STRINGS_ARRAY);
		const expectedResult = STRINGS_ARRAY;

		expect(result).toEqual(expectedResult);
	});

	it("Should return the normalized array from a rest parameter", () => {
		const result = normalizeArray(...STRINGS_ARRAY);
		const expectedResult = STRINGS_ARRAY;

		expect(result).toEqual(expectedResult);
	});
});

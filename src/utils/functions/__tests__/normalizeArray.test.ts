import { normalizeArray } from "../normalizeArray.js";

const STRINGS_ARRAY = ["Hello", "world"];

describe("Function: normalizeArray", () => {
	it("GIVEN a list of strings WHEN normalizing them THEN returns the original array", () => {
		const expectedStringsArrayResult = STRINGS_ARRAY;

		expect(normalizeArray(STRINGS_ARRAY)).toEqual(expectedStringsArrayResult);
	});

	it("GIVEN a list of strings WHEN passing them as rest parameters THEN returns the normalized array", () => {
		const expectedStringsArrayResult = STRINGS_ARRAY;

		expect(normalizeArray(...STRINGS_ARRAY)).toEqual(expectedStringsArrayResult);
	});
});

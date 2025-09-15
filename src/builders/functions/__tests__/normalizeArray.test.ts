import { normalizeArray } from "../normalizeArray.js";

const STRINGS_ARRAY = ["Hello", "world"];

describe("Function: normalizeArray", () => {
	it("Should return the original array when the provided argument is an array.", () => {
		const expectedStringsArrayResult = STRINGS_ARRAY;

		expect(normalizeArray(STRINGS_ARRAY)).toEqual(expectedStringsArrayResult);
	});

	it("Should normalize the array when the provided argument is a rest parameter.", () => {
		const expectedStringsArrayResult = STRINGS_ARRAY;

		expect(normalizeArray(...STRINGS_ARRAY)).toEqual(expectedStringsArrayResult);
	});
});

/*
 * biome-ignore-all lint/nursery/noMagicNumbers: Magic numbers are not
 * important in testing files.
 */

import { describe, expect, it } from "vitest";
import { normalizeArray } from "../normalizeArray.js";

describe("Function: normalizeArray", () => {
	it("Should return the original array if it is already an array.", () => {
		const NumbersArray = [1, 2, 3];

		expect(normalizeArray(NumbersArray)).toEqual(NumbersArray);
	});

	it("Should normalize a rest parameter into an array.", () => {
		const NumbersArray = [1, 2, 3];

		expect(normalizeArray(...NumbersArray)).toEqual(NumbersArray);
	});
});

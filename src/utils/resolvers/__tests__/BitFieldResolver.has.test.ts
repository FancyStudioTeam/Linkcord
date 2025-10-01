// @ts-nocheck

import { UserFlags } from "#types/index.js";
import { BitFieldResolver } from "../BitFieldResolver.js";

describe("Method: BitFieldResolver.freeze", () => {
	it("GIVEN first parameter THEN checks whether the bit is set", () => {
		const bitFieldResolver = new BitFieldResolver(UserFlags.Staff | UserFlags.ActiveDeveloper);

		const result1 = bitFieldResolver.has(UserFlags.Staff);
		const result2 = bitFieldResolver.has(UserFlags.HypeSquad);

		const expectedResult1 = true;
		const expectedResult2 = false;

		expect(result1).toBe(expectedResult1);
		expect(result2).toBe(expectedResult2);
	});

	it("GIVEN invalid bit THEN throws 'TypeError'", () => {
		const bitFieldResolver = new BitFieldResolver(UserFlags.Staff | UserFlags.ActiveDeveloper);

		const result = () => bitFieldResolver.has(null);
		const expectedErrorResult = new TypeError(
			"First parameter (bit) from 'BitFieldResolver.has' must be a number.",
		);

		expect(result).toThrow(expectedErrorResult);
	});
});

// @ts-nocheck

import { UserFlags } from "#types/index.js";
import { BitFieldResolver } from "../BitFieldResolver.js";

describe("Method: BitFieldResolver.remove", () => {
	let bitFieldResolver: BitFieldResolver;

	beforeEach(() => {
		bitFieldResolver = new BitFieldResolver(UserFlags.Staff | UserFlags.ActiveDeveloper);
	});

	it("GIVEN a bit field with UserFlags.Staff | UserFlags.ActiveDeveloper set WHEN removing 0 THEN returns UserFlags.Staff | UserFlags.ActiveDeveloper", () => {
		const result = bitFieldResolver.remove(0);
		const expectedResult = 4194305;

		expect(result).toBe(expectedResult);
	});

	it("GIVEN a bit field with UserFlags.Staff | UserFlags.ActiveDeveloper set WHEN removing UserFlags.Staff THEN returns UserFlags.ActiveDeveloper", () => {
		const result = bitFieldResolver.remove(UserFlags.Staff);
		const expectedResult = UserFlags.ActiveDeveloper;

		expect(result).toBe(expectedResult);
	});

	it("GIVEN a bit field with UserFlags.Staff | UserFlags.ActiveDeveloper set WHEN removing UserFlags.Staff and UserFlags.ActiveDeveloper THEN returns an empty bit field", () => {
		const result = bitFieldResolver.remove(UserFlags.Staff, UserFlags.ActiveDeveloper);
		const expectedResult = 0;

		expect(result).toBe(expectedResult);
	});

	it("GIVEN some invalid bits WHEN removing them THEN a TypeError is thrown", () => {
		const bits = [1, NaN, "NOT_A_VALID_NUMBER"];

		const result = () => bitFieldResolver.remove(...bits);
		const expectedErrorResult = new TypeError(
			"All parameters (bits) from 'BitFieldResolver.remove' must be numbers.",
		);

		expect(result).toThrow(expectedErrorResult);
	});
});

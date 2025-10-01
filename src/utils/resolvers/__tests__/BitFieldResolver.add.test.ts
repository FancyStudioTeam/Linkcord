// @ts-nocheck

import { UserFlags } from "#types/index.js";
import { BitFieldResolver } from "../BitFieldResolver.js";

describe("Method: BitFieldResolver.add", () => {
	let bitFieldResolver: BitFieldResolver;

	beforeEach(() => {
		bitFieldResolver = new BitFieldResolver();
	});

	it("GIVEN an empty bit field WHEN adding 0 THEN returns 0", () => {
		const result = bitFieldResolver.add(0);
		const expectedResult = 0;

		expect(result).toBe(expectedResult);
	});

	it("GIVEN an empty bit field WHEN adding UserFlags.Staff THEN returns UserFlags.Staff", () => {
		const result = bitFieldResolver.add(UserFlags.Staff);
		const expectedResult = UserFlags.Staff;

		expect(result).toBe(expectedResult);
	});

	it("GIVEN an empty bit field WHEN adding UserFlags.Staff and UserFlags.ActiveDeveloper THEN returns UserFlags.Staff | UserFlags.ActiveDeveloper", () => {
		const result = bitFieldResolver.add(UserFlags.Staff, UserFlags.ActiveDeveloper);
		const expectedResult = UserFlags.Staff | UserFlags.ActiveDeveloper;

		expect(result).toBe(expectedResult);
	});

	it("GIVEN some invalid bits WHEN adding them THEN a TypeError is thrown", () => {
		const bits = [1, NaN, "NOT_A_VALID_NUMBER"];

		const result = () => bitFieldResolver.add(...bits);
		const expectedErrorResult = new TypeError("All parameters (bits) from 'BitFieldResolver.add' must be numbers.");

		expect(result).toThrow(expectedErrorResult);
	});
});

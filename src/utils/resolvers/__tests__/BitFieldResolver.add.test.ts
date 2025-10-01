// @ts-nocheck

import { UserFlags } from "#types/index.js";
import { BitFieldResolver } from "../BitFieldResolver.js";

describe("Method: BitFieldResolver.add", () => {
	let bitFieldResolver: BitFieldResolver;

	beforeEach(() => {
		bitFieldResolver = new BitFieldResolver();
	});

	it("GIVEN valid bits WHEN adding 0 WHEN bit field is 0 THEN returns 0", () => {
		const result = bitFieldResolver.add(0);
		const expectedResult = 0;

		expect(result).toBe(expectedResult);
	});

	it("GIVEN valid bits WHEN adding 'UserFlags.Staff' WHEN bit field is 0 THEN returns 1", () => {
		const result = bitFieldResolver.add(UserFlags.Staff);
		const expectedResult = UserFlags.Staff;

		expect(result).toBe(expectedResult);
	});

	it("GIVEN valid bits WHEN adding 'UserFlags.Staff' and 'UserFlags.ActiveDeveloper' WHEN bit field is 0 THEN returns 4194305", () => {
		const result = bitFieldResolver.add(UserFlags.Staff, UserFlags.ActiveDeveloper);
		const expectedResult = UserFlags.Staff | UserFlags.ActiveDeveloper;

		expect(result).toBe(expectedResult);
	});

	it("GIVEN some invalid bits THEN throws 'TypeError'", () => {
		const bits = [1, NaN, "NOT_A_VALID_NUMBER"];

		const result = () => bitFieldResolver.add(...bits);
		const expectedErrorResult = new TypeError("All parameters (bits) from 'BitFieldResolver.add' must be numbers.");

		expect(result).toThrow(expectedErrorResult);
	});
});

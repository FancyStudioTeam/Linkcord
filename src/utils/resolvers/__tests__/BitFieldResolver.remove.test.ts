// @ts-nocheck

import { UserFlags } from "#types/index.js";
import { BitFieldResolver } from "../BitFieldResolver.js";

describe("Method: BitFieldResolver.remove", () => {
	let bitFieldResolver: BitFieldResolver;

	beforeEach(() => {
		bitFieldResolver = new BitFieldResolver(UserFlags.Staff | UserFlags.ActiveDeveloper);
	});

	it("GIVEN valid bits WHEN removing 0 WHEN bit field is 0 THEN returns 0", () => {
		const result = bitFieldResolver.remove(0);
		const expectedResult = 4194305;

		expect(result).toBe(expectedResult);
	});

	it("GIVEN valid bits WHEN removing 'UserFlags.Staff' WHEN bit field is 4194305 THEN returns 4194304", () => {
		const result = bitFieldResolver.remove(UserFlags.Staff);
		const expectedResult = UserFlags.ActiveDeveloper;

		expect(result).toBe(expectedResult);
	});

	it("GIVEN valid bits WHEN removing 'UserFlags.Staff' and 'UserFlags.ActiveDeveloper' WHEN bit field is 4194305 THEN returns 0", () => {
		const result = bitFieldResolver.remove(UserFlags.Staff, UserFlags.ActiveDeveloper);
		const expectedResult = 0;

		expect(result).toBe(expectedResult);
	});

	it("GIVEN some invalid bits THEN throws 'TypeError'", () => {
		const bits = [1, NaN, "NOT_A_VALID_NUMBER"];

		const result = () => bitFieldResolver.remove(...bits);
		const expectedErrorResult = new TypeError(
			"All parameters (bits) from 'BitFieldResolver.remove' must be numbers.",
		);

		expect(result).toThrow(expectedErrorResult);
	});
});

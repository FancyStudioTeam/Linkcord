import { describe, expect, it } from "vitest";
import { UserFlags } from "#types/index.js";
import { BitFieldResolver } from "../BitFieldResolver.js";

describe("Method: BitFieldResolver.add", () => {
	it("Should return '0' when adding '0'.", () => {
		const bitFieldResolver = new BitFieldResolver();
		const expectedBitFieldResult = 0;

		expect(bitFieldResolver.add(0)).toBe(expectedBitFieldResult);
	});

	it("Should return '1' when adding 'UserFlags.Staff' flag.", () => {
		const bitFieldResolver = new BitFieldResolver();
		const expectedBitFieldResult = UserFlags.Staff;

		expect(bitFieldResolver.add(UserFlags.Staff)).toBe(expectedBitFieldResult);
	});

	it("Should return '4194305' when adding 'UserFlags.Staff' and 'UserFlags.ActiveDeveloper' flags.", () => {
		const bitFieldResolver = new BitFieldResolver();
		const expectedBitFieldResult = UserFlags.Staff | UserFlags.ActiveDeveloper;

		expect(bitFieldResolver.add(UserFlags.Staff, UserFlags.ActiveDeveloper)).toBe(expectedBitFieldResult);
	});
});

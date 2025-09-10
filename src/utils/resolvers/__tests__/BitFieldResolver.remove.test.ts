import { describe, expect, it } from "vitest";
import { UserFlags } from "#types/index.js";
import { BitFieldResolver } from "../BitFieldResolver.js";

describe("Method: BitFieldResolver.remove", () => {
	it("Should return '0' when removing '0'.", () => {
		const bitFieldResolver = new BitFieldResolver();
		const expectedBitFieldResult = 0;

		expect(bitFieldResolver.remove(0)).toBe(expectedBitFieldResult);
	});

	it("Should return '4194304' when removing the 'UserFlags.Staff' flag.", () => {
		const bitFieldResolver = new BitFieldResolver(UserFlags.Staff | UserFlags.ActiveDeveloper);
		const expectedBitFieldResult = UserFlags.ActiveDeveloper;

		expect(bitFieldResolver.remove(UserFlags.Staff)).toBe(expectedBitFieldResult);
	});

	it("Should return '0' when removing 'UserFlags.Staff' and 'UserFlags.ActiveDeveloper' flags.", () => {
		const bitFieldResolver = new BitFieldResolver(UserFlags.Staff | UserFlags.ActiveDeveloper);
		const expectedBitFieldResult = 0;

		expect(bitFieldResolver.remove(UserFlags.Staff, UserFlags.ActiveDeveloper)).toBe(expectedBitFieldResult);
	});
});

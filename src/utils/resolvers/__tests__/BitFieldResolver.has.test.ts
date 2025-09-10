import { describe, expect, it } from "vitest";
import { UserFlags } from "#types/index.js";
import { BitFieldResolver } from "../BitFieldResolver.js";

describe("Method: BitFieldResolver.freeze", () => {
	it("Should return 'true' when cheking if 'UserFlags.ActiveDeveloper' is set.", () => {
		const bitFieldResolver = new BitFieldResolver(UserFlags.ActiveDeveloper | UserFlags.Staff);
		const expectedResult = true;

		expect(bitFieldResolver.has(UserFlags.ActiveDeveloper)).toBe(expectedResult);
	});

	it("Should return 'false' when cheking if 'UserFlags.ActiveDeveloper' is not set.", () => {
		const bitFieldResolver = new BitFieldResolver(UserFlags.BugHunterLevel1 | UserFlags.BugHunterLevel2);
		const expectedResult = false;

		expect(bitFieldResolver.has(UserFlags.ActiveDeveloper)).toBe(expectedResult);
	});
});

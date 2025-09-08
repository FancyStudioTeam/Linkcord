import { describe, expect, it } from "vitest";
import { UserFlags } from "#types/index.js";
import { BitFieldResolver as BitFieldResolverClass } from "../BitFieldResolver.js";

describe("Method: BitFieldResolver.freeze", () => {
	it("Should check whether a bit is present in the bitfield.", () => {
		const BitFieldResolver = new BitFieldResolverClass(UserFlags.ActiveDeveloper | UserFlags.Staff);

		expect(BitFieldResolver.has(UserFlags.ActiveDeveloper)).toBe(true);
		expect(BitFieldResolver.has(UserFlags.Staff)).toBe(true);
		expect(BitFieldResolver.has(UserFlags.VerifiedBot)).toBe(false);
	});
});

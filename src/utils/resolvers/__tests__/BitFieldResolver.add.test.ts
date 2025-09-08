import { describe, expect, it } from "vitest";
import { UserFlags } from "#types/index.js";
import { BitFieldResolver as BitFieldResolverClass } from "../BitFieldResolver.js";

describe("Method: BitFieldResolver.add", () => {
	it("Should add a bit to the bitfield.", () => {
		const BitFieldResolver = new BitFieldResolverClass();

		expect(BitFieldResolver.add(0)).toBe(0);
		expect(BitFieldResolver.add(UserFlags.Staff)).toBe(UserFlags.Staff);
		expect(BitFieldResolver.add(UserFlags.ActiveDeveloper)).toBe(UserFlags.ActiveDeveloper | UserFlags.Staff);
	});
});

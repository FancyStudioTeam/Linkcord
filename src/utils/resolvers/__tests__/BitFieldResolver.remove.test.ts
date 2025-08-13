import { describe, expect, it } from "vitest";
import { UserFlags } from "#types/index.js";
import { BitFieldResolver as BitFieldResolverClass } from "../BitFieldResolver.js";

describe("Method: BitFieldResolver.remove", () => {
	it("Should remove a bit from the bitfield.", () => {
		const BitFieldResolver = new BitFieldResolverClass(UserFlags.ActiveDeveloper);

		expect(BitFieldResolver.remove(UserFlags.Staff)).toBe(UserFlags.ActiveDeveloper);
		expect(BitFieldResolver.remove(UserFlags.ActiveDeveloper)).toBe(0);
	});
});

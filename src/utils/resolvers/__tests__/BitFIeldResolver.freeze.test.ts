import { describe, expect, it } from "vitest";
import { BitFieldResolver as BitFieldResolverClass } from "../BitFieldResolver.js";

describe("Method: BitFieldResolver.freeze", () => {
	it("Should freeze the instance.", () => {
		const BitFieldResolver = new BitFieldResolverClass();

		BitFieldResolver.freeze();

		expect(Object.isFrozen(BitFieldResolver)).toBe(true);
	});
});

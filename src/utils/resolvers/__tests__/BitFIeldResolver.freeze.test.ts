import { describe, expect, it } from "vitest";
import { BitFieldResolver as BitFieldResolverClass } from "../BitFieldResolver.js";

describe("Method: BitFieldResolver.freeze", () => {
	it("Should freeze the 'BitFieldResolver' instance when using 'freeze' method.", () => {
		const bitFieldResolver = new BitFieldResolverClass().freeze();

		expect(bitFieldResolver.isFrozen).toBe(true);
	});
});

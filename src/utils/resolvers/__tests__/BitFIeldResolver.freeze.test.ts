import { BitFieldResolver } from "../BitFieldResolver.js";

describe("Method: BitFieldResolver.freeze", () => {
	it("Should freeze the 'BitFieldResolver' instance when using 'freeze' method.", () => {
		const bitFieldResolver = new BitFieldResolver().freeze();

		expect(bitFieldResolver.isFrozen).toBe(true);
	});
});

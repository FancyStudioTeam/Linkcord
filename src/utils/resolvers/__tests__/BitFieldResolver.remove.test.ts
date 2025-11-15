import { UserFlags } from "#types/index.js";
import { BitFieldResolver } from "../BitFieldResolver.js";

describe("Method: BitFieldResolver.remove", () => {
	it("Should remove the provided bits from the bit field", () => {
		const bitFieldResolver1 = new BitFieldResolver();
		const bitFieldResolver2 = new BitFieldResolver(UserFlags.ActiveDeveloper);
		const bitFieldResolver3 = new BitFieldResolver(UserFlags.ActiveDeveloper | UserFlags.Staff);

		const result1 = bitFieldResolver1.remove(0);
		const result2 = bitFieldResolver2.remove(UserFlags.ActiveDeveloper);
		const result3 = bitFieldResolver3.remove(UserFlags.ActiveDeveloper);

		const expectedResult1 = 0;
		const expectedResult2 = 0;
		const expectedResult3 = UserFlags.Staff;

		expect(result1).toBe(expectedResult1);
		expect(result2).toBe(expectedResult2);
		expect(result3).toBe(expectedResult3);
	});
});

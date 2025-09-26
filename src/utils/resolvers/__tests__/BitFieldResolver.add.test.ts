import { UserFlags } from "#types/index.js";
import { BitFieldResolver } from "../BitFieldResolver.js";

describe("Method: BitFieldResolver.add", () => {
	let bitFieldResolver: BitFieldResolver;

	beforeEach(() => {
		bitFieldResolver = new BitFieldResolver();
	});

	describe("GIVEN valid bits", () => {
		describe("WHEN adding 0 with bitfield 0", () => {
			it("THEN returns bitfield 0", () => {
				const result = bitFieldResolver.add(0);
				const expectedResult = 0;

				expect(result).toBe(expectedResult);
			});
		});

		describe("WHEN adding 'UserFlags.Staff' with bitfield 0", () => {
			it("THEN returns bitfield 1", () => {
				const result = bitFieldResolver.add(UserFlags.Staff);
				const expectedResult = UserFlags.Staff;

				expect(result).toBe(expectedResult);
			});
		});

		describe("WHEN adding 'UserFlags.Staff' and 'UserFlags.ActiveDeveloper'", () => {
			it("THEN returns bitfield 4194305", () => {
				const result = bitFieldResolver.add(UserFlags.Staff, UserFlags.ActiveDeveloper);
				const expectedResult = UserFlags.Staff | UserFlags.ActiveDeveloper;

				expect(result).toBe(expectedResult);
			});
		});
	});
});

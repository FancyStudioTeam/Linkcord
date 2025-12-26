import { UserFlags } from '#types/index.js';
import { BitFieldResolver } from '../BitFieldResolver.js';

describe('Method: BitFieldResolver.add', () => {
	it('Should add the provided bits in the bit field', () => {
		const bitFieldResolver1 = new BitFieldResolver();
		const bitFieldResolver2 = new BitFieldResolver(UserFlags.ActiveDeveloper);
		const bitFieldResolver3 = new BitFieldResolver();

		const result1 = bitFieldResolver1.add(UserFlags.ActiveDeveloper);
		const result2 = bitFieldResolver2.add(UserFlags.Staff);
		const result3 = bitFieldResolver3.add(UserFlags.ActiveDeveloper, UserFlags.Staff);

		const expectedResult1 = UserFlags.ActiveDeveloper;
		const expectedResult2 = UserFlags.ActiveDeveloper | UserFlags.Staff;
		const expectedResult3 = UserFlags.ActiveDeveloper | UserFlags.Staff;

		expect(result1).toBe(expectedResult1);
		expect(result2).toBe(expectedResult2);
		expect(result3).toBe(expectedResult3);
	});
});

import { validate } from '../validate.js';

describe('validate', () => {
	it('Should throw an error if the provided parameters are invalid', () => {
		// @ts-expect-error
		expect(() => validate(null)).toThrow(/must be an instance of/);
	});
});

import { exception } from "../exception.js";

const ERROR_MESSAGE = "Expected type to be a string";

describe("Function: exception", () => {
	it("Should throw the given error message as an Error instance", () => {
		const result = () => exception(ERROR_MESSAGE);
		const expectedErrorResult = new Error(ERROR_MESSAGE);

		expect(result).toThrow(expectedErrorResult);
	});

	it("Should throw the given error message as the given TypeError instance", () => {
		const result = () => exception(TypeError, ERROR_MESSAGE);
		const expectedErrorResult = new TypeError(ERROR_MESSAGE);

		expect(result).toThrow(expectedErrorResult);
	});

	it("Should throw a TypeError if some of the given parameters are not valid functions or strings", () => {
		// @ts-expect-error
		const result1 = () => exception(null);
		// @ts-expect-error
		const result2 = () => exception(TypeError, null);

		const expectedErrorResult1 = new TypeError("First parameter (message) from 'exception' must be a string");
		const expectedErrorResult2 = new TypeError("Second parameter (message) from 'exception' must be a string");

		expect(result1).toThrow(expectedErrorResult1);
		expect(result2).toThrow(expectedErrorResult2);
	});
});

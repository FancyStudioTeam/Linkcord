import { exception } from "../exception.js";

const ERROR_MESSAGE = "This is an error message";

describe("Function: exception", () => {
	it("Should throw the given error message using the default Error class", () => {
		const result = () => exception(ERROR_MESSAGE);
		const expectedErrorResult = new Error(ERROR_MESSAGE);

		expect(result).toThrow(expectedErrorResult);
	});

	it("Should throw the given error message using the TypeError class", () => {
		const result = () => exception(TypeError, ERROR_MESSAGE);
		const expectedErrorResult = new TypeError(ERROR_MESSAGE);

		expect(result).toThrow(expectedErrorResult);
	});
});

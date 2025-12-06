import { exception } from "../exception.js";

const ERROR_MESSAGE = "Expected type to be a string";

describe("Function: exception", () => {
	describe("GIVEN valid parameters", () => {
		describe("WHEN calling exception without a scpecified constructor", () => {
			it("THEN should throw a Error with the provided message", () => {
				expect(() => exception(ERROR_MESSAGE)).toThrow(Error);
				expect(() => exception(ERROR_MESSAGE)).toThrow(ERROR_MESSAGE);
			});
		});

		describe("WHEN calling exception with a specified constructor", () => {
			it("THEN should throw a TypeError with the provided message", () => {
				expect(() => exception(TypeError, ERROR_MESSAGE)).toThrow(TypeError);
				expect(() => exception(TypeError, ERROR_MESSAGE)).toThrow(ERROR_MESSAGE);
			});
		});
	});

	describe("GIVEN invalid parameters", () => {
		describe("WHEN calling exception", () => {
			it("THEN a TypeError is thrown", () => {
				// @ts-expect-error
				expect(() => exception(null)).toThrow("First parameter (message) from 'exception' must be a string");
				// @ts-expect-error
				expect(() => exception(TypeError, null)).toThrow(
					"Second parameter (message) from 'exception' must be a string",
				);
			});
		});
	});
});

import { array, string } from "zod";
import { ValidationError } from "#utils/errors/ValidationError.js";
import { validate } from "../validate.js";

const ARRAY_SCHEMA = array(string()).min(1);

describe("Function: validate", () => {
	describe("GIVEN valid parameters", () => {
		describe("WHEN calling validate", () => {
			it("THEN should validate the provided data with the specified schema", () => {
				expect(() => validate(ARRAY_SCHEMA, null)).toThrow(ValidationError);
				expect(() => validate(ARRAY_SCHEMA, [])).toThrow(ValidationError);
				expect(
					validate(ARRAY_SCHEMA, [
						"Hello",
					]),
				).toStrictEqual([
					"Hello",
				]);
			});
		});
	});

	describe("GIVEN invalid parameters", () => {
		describe("WHEN calling validate", () => {
			it("THEN a TypeError is thrown", () => {
				// @ts-expect-error
				expect(() => validate(null)).toThrow("First parameter (schema) from 'validate' must be an instance of 'ZodType'");
			});
		});
	});
});

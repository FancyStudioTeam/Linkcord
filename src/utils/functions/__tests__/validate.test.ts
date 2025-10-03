import { array, number, object, string } from "zod";
import { ValidationError } from "#utils/errors/ValidationError.js";
import { ValidationErrorIssueKind } from "#utils/types/index.js";
import { validate } from "../validate.js";

const ARRAY_SCHEMA = array(string());
const OBJECT_SCHEMA = object({
	age: number(),
	name: string(),
	tags: array(string()),
});
const STRING_SCHEMA = string();

describe("Function: validate", () => {
	it("GIVEN a Zod string schema WHEN validating invalid input THEN a ValidationError is thrown", () => {
		const result1 = () => validate(STRING_SCHEMA, null);
		const result2 = validate(STRING_SCHEMA, "Hello World!");

		const expectedErrorResult1 = new ValidationError([
			{
				expected: "string",
				kind: ValidationErrorIssueKind.InvalidInputType,
			},
		]);
		const expectedResult2 = "Hello World!";

		expect(result1).toThrow(expectedErrorResult1);
		expect(result2).toBe(expectedResult2);
	});

	it("GIVEN a Zod object schema WHEN validating invalid input THEN a ValidationError is thrown", () => {
		const result1 = () => validate(OBJECT_SCHEMA, null);
		const result2 = () =>
			validate(OBJECT_SCHEMA, {
				tags: [null],
			});
		const result3 = validate(OBJECT_SCHEMA, {
			age: 25,
			name: "John Doe",
			tags: ["Employee"],
		});

		const expectedErrorResult1 = new ValidationError([
			{
				expected: "object",
				kind: ValidationErrorIssueKind.InvalidInputType,
			},
		]);
		const expectedErrorResult2 = new ValidationError([
			{
				expected: "number",
				kind: ValidationErrorIssueKind.InvalidInputTypeWithPath,
				path: ["age"],
			},
			{
				expected: "string",
				kind: ValidationErrorIssueKind.InvalidInputTypeWithPath,
				path: ["name"],
			},
			{
				expected: "string",
				kind: ValidationErrorIssueKind.InvalidInputTypeWithPath,
				path: ["tags", 0],
			},
		]);
		const expectedResult3 = {
			age: 25,
			name: "John Doe",
			tags: ["Employee"],
		};

		expect(result1).toThrow(expectedErrorResult1);
		expect(result2).toThrow(expectedErrorResult2);
		expect(result3).toStrictEqual(expectedResult3);
	});

	it("GIVEN a Zod array schema WHEN validating invalid input THEN a ValidationError is thrown", () => {
		const result1 = () => validate(ARRAY_SCHEMA, null);
		const result2 = () => validate(ARRAY_SCHEMA, [null]);
		const result3 = validate(ARRAY_SCHEMA, ["Employee"]);

		const expectedErrorResult1 = new ValidationError([
			{
				expected: "array",
				kind: ValidationErrorIssueKind.InvalidInputType,
			},
		]);
		const expectedErrorResult2 = new ValidationError([
			{
				expected: "string",
				kind: ValidationErrorIssueKind.InvalidInputTypeWithPath,
				path: [0],
			},
		]);
		const expectedResult3 = ["Employee"];

		expect(result1).toThrow(expectedErrorResult1);
		expect(result2).toThrow(expectedErrorResult2);
		expect(result3).toStrictEqual(expectedResult3);
	});
});

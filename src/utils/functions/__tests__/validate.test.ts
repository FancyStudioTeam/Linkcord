import { array, number, object, string } from "zod";
import { ValidationError } from "#utils/errors/ValidationError.js";
import { validate } from "../validate.js";

const ARRAY_SCHEMA = array(string());
const OBJECT_SCHEMA = object({
	age: number(),
	name: string(),
	tags: array(string()),
});
const STRING_SCHEMA = string();

describe("Function: validate", () => {
	it("Should validate the given input with the given string schema", () => {
		const result1 = () => validate(STRING_SCHEMA, null);
		const result2 = validate(STRING_SCHEMA, "Hello World!");

		const expectedErrorResult1 = new ValidationError([
			{
				issues: null,
				message: "Expected input to be a string",
				path: [],
			},
		]);
		const expectedResult2 = "Hello World!";

		expect(result1).toThrow(expectedErrorResult1);
		expect(result2).toBe(expectedResult2);
	});

	it("Should validate the given input with the given object schema", () => {
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
				issues: null,
				message: "Expected input to be an object",
				path: [],
			},
		]);
		const expectedErrorResult2 = new ValidationError([
			{
				issues: null,
				message: "Expected input to be a number",
				path: ["age"],
			},
			{
				issues: null,
				message: "Expected input to be a string",
				path: ["name"],
			},
			{
				issues: null,
				message: "Expected input to be a string",
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

	it("Should validate the given input with the given array schema", () => {
		const result1 = () => validate(ARRAY_SCHEMA, null);
		const result2 = () => validate(ARRAY_SCHEMA, [null]);
		const result3 = validate(ARRAY_SCHEMA, ["Employee"]);

		const expectedErrorResult1 = new ValidationError([
			{
				issues: null,
				message: "Expected input to be an array",
				path: [],
			},
		]);
		const expectedErrorResult2 = new ValidationError([
			{
				issues: null,
				message: "Expected input to be a string",
				path: [0],
			},
		]);
		const expectedResult3 = ["Employee"];

		expect(result1).toThrow(expectedErrorResult1);
		expect(result2).toThrow(expectedErrorResult2);
		expect(result3).toStrictEqual(expectedResult3);
	});
});

import { validate } from "#utils/functions/validate.js";
import { ValidationError } from "#utils/index.js";
import { URLSchema } from "../Shared.js";

const URL_STRING = "https://example.com/";
const URL_STRING_WITHOUT_PROTOCOL = "example.com/";
const URL_INSTANCE = new URL(URL_STRING);

describe("Schema: URLSchema", () => {
	it("GIVEN a Zod schema WHEN validating valid input THEN does not throw", () => {
		expect(validate(URLSchema, URL_STRING)).toBe(URL_STRING);
		expect(validate(URLSchema, URL_INSTANCE)).toBe(URL_STRING);
	});

	it("GIVEN a Zod schema WHEN validating invalid input THEN does throw", () => {
		expect(() => validate(URLSchema, null)).toThrow(ValidationError);
		expect(() => validate(URLSchema, URL_STRING_WITHOUT_PROTOCOL)).toThrow(ValidationError);
	});
});

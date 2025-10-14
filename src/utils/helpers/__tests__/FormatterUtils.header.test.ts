// @ts-nocheck

/** biome-ignore-all lint/style/noMagicNumbers: Magic numbers in testing files are not important. */

import { HeadingLevel } from "#utils/types/index.js";
import { FormatterUtils } from "../FormatterUtils.js";

const CONTENT = "Hello, world!";

describe("Method: FormatterUtils.header", () => {
	it("GIVEN some content WHEN formatting it THEN returns the formatted header", () => {
		const result = FormatterUtils.header(CONTENT);
		const expectedResult = `# ${CONTENT}` as const;

		expect<typeof expectedResult>(result).toBe(expectedResult);
	});

	it("GIVEN a heading level and a content WHEN formatting them THEN returns the formatted header", () => {
		const result = FormatterUtils.header(HeadingLevel.Two, CONTENT);
		const expectedResult = `## ${CONTENT}` as const;

		expect<typeof expectedResult>(result).toBe(expectedResult);
	});

	it("GIVEN an invalid heading level WHEN formatting it with a content THEN returns the default formatted header", () => {
		const result = FormatterUtils.header(0, CONTENT);
		const expectedResult = `# ${CONTENT}` as const;

		expect<typeof expectedResult>(result).toBe(expectedResult);
	});

	it("GIVEN a valid heading level but an invalid content WHEN formatting them THEN a TypeError is thrown", () => {
		const result1 = () => FormatterUtils.header(HeadingLevel.One);
		const result2 = () => FormatterUtils.header(HeadingLevel.One, null);

		const expectedErrorResult = new TypeError(
			"Second parameter (content) from 'FormatterUtils.header' must be present and be a string.",
		);

		expect(result1).toThrow(expectedErrorResult);
		expect(result2).toThrow(expectedErrorResult);
	});

	it("GIVEN an invalid heading level or content WHEN formatting them THEN a TypeError is thrown", () => {
		const result = () => FormatterUtils.header(null);
		const expectedErrorResult = new TypeError(
			"First parameter (levelOrContent) from 'FormatterUtils.header' must be a number or string.",
		);

		expect(result).toThrow(expectedErrorResult);
	});
});

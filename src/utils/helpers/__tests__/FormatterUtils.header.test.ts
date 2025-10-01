// @ts-nocheck

/** biome-ignore-all lint/style/noMagicNumbers: Magic numbers in testing files are not important. */

import { HeadingLevels } from "#utils/types/index.js";
import { FormatterUtils } from "../FormatterUtils.js";

const CONTENT = "Hello, world!";

describe("Method: FormatterUtils.header", () => {
	it("GIVEN valid content THEN returns header", () => {
		const result = FormatterUtils.header(CONTENT);
		const expectedResult = `# ${CONTENT}` as const;

		expect<typeof expectedResult>(result).toBe(expectedResult);
	});

	it("GIVEN valid heading level and content THEN returns header", () => {
		const result = FormatterUtils.header(HeadingLevels.Two, CONTENT);
		const expectedResult = `## ${CONTENT}` as const;

		expect<typeof expectedResult>(result).toBe(expectedResult);
	});

	it("GIVEN invalid heading level THEN returns header", () => {
		const result = FormatterUtils.header(0, CONTENT);
		const expectedResult = `# ${CONTENT}` as const;

		expect<typeof expectedResult>(result).toBe(expectedResult);
	});

	it("GIVEN valid heading level but invalid content THEN throws 'TypeError'", () => {
		const result1 = () => FormatterUtils.header(HeadingLevels.One);
		const result2 = () => FormatterUtils.header(HeadingLevels.One, null);

		const expectedErrorResult = new TypeError(
			"Second parameter (content) from 'FormatterUtils.header' must be present and be a string.",
		);

		expect(result1).toThrow(expectedErrorResult);
		expect(result2).toThrow(expectedErrorResult);
	});

	it("GIVEN invalid first parameter THEN throws 'TypeError'", () => {
		const result = () => FormatterUtils.header(null);
		const expectedErrorResult = new TypeError(
			"First parameter (levelOrContent) from 'FormatterUtils.header' must be a number or string.",
		);

		expect(result).toThrow(expectedErrorResult);
	});
});

// @ts-nocheck

/** biome-ignore-all lint/style/noMagicNumbers: Magic numbers in testing files are not important. */

import { HeadingLevels } from "#utils/types/index.js";
import { FormatterUtils } from "../FormatterUtils.js";

const CONTENT = "Hello, world!";

describe("Method: FormatterUtils.header", () => {
	describe("GIVEN valid content", () => {
		it("THEN returns '# [content]'", () => {
			const result = FormatterUtils.header(CONTENT);
			const expectedResult = `# ${CONTENT}` as const;

			expect<typeof expectedResult>(result).toBe(expectedResult);
		});
	});

	describe("GIVEN valid heading level and content", () => {
		describe("WHEN using 'HeadingLevels.One'", () => {
			it("THEN returns '# [content]'", () => {
				const result = FormatterUtils.header(HeadingLevels.One, CONTENT);
				const expectedResult = `# ${CONTENT}` as const;

				expect<typeof expectedResult>(result).toBe(expectedResult);
			});
		});

		describe("WHEN using 'HeadingLevels.Two'", () => {
			it("THEN returns '## [content]'", () => {
				const result = FormatterUtils.header(HeadingLevels.Two, CONTENT);
				const expectedResult = `## ${CONTENT}` as const;

				expect(result).toBe(expectedResult);
			});
		});

		describe("WHEN using 'HeadingLevels.Three'", () => {
			it("THEN returns '### [content]'", () => {
				const result = FormatterUtils.header(HeadingLevels.Three, CONTENT);
				const expectedResult = `### ${CONTENT}` as const;

				expect<typeof expectedResult>(result).toBe(expectedResult);
			});
		});
	});

	describe("GIVEN invalid heading level", () => {
		it("THEN returns '# [content]'", () => {
			const result = FormatterUtils.header(0, CONTENT);
			const expectedResult = `# ${CONTENT}` as const;

			expect<typeof expectedResult>(result).toBe(expectedResult);
		});
	});

	describe("GIVEN valid heading level but invalid content", () => {
		it("THEN throws 'TypeError'", () => {
			const result1 = () => FormatterUtils.header(HeadingLevels.One);
			const result2 = () => FormatterUtils.header(HeadingLevels.One, null);

			const expectedErrorResult = new TypeError(
				"The second parameter (content) must be present and be a string.",
			);

			expect(result1).toThrow(expectedErrorResult);
			expect(result2).toThrow(expectedErrorResult);
		});
	});
});

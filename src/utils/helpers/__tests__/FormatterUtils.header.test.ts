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
			const result1 = FormatterUtils.header(0, CONTENT);
			// @ts-expect-error
			const result2 = FormatterUtils.header(null, CONTENT);

			const expectedResult = `# ${CONTENT}` as const;

			expect<typeof expectedResult>(result1).toBe(expectedResult);
			expect<typeof expectedResult>(result2).toBe(expectedResult);
		});
	});
});

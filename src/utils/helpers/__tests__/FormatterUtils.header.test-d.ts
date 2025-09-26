/** biome-ignore-all lint/style/noMagicNumbers: Magic numbers in testing files are not important. */

import { HeadingLevels } from "#utils/types/index.js";
import { FormatterUtils } from "../FormatterUtils.js";

const CONTENT = "Hello, world!";

describe("Method: FormatterUtils.header", () => {
	describe("GIVEN valid content", () => {
		it("THEN returns '# Hello, world!'", () => {
			const result = FormatterUtils.header(CONTENT);
			const expectedResult = `# ${CONTENT}` as const;

			expect(result).toBe(expectedResult);
			expectTypeOf(result).toEqualTypeOf<typeof expectedResult>();
		});
	});

	describe("GIVEN valid heading level and content", () => {
		describe("WHEN using 'HeadingLevels.One'", () => {
			it("THEN returns '# Hello, world!'", () => {
				const result = FormatterUtils.header(HeadingLevels.One, CONTENT);
				const expectedResult = `# ${CONTENT}` as const;

				expect(result).toBe(expectedResult);
				expectTypeOf(result).toEqualTypeOf<typeof expectedResult>();
			});
		});

		describe("WHEN using 'HeadingLevels.Two'", () => {
			it("THEN returns '## Hello, world!'", () => {
				const result = FormatterUtils.header(HeadingLevels.Two, CONTENT);
				const expectedResult = `## ${CONTENT}` as const;

				expect(result).toBe(expectedResult);
				expectTypeOf(result).toEqualTypeOf<typeof expectedResult>();
			});
		});

		describe("WHEN using 'HeadingLevels.Three'", () => {
			it("THEN returns '### Hello, world!'", () => {
				const result = FormatterUtils.header(HeadingLevels.Three, CONTENT);
				const expectedResult = `### ${CONTENT}` as const;

				expect(result).toBe(expectedResult);
				expectTypeOf(result).toEqualTypeOf<typeof expectedResult>();
			});
		});
	});

	describe("GIVEN invalid heading level", () => {
		it("THEN returns '# Hello, world!'", () => {
			const result = FormatterUtils.header(0, CONTENT);
			const expectedResult = `# ${CONTENT}` as const;

			expect(result).toBe(expectedResult);
			expectTypeOf(result).toEqualTypeOf<typeof expectedResult>();
		});
	});
});

import { FormatterUtils } from "../FormatterUtils.js";

const CONTENT = "print('Hello, world!');";

describe("Method: FormatterUtils.codeBlock", () => {
	describe("GIVEN valid content", () => {
		it("THEN returns codeblock without language", () => {
			const result = FormatterUtils.codeBlock(CONTENT);
			const expectedResult = `\`\`\`\n${CONTENT}\n\`\`\`` as const;

			expect(result).toBe(expectedResult);
			expectTypeOf(result).toEqualTypeOf<typeof expectedResult>();
		});

		describe("WHEN specifying a language", () => {
			it("THEN returns codeblock with language", () => {
				const result = FormatterUtils.codeBlock("js", CONTENT);
				const expectedResult = `\`\`\`js\n${CONTENT}\n\`\`\`` as const;

				expect(result).toBe(expectedResult);
				expectTypeOf(result).toEqualTypeOf<typeof expectedResult>();
			});
		});
	});
});

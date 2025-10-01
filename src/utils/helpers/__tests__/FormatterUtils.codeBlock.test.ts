import { FormatterUtils } from "../FormatterUtils.js";

const CONTENT = "print('Hello, world!');";

describe("Method: FormatterUtils.codeBlock", () => {
	it("GIVEN some content WHEN formatting it THEN returns the formatted code block without a language", () => {
		const result = FormatterUtils.codeBlock(CONTENT);
		const expectedResult = `\`\`\`\n${CONTENT}\n\`\`\`` as const;

		expect<typeof expectedResult>(result).toBe(expectedResult);
	});

	it("GIVEN a content and a language WHEN formatting them THEN returns the formatted code block with the language specified", () => {
		const result = FormatterUtils.codeBlock("js", CONTENT);
		const expectedResult = `\`\`\`js\n${CONTENT}\n\`\`\`` as const;

		expect<typeof expectedResult>(result).toBe(expectedResult);
	});
});

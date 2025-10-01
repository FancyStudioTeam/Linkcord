import { FormatterUtils } from "../FormatterUtils.js";

const CONTENT = "print('Hello, world!');";

describe("Method: FormatterUtils.codeBlock", () => {
	it("GIVEN valid content THEN returns codeblock", () => {
		const result = FormatterUtils.codeBlock(CONTENT);
		const expectedResult = `\`\`\`\n${CONTENT}\n\`\`\`` as const;

		expect<typeof expectedResult>(result).toBe(expectedResult);
	});

	it("GIVEN valid content WHEN using a language THEN returns codeblock with language", () => {
		const result = FormatterUtils.codeBlock("js", CONTENT);
		const expectedResult = `\`\`\`js\n${CONTENT}\n\`\`\`` as const;

		expect<typeof expectedResult>(result).toBe(expectedResult);
	});
});

import { FormatterUtils } from "../FormatterUtils.js";

describe("Method: FormatterUtils.bold", () => {
	describe("GIVEN valid content", () => {
		it("THEN returns '**Hello, world!**'", () => {
			const content = "Hello, World!";

			const result = FormatterUtils.bold(content);
			const expectedResult = `**${content}**` as const;

			expect(result).toBe(expectedResult);
			expectTypeOf(result).toEqualTypeOf<typeof expectedResult>();
		});
	});
});

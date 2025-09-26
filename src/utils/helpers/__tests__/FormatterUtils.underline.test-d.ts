import { FormatterUtils } from "../FormatterUtils.js";

const CONTENT = "Hello, world!";

describe("Method: FormatterUtils.underline", () => {
	describe("GIVEN valid content", () => {
		it("THEN returns '__Hello, world!__'", () => {
			const result = FormatterUtils.underline(CONTENT);
			const expectedResult = `__${CONTENT}__` as const;

			expect(result).toBe(expectedResult);
			expectTypeOf(result).toEqualTypeOf<typeof expectedResult>();
		});
	});
});

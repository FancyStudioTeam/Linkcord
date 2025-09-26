import { FormatterUtils } from "../FormatterUtils.js";

const CONTENT = "Hello, world!";

describe("Method: FormatterUtils.quote", () => {
	describe("GIVEN valid content", () => {
		it("THEN returns '> Hello, world!'", () => {
			const result = FormatterUtils.quote(CONTENT);
			const expectedResult = `> ${CONTENT}` as const;

			expect(result).toBe(expectedResult);
			expectTypeOf(result).toEqualTypeOf<typeof expectedResult>();
		});
	});
});

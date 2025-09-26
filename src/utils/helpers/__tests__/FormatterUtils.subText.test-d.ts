import { FormatterUtils } from "../FormatterUtils.js";

const CONTENT = "Hello, world!";

describe("Method: FormatterUtils.subText", () => {
	describe("GIVEN valid content", () => {
		it("THEN returns '-# Hello, world!'", () => {
			const result = FormatterUtils.subText(CONTENT);
			const expectedResult = `-# ${CONTENT}` as const;

			expect(result).toBe(expectedResult);
			expectTypeOf(result).toEqualTypeOf<typeof expectedResult>();
		});
	});
});

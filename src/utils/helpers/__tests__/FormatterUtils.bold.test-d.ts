import { FormatterUtils } from "../FormatterUtils.js";

describe("Method: FormatterUtils.bold", () => {
	it("GIVEN 'Hello, world' WHEN using 'bold' method THEN returns '**Hello, world**'", () => {
		const unformattedString = "Hello, World!";

		const result = FormatterUtils.bold(unformattedString);
		const expectedResult = "**Hello, World!**" as const;

		expect(result).toBe(expectedResult);
		expectTypeOf(result).toEqualTypeOf<typeof expectedResult>();
	});
});

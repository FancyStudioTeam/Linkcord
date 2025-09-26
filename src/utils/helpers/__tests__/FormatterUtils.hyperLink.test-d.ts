import { FormatterUtils } from "../FormatterUtils.js";

const URL_CONTENT = "Discord";
const URL_STRING = "https://discord.com";
const URL_OBJECT = new URL(URL_STRING);

describe("Method: FormatterUtils.hyperlink", () => {
	describe("GIVEN valid content and url", () => {
		it("THEN returns hyperlink without title", () => {
			const result1 = FormatterUtils.hyperlink(URL_CONTENT, URL_STRING);
			const result2 = FormatterUtils.hyperlink(URL_CONTENT, URL_OBJECT);

			const expectedResult1 = `[${URL_CONTENT}](${URL_STRING})` as const;
			const expectedResult2 = `[${URL_CONTENT}](${URL_OBJECT.toString()})` as const;

			expect(result1).toBe(expectedResult1);
			expect(result2).toBe(expectedResult2);

			expectTypeOf(result1).toEqualTypeOf<typeof expectedResult1>();
			expectTypeOf(result2).toEqualTypeOf<typeof expectedResult2>();
		});

		describe("WHEN specifying a title", () => {
			it("THEN returns hyperlink with title", () => {
				const result = FormatterUtils.hyperlink(URL_CONTENT, URL_STRING, URL_CONTENT);
				const expectedResult = `[${URL_CONTENT}](${URL_STRING} "${URL_CONTENT}")` as const;

				expect(result).toBe(expectedResult);
				expectTypeOf(result).toEqualTypeOf<typeof expectedResult>();
			});
		});
	});
});

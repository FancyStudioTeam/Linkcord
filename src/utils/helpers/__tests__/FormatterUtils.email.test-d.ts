import { FormatterUtils } from "../FormatterUtils.js";

const EMAIL_DOMAIN = "discord.com";
const EMAIL_HEADERS = {
	content: "Message Content",
	subject: "Message Title",
};
const EMAIL_USERNAME = "nelly";

describe("Method: FormatterUtils.email", () => {
	describe("GIVEN valid username and domain", () => {
		it("THEN returns '<nelly@discord.com>'", () => {
			const result = FormatterUtils.email(EMAIL_USERNAME, EMAIL_DOMAIN);
			const expectedResult = `<${EMAIL_USERNAME}@${EMAIL_DOMAIN}>` as const;

			expect(result).toBe(expectedResult);
			expectTypeOf(result).toEqualTypeOf<typeof expectedResult>();
		});

		describe("WHEN specifying headers", () => {
			describe("GIVEN valid headers", () => {
				it("THEN returns '<nelly@discord.com?content=Message+Content&subject=Message+Title>'", () => {
					const { content, subject } = EMAIL_HEADERS;
					const queryStringParams = `content=${content}&subject=${subject}`;
					const encodedQueryStringParams = encodeURIComponent(queryStringParams);

					const result = FormatterUtils.email(EMAIL_USERNAME, EMAIL_DOMAIN, EMAIL_HEADERS);
					const expectedResult = `<${EMAIL_USERNAME}@${EMAIL_DOMAIN}?${encodedQueryStringParams}>` as const;

					expect(result).toBe(expectedResult);
					expectTypeOf(result).toEqualTypeOf<typeof expectedResult>();
				});
			});

			describe("GIVEN invalid headers", () => {
				it("THEN throws 'TypeError'", () => {
					// @ts-expect-error
					const result = () => FormatterUtils.email(EMAIL_USERNAME, EMAIL_DOMAIN, null);
					const expectedErrorResult = new TypeError(
						"The third parameter (headers) must be a record of strings.",
					);

					expect(result).toThrow(expectedErrorResult);
				});
			});
		});
	});
});

// @ts-nocheck

import { FormatterUtils } from "../FormatterUtils.js";

const EMAIL_DOMAIN = "discord.com";
const EMAIL_HEADERS = {
	content: "Message Content",
	subject: "Message Title",
};
const EMAIL_USERNAME = "nelly";

describe("Method: FormatterUtils.email", () => {
	it("GIVEN valid username and domain THEN returns email", () => {
		const result = FormatterUtils.email(EMAIL_USERNAME, EMAIL_DOMAIN);
		const expectedResult = `<${EMAIL_USERNAME}@${EMAIL_DOMAIN}>` as const;

		expect<typeof expectedResult>(result).toBe(expectedResult);
	});

	it("GIVEN valid username and domain WHEN using headers THEN returns email with encoded headers", () => {
		const { content, subject } = EMAIL_HEADERS;
		const queryStringParams = `content=${content}&subject=${subject}`;
		const encodedQueryStringParams = encodeURIComponent(queryStringParams);

		const result = FormatterUtils.email(EMAIL_USERNAME, EMAIL_DOMAIN, EMAIL_HEADERS);
		const expectedResult = `<${EMAIL_USERNAME}@${EMAIL_DOMAIN}?${encodedQueryStringParams}>` as const;

		expect<typeof expectedResult>(result).toBe(expectedResult);
	});

	it("GIVEN valid username and domain WHEN using invalid headers THEN throws 'TypeError'", () => {
		const result = () => FormatterUtils.email(EMAIL_USERNAME, EMAIL_DOMAIN, null);
		const expectedErrorResult = new TypeError(
			"Third parameter (headers) from 'FormatterUtils.email' must be a record of strings.",
		);

		expect(result).toThrow(expectedErrorResult);
	});
});

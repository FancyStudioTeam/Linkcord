// @ts-nocheck

import { FormatterUtils } from "../FormatterUtils.js";

const EMAIL_DOMAIN = "discord.com";
const EMAIL_HEADERS = {
	content: "Message Content",
	subject: "Message Title",
};
const EMAIL_USERNAME = "nelly";

describe("Method: FormatterUtils.email", () => {
	it("Should format the given username and domain into an email", () => {
		const result = FormatterUtils.email(EMAIL_USERNAME, EMAIL_DOMAIN);
		const expectedResult = `<${EMAIL_USERNAME}@${EMAIL_DOMAIN}>` as const;

		expect<typeof expectedResult>(result).toBe(expectedResult);
	});

	it("Should format the given username and domain into an email with encoded query headers", () => {
		const { content, subject } = EMAIL_HEADERS;
		const queryStringParams = `content=${content}&subject=${subject}`;
		const encodedQueryStringParams = encodeURIComponent(queryStringParams);

		const result = FormatterUtils.email(EMAIL_USERNAME, EMAIL_DOMAIN, EMAIL_HEADERS);
		const expectedResult = `<${EMAIL_USERNAME}@${EMAIL_DOMAIN}?${encodedQueryStringParams}>` as const;

		expect<typeof expectedResult>(result).toBe(expectedResult);
	});

	it("GIVEN a username and a domain WHEN formatting them with invalid headers THEN a TypeError is thrown", () => {
		const result = () => FormatterUtils.email(EMAIL_USERNAME, EMAIL_DOMAIN, null);
		const expectedErrorResult = new TypeError(
			"Third parameter (headers) from 'FormatterUtils.email' must be a record of strings.",
		);

		expect(result).toThrow(expectedErrorResult);
	});
});

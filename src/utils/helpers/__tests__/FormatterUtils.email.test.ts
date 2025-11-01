import { FormatterUtils } from "../FormatterUtils.js";

const { email } = FormatterUtils;

const EMAIL_DOMAIN = "discord.com";
const EMAIL_HEADERS = {
	content: "Message Content",
	subject: "Message Title",
};
const EMAIL_USERNAME = "nelly";

describe("Method: FormatterUtils.email", () => {
	it("Should format the provided username and domain into an email hyperlink", () => {
		const result = email(EMAIL_USERNAME, EMAIL_DOMAIN);
		const expectedResult = `<${EMAIL_USERNAME}@${EMAIL_DOMAIN}>` as const;

		expect<typeof expectedResult>(result).toBe(expectedResult);
	});

	it("Should format the provided username and domain into an email hyperlink with encoded headers", () => {
		const { content, subject } = EMAIL_HEADERS;
		const queryStringParams = `content=${content}&subject=${subject}`;
		const encodedHeadersParams = encodeURIComponent(queryStringParams);

		const result = email(EMAIL_USERNAME, EMAIL_DOMAIN, EMAIL_HEADERS);
		const expectedResult = `<${EMAIL_USERNAME}@${EMAIL_DOMAIN}?${encodedHeadersParams}>` as const;

		expect<typeof expectedResult>(result).toBe(expectedResult);
	});
});

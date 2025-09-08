import { describe, expect, it } from "vitest";
import { EmbedAuthorBuilder } from "#builders/index.js";
import type { EmbedAuthor as EmbedAuthorInterface } from "#types/index.js";
import { EmbedAuthor } from "../EmbedAuthor.js";

describe("JSX: EmbedAuthor", () => {
	it('Should return an "EmbedAuthorBuilder" instance when using the "EmbedAuthor" component.', () => {
		const EmbedAuthorName = "Lorem ipsum dolor sit amet";
		const EmbedAuthorURL = "https://example.com";

		const EmbedAuthorComponent1 = <EmbedAuthor url={EmbedAuthorURL}>{EmbedAuthorName}</EmbedAuthor>;
		const EmbedAuthorComponent2 = <EmbedAuthor name={EmbedAuthorName} url={EmbedAuthorURL} />;

		const ExpectedEmbedAuthorResult: EmbedAuthorInterface = {
			name: EmbedAuthorName,
			url: EmbedAuthorURL,
		};

		expect(EmbedAuthorComponent1).toBeInstanceOf(EmbedAuthorBuilder);
		expect(EmbedAuthorComponent1.toJSON()).toStrictEqual(ExpectedEmbedAuthorResult);

		expect(EmbedAuthorComponent2).toBeInstanceOf(EmbedAuthorBuilder);
		expect(EmbedAuthorComponent2.toJSON()).toStrictEqual(ExpectedEmbedAuthorResult);
	});
});

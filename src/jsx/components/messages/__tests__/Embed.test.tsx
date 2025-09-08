import { describe, expect, it } from "vitest";
import { EmbedBuilder } from "#builders/index.js";
import type { Embed as EmbedInterface } from "#types/index.js";
import { Embed } from "../Embed.js";
import { EmbedAuthor } from "../EmbedAuthor.js";
import { EmbedField } from "../EmbedField.js";
import { EmbedFooter } from "../EmbedFooter.js";

describe("JSX: Embed", () => {
	it('Should return an "EmbedBuilder" instance when using the "Embed" component.', () => {
		const EmbedShortText = "Lorem ipsum dolor sit amet";
		const EmbedMediumText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
		const EmbedLongText =
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at turpis venenatis, tempor nulla ac, dictum tortor.";
		const EmbedURL = "https://example.com";

		const EmbedComponent: EmbedBuilder = (
			<Embed description={EmbedLongText} title={EmbedShortText}>
				<EmbedAuthor name={EmbedShortText} url={EmbedURL} />
				<EmbedField name={`${EmbedShortText} (1)`} value={EmbedMediumText}></EmbedField>
				<EmbedField name={`${EmbedShortText} (2)`} value={EmbedMediumText}></EmbedField>
				<EmbedFooter iconURL={EmbedURL} text={EmbedShortText} />
			</Embed>
		);

		const ExpectedEmbedResult: EmbedInterface = {
			author: {
				name: EmbedShortText,
				url: EmbedURL,
			},
			description: EmbedLongText,
			fields: [
				{
					name: `${EmbedShortText} (1)`,
					value: EmbedMediumText,
				},
				{
					name: `${EmbedShortText} (2)`,
					value: EmbedMediumText,
				},
			],
			footer: {
				iconURL: EmbedURL,
				text: EmbedShortText,
			},
			title: EmbedShortText,
		};

		expect(EmbedComponent).toBeInstanceOf(EmbedBuilder);
		expect(EmbedComponent.toJSON()).toStrictEqual(ExpectedEmbedResult);
	});
});

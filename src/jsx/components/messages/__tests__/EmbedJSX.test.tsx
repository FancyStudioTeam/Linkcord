import { describe, expect, it } from "vitest";
import { EmbedBuilder } from "#builders/index.js";
import type { Embed } from "#types/index.js";
import { EmbedFieldJSX } from "../EmbedFieldJSX.js";
import { EmbedJSX } from "../EmbedJSX.js";

describe("JSX: EmbedJSX", () => {
	it('Should return an "EmbedBuilder" instance.', () => {
		const EmbedTitle = "Lorem ipsum dolor sit amet";
		const EmbedDescription =
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at turpis venenatis, tempor nulla ac, dictum tortor.";

		const EmbedFieldName = EmbedTitle;
		const EmbedFieldValue = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

		const EmbedComponent = (
			<EmbedJSX title={EmbedTitle}>
				{EmbedDescription}
				<EmbedFieldJSX name={`${EmbedFieldName} (1)`}>{EmbedFieldValue}</EmbedFieldJSX>
				<EmbedFieldJSX name={`${EmbedFieldName} (2)`}>{EmbedFieldValue}</EmbedFieldJSX>
			</EmbedJSX>
		);

		const ExpectedResult: Embed = {
			description: EmbedDescription,
			fields: [
				{
					name: `${EmbedFieldName} (1)`,
					value: EmbedFieldValue,
				},
				{
					name: `${EmbedFieldName} (2)`,
					value: EmbedFieldValue,
				},
			],
			title: EmbedTitle,
		};

		console.log(EmbedComponent.toJSON());
		expect(EmbedComponent).toBeInstanceOf(EmbedBuilder);
		expect(EmbedComponent.toJSON()).toStrictEqual(ExpectedResult);
	});
});

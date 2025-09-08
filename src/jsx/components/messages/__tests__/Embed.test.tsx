import { describe, expect, it } from "vitest";
import { EmbedBuilder } from "#builders/index.js";
import type { Embed as EmbedInterface } from "#types/index.js";
import { Embed } from "../Embed.js";
import { EmbedField } from "../EmbedField.js";

describe("JSX: Embed", () => {
	it('Should return an "EmbedBuilder" instance when using the "Embed" component.', () => {
		const EmbedTitle = "Lorem ipsum dolor sit amet";
		const EmbedDescription =
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at turpis venenatis, tempor nulla ac, dictum tortor.";

		const EmbedFieldName = "Lorem ipsum dolor sit amet";
		const EmbedFieldValue = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

		const EmbedComponent = (
			<Embed title={EmbedTitle}>
				{EmbedDescription}
				<EmbedField name={`${EmbedFieldName} (1)`}>{EmbedFieldValue}</EmbedField>
				<EmbedField name={`${EmbedFieldName} (2)`}>{EmbedFieldValue}</EmbedField>
			</Embed>
		);

		const ExpectedEmbedResult: EmbedInterface = {
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

		expect(EmbedComponent).toBeInstanceOf(EmbedBuilder);
		expect(EmbedComponent.toJSON()).toStrictEqual(ExpectedEmbedResult);
	});
});

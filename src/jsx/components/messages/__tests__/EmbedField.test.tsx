import { describe, expect, it } from "vitest";
import { EmbedFieldBuilder } from "#builders/index.js";
import type { EmbedField as EmbedFieldInterface } from "#types/index.js";
import { EmbedField } from "../EmbedField.js";

describe("JSX: EmbedField", () => {
	it('Should return an "EmbedFieldBuilder" instance.', () => {
		const EmbedFieldName = "Lorem ipsum";
		const EmbedFieldValue =
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at turpis venenatis, tempor nulla ac, dictum tortor.";

		const EmbedFieldComponent = (
			<EmbedField inline={true} name={EmbedFieldName}>
				{EmbedFieldValue}
			</EmbedField>
		);

		const ExpectedResult: EmbedFieldInterface = {
			inline: true,
			name: EmbedFieldName,
			value: EmbedFieldValue,
		};

		expect(EmbedFieldComponent).toBeInstanceOf(EmbedFieldBuilder);
		expect(EmbedFieldComponent.toJSON()).toStrictEqual(ExpectedResult);
	});
});

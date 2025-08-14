import { describe, expect, it } from "vitest";
import { EmbedFieldBuilder } from "#builders/index.js";
import { EmbedFieldJSX } from "../EmbedFieldJSX.js";

describe("JSX: EmbedFieldJSX", () => {
	it('Should return an "EmbedFieldBuilder" instance.', () => {
		const EmbedFieldName = "Lorem ipsum";
		const EmbedFieldValue =
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at turpis venenatis, tempor nulla ac, dictum tortor.";

		const EmbedFieldComponent = (
			<EmbedFieldJSX inline={true} name={EmbedFieldName}>
				{EmbedFieldValue}
			</EmbedFieldJSX>
		);

		expect(EmbedFieldComponent).toBeInstanceOf(EmbedFieldBuilder);
		expect(EmbedFieldComponent.toJSON()).toStrictEqual({
			inline: true,
			name: EmbedFieldName,
			value: EmbedFieldValue,
		});
	});
});

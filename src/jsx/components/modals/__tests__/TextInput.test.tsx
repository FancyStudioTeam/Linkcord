import { describe, expect, it } from "vitest";
import { TextInputBuilder } from "#builders/index.js";
import { ComponentTypes, type TextInputComponent, TextInputStyles } from "#types/index.js";
import { TextInput } from "../TextInput.js";

describe("JSX: TextInput", () => {
	it('Should return a "TextInputBuilder" instance when using the "TextInput" component.', () => {
		const TextInputCustomID = "text_input_1";
		const TextInputValue = "Lorem ipsum dolor sit amet";

		const TextInputComponent1: TextInputBuilder = (
			<TextInput customId={TextInputCustomID} style={TextInputStyles.Paragraph}>
				{TextInputValue}
			</TextInput>
		);
		const TextInputComponent2: TextInputBuilder = (
			<TextInput customId={TextInputCustomID} style={TextInputStyles.Paragraph} value={TextInputValue} />
		);

		const ExpectedTextInputResult: TextInputComponent = {
			customId: TextInputCustomID,
			style: TextInputStyles.Paragraph,
			type: ComponentTypes.TextInput,
			value: TextInputValue,
		};

		expect(TextInputComponent1).toBeInstanceOf(TextInputBuilder);
		expect(TextInputComponent1.toJSON()).toStrictEqual(ExpectedTextInputResult);

		expect(TextInputComponent2).toBeInstanceOf(TextInputBuilder);
		expect(TextInputComponent2.toJSON()).toStrictEqual(ExpectedTextInputResult);
	});
});

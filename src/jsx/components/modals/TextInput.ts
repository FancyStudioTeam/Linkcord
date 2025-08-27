import { TextInputBuilder } from "#builders/index.js";
import type { TextInputProperties } from "#jsx/types/index.js";

/**
 * Creates a {@link TextInputBuilder | `TextInputBuilder`} instance using JSX.
 * @param properties - The properties of the {@link TextInput | `TextInput`} component.
 * @returns The created {@link TextInputBuilder | `TextInputBuilder`} instance.
 */
export function TextInput(properties: TextInputProperties): TextInputBuilder {
	const textInput = new TextInputBuilder();
	const { children, customId, maxLength, minLength, placeholder, required, style, value } =
		properties;

	textInput.setCustomId(customId);
	textInput.setStyle(style);

	maxLength && textInput.setMaxLength(maxLength);
	minLength && textInput.setMinLength(minLength);
	placeholder && textInput.setPlaceholder(placeholder);
	required && textInput.setRequired(required);
	value && textInput.setValue(value);

	if (typeof children === "string") {
		textInput.setValue(children);
	}

	return textInput;
}

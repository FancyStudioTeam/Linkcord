import type { TextInputComponent, TextInputStyles } from "#types/resources";

/*
	TODO: Add validation
 */

/** Utility class for building {@link TextInputComponent | `TextInputComponent`} objects. **/
export class TextInputBuilder {
	/** The object containing the data of the text input component. **/
	private readonly __data__: Partial<TextInputComponent> = {};

	/**
	 * Sets the custom ID of the text input component.
	 * @param customID - The custom ID of the text input component.
	 **/
	setCustomID(customID: string): this {
		this.__data__.customId = customID;
		return this;
	}

	/**
	 * Sets the max length of the text input component.
	 * @param maxLength - The max length of the text input component.
	 **/
	setMaxLength(maxLength: number): this {
		this.__data__.maxLength = maxLength;
		return this;
	}

	/**
	 * Sets the min length of the text input component.
	 * @param minLength - The min length of the text input component.
	 **/
	setMinLength(minLength: number): this {
		this.__data__.minLength = minLength;
		return this;
	}

	/**
	 * Sets the placeholder of the text input component.
	 * @param placeholder - The placeholder of the text input component.
	 **/
	setPlaceholder(placeholder: string): this {
		this.__data__.placeholder = placeholder;
		return this;
	}

	/**
	 * Sets the required state of the text input component.
	 * @param required - Whether the text input component is required.
	 **/
	setRequired(required: boolean): this {
		this.__data__.required = required;
		return this;
	}

	/**
	 * Sets the style of the text input component.
	 * @param style - The style of the text input component.
	 **/
	setStyle(style: TextInputStyles): this {
		this.__data__.style = style;
		return this;
	}

	/**
	 * Sets the default value of the text input component.
	 * @param value - The default value of the text input component.
	 **/
	setValue(value: string): this {
		this.__data__.value = value;
		return this;
	}

	/**
	 * Converts the {@link TextInputBuilder | `TextInputBuilder`} instance into a {@link TextInputComponent | `TextInputComponent`} object.
	 * @returns The {@link TextInputComponent | `TextInputComponent`} object.
	 */
	toJSON(): TextInputComponent {
		return this.__data__ as TextInputComponent;
	}
}

import {
	TextInputCustomIDSchema,
	TextInputMaxValueSchema,
	TextInputMinValueSchema,
	TextInputObjectSchema,
	TextInputPlaceholderSchema,
	TextInputRequiredSchema,
	TextInputStyleSchema,
	TextInputValueSchema,
} from "#builders/schemas/modals/TextInputSchema.js";
import { ComponentTypes, type TextInputComponent, type TextInputStyle } from "#types/index.js";
import { validate } from "#utils/functions/validate.js";
import { BaseBuilder } from "../base/BaseBuilder.js";

/**
 * Utility class for building {@link TextInputComponent | `TextInputComponent`} objects.
 * @group Builders/Structures
 */
export class TextInputBuilder extends BaseBuilder<TextInputComponent> {
	/**
	 * Sets the custom ID of the text input component.
	 * @param customId - The custom ID of the text input component.
	 */
	setCustomId(customId: string): this {
		this.data.customId = validate(TextInputCustomIDSchema, customId);

		return this;
	}

	/**
	 * Sets the max length of the text input component.
	 * @param maxLength - The max length of the text input component.
	 */
	setMaxLength(maxLength: number): this {
		this.data.maxLength = validate(TextInputMaxValueSchema, maxLength);

		return this;
	}

	/**
	 * Sets the min length of the text input component.
	 * @param minLength - The min length of the text input component.
	 */
	setMinLength(minLength: number): this {
		this.data.minLength = validate(TextInputMinValueSchema, minLength);

		return this;
	}

	/**
	 * Sets the placeholder of the text input component.
	 * @param placeholder - The placeholder of the text input component.
	 */
	setPlaceholder(placeholder: string): this {
		this.data.placeholder = validate(TextInputPlaceholderSchema, placeholder);

		return this;
	}

	/**
	 * Sets whether the text input is required for the modal.
	 * @param required - Whether the text input is required for the modal.
	 */
	setRequired(required: boolean): this {
		this.data.required = validate(TextInputRequiredSchema, required);

		return this;
	}

	/**
	 * Sets the style of the text input component.
	 * @param style - The style of the text input component.
	 */
	setStyle(style: TextInputStyle): this {
		this.data.style = validate(TextInputStyleSchema, style);

		return this;
	}

	/**
	 * Sets the default value of the text input component.
	 * @param value - The default value of the text input component.
	 */
	setValue(value: string): this {
		this.data.value = validate(TextInputValueSchema, value);

		return this;
	}

	/**
	 * Converts the current {@link TextInputBuilder | `TextInputBuilder`} instance into a {@link TextInputComponent | `TextInputComponent`} object.
	 * @returns The converted {@link TextInputComponent | `TextInputComponent`} object.
	 */
	toJSON(): TextInputComponent {
		const { data } = this;
		const validatedData = validate(TextInputObjectSchema, {
			...data,
			type: ComponentTypes.TextInput,
		});

		return validatedData;
	}
}

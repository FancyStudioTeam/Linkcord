import { parse } from "valibot";
import {
	TextInputCustomIDSchema,
	TextInputMaxValueLengthSchema,
	TextInputMinValueSchema,
	TextInputPlaceholderSchema,
	TextInputRequiredSchema,
	TextInputSchema,
	TextInputStyleSchema,
	TextInputValueSchema,
} from "#builders/schemas/modals/TextInputSchema.js";
import { ComponentTypes, type TextInputComponent, type TextInputStyles } from "#types/index.js";
import { BaseBuilder } from "../base/BaseBuilder.js";

/** Utility class for building {@link TextInputComponent | `TextInputComponent`} objects. */
export class TextInputBuilder extends BaseBuilder<TextInputComponent> {
	/**
	 * Sets the custom ID of the text input component.
	 * @param customID - The custom ID of the text input component.
	 */
	setCustomId(customId: string): this {
		this.data.customId = parse(TextInputCustomIDSchema, customId);

		return this;
	}

	/**
	 * Sets the max length of the text input component.
	 * @param maxLength - The max length of the text input component.
	 */
	setMaxLength(maxLength: number): this {
		this.data.maxLength = parse(TextInputMaxValueLengthSchema, maxLength);

		return this;
	}

	/**
	 * Sets the min length of the text input component.
	 * @param minLength - The min length of the text input component.
	 */
	setMinLength(minLength: number): this {
		this.data.minLength = parse(TextInputMinValueSchema, minLength);

		return this;
	}

	/**
	 * Sets the placeholder of the text input component.
	 * @param placeholder - The placeholder of the text input component.
	 */
	setPlaceholder(placeholder: string): this {
		this.data.placeholder = parse(TextInputPlaceholderSchema, placeholder);

		return this;
	}

	/**
	 * Sets whether the text input is required for the modal.
	 * @param required - Whether the text input is required for the modal.
	 */
	setRequired(required: boolean): this {
		this.data.required = parse(TextInputRequiredSchema, required);

		return this;
	}

	/**
	 * Sets the style of the text input component.
	 * @param style - The style of the text input component.
	 */
	setStyle(style: TextInputStyles): this {
		this.data.style = parse(TextInputStyleSchema, style);

		return this;
	}

	/**
	 * Sets the default value of the text input component.
	 * @param value - The default value of the text input component.
	 */
	setValue(value: string): this {
		this.data.value = parse(TextInputValueSchema, value);

		return this;
	}

	/**
	 * Converts the {@link TextInputBuilder | `TextInputBuilder`} instance into a {@link TextInputComponent | `TextInputComponent`} object.
	 * @returns The converted {@link TextInputComponent | `TextInputComponent`} object.
	 */
	toJSON(): TextInputComponent {
		const { data } = this;
		const validatedData = parse(TextInputSchema, {
			...data,
			type: ComponentTypes.TextInput,
		});

		return validatedData;
	}
}

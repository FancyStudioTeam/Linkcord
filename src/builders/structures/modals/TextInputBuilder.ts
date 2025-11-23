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

export class TextInputBuilder extends BaseBuilder<TextInputComponent> {
	setCustomId(customId: string): this {
		this.data.customId = validate(TextInputCustomIDSchema, customId);

		return this;
	}

	setMaxLength(maxLength: number): this {
		this.data.maxLength = validate(TextInputMaxValueSchema, maxLength);

		return this;
	}

	setMinLength(minLength: number): this {
		this.data.minLength = validate(TextInputMinValueSchema, minLength);

		return this;
	}

	setPlaceholder(placeholder: string): this {
		this.data.placeholder = validate(TextInputPlaceholderSchema, placeholder);

		return this;
	}

	setRequired(required: boolean): this {
		this.data.required = validate(TextInputRequiredSchema, required);

		return this;
	}

	setStyle(style: TextInputStyle): this {
		this.data.style = validate(TextInputStyleSchema, style);

		return this;
	}

	setValue(value: string): this {
		this.data.value = validate(TextInputValueSchema, value);

		return this;
	}

	toJSON(): TextInputComponent {
		const { data } = this;
		const validatedData = validate(TextInputObjectSchema, {
			...data,
			type: ComponentTypes.TextInput,
		});

		return validatedData;
	}
}

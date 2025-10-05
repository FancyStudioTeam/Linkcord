import {
	EmbedFieldInlineSchema,
	EmbedFieldNameSchema,
	EmbedFieldObjectSchema,
	EmbedFieldValueSchema,
} from "#builders/schemas/messages/EmbedFieldSchema.js";
import type { EmbedField } from "#types/index.js";
import { validate } from "#utils/functions/validate.js";
import { BaseBuilder } from "../base/BaseBuilder.js";

/**
 * Utility class for building {@link EmbedField | `EmbedField`} objects.
 * @group Builders/Structures
 */
export class EmbedFieldBuilder extends BaseBuilder<EmbedField> {
	/**
	 * Sets whether the field should be displayed inline.
	 * @param inline - Whether the field should be displayed inline.
	 */
	setInline(inline: boolean): this {
		this.data.inline = validate(EmbedFieldInlineSchema, inline);

		return this;
	}

	/**
	 * Sets the name of the field.
	 * @param name - The name of the field.
	 */
	setName(name: string): this {
		this.data.name = validate(EmbedFieldNameSchema, name);

		return this;
	}

	/**
	 * Sets the value of the field.
	 * @param value - The value of the field.
	 */
	setValue(value: string): this {
		this.data.value = validate(EmbedFieldValueSchema, value);

		return this;
	}

	/**
	 * Converts the {@link EmbedFieldBuilder | `EmbedFieldBuilder`} instance into an {@link EmbedField | `EmbedField`} object.
	 * @returns The converted {@link EmbedField | `EmbedField`} object.
	 */
	toJSON(): EmbedField {
		const { data } = this;
		const validatedData = validate(EmbedFieldObjectSchema, data);

		return validatedData;
	}
}

import { parse } from "valibot";
import {
	EmbedFieldInlineSchema,
	EmbedFieldNameSchema,
	EmbedFieldSchema,
	EmbedFieldValueSchema,
} from "#builders/schemas/index.js";
import type { EmbedField } from "#types/index.js";

/**
 * An utility class for building embed fields.
 * @group Builders/Messages
 * @public
 */
export class EmbedFieldBuilder {
	/** The object containing the data of the embed field. */
	readonly data: Partial<EmbedField> = {};

	/**
	 * Sets whether the field should be inline.
	 * @param inline - Whether the field should be inline.
	 */
	setInline(inline: boolean): this {
		this.data.inline = parse(EmbedFieldInlineSchema, inline);

		return this;
	}

	/**
	 * Sets the name of the field.
	 * @param name - The name of the field.
	 */
	setName(name: string): this {
		this.data.name = parse(EmbedFieldNameSchema, name);

		return this;
	}

	/**
	 * Sets the value of the field.
	 * @param value - The value of the field.
	 */
	setValue(value: string): this {
		this.data.value = parse(EmbedFieldValueSchema, value);

		return this;
	}

	/**
	 * Converts the {@link EmbedFieldBuilder | `EmbedFieldBuilder`} instance
	 * into an {@link EmbedField | `EmbedField`} object.
	 * @returns The {@link EmbedField | `EmbedField`} object.
	 */
	toJSON(): EmbedField {
		const { data } = this;
		const validatedData = parse(EmbedFieldSchema, data);

		return validatedData;
	}
}

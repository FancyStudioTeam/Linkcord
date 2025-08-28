import { parse } from "valibot";
import {
	EmbedFieldInlineSchema,
	EmbedFieldNameSchema,
	EmbedFieldSchema,
	EmbedFieldValueSchema,
} from "#builders/schemas/messages/EmbedFieldSchema.js";
import { EmbedFieldSchema as AllowedEmbedFieldSchema } from "#builders/schemas/messages/EmbedSchema.js";
import type { EmbedField } from "#types/index.js";

/** Utility class for building {@link EmbedField | `EmbedField`} objects. */
export class EmbedFieldBuilder {
	/** The object containing the data of the embed field. */
	#data: Partial<EmbedField> = {};

	/**
	 * Loads the data from an {@link EmbedField | `EmbedField`} object or an {@link EmbedFieldBuilder | `EmbedFieldBuilder`} instance.
	 * @param embedField - The {@link EmbedField | `EmbedField`} object or an {@link EmbedFieldBuilder | `EmbedFieldBuilder`} instance.
	 */
	from(embedField: EmbedField): this {
		this.#data = parse(AllowedEmbedFieldSchema, embedField);

		return this;
	}

	/**
	 * Sets whether the field should be displayed inline.
	 * @param inline - Whether the field should be displayed inline.
	 */
	setInline(inline: boolean): this {
		this.#data.inline = parse(EmbedFieldInlineSchema, inline);

		return this;
	}

	/**
	 * Sets the name of the field.
	 * @param name - The name of the field.
	 */
	setName(name: string): this {
		this.#data.name = parse(EmbedFieldNameSchema, name);

		return this;
	}

	/**
	 * Sets the value of the field.
	 * @param value - The value of the field.
	 */
	setValue(value: string): this {
		this.#data.value = parse(EmbedFieldValueSchema, value);

		return this;
	}

	/**
	 * Converts the {@link EmbedFieldBuilder | `EmbedFieldBuilder`} instance into an {@link EmbedField | `EmbedField`} object.
	 * @returns The {@link EmbedField | `EmbedField`} object.
	 */
	toJSON(): EmbedField {
		const data = this.#data;
		const validatedData = parse(EmbedFieldSchema, data);

		return validatedData;
	}
}

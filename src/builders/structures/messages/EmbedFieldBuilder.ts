import {
	EmbedFieldInlineSchema,
	EmbedFieldNameSchema,
	EmbedFieldObjectSchema,
	EmbedFieldValueSchema,
} from "#builders/schemas/messages/EmbedFieldSchema.js";
import type { EmbedField } from "#types/index.js";
import { validate } from "#utils/functions/validate.js";
import { BaseBuilder } from "../base/BaseBuilder.js";

export class EmbedFieldBuilder extends BaseBuilder<EmbedField> {
	setInline(inline: boolean): this {
		this.data.inline = validate(EmbedFieldInlineSchema, inline);

		return this;
	}

	setName(name: string): this {
		this.data.name = validate(EmbedFieldNameSchema, name);

		return this;
	}

	setValue(value: string): this {
		this.data.value = validate(EmbedFieldValueSchema, value);

		return this;
	}

	toJSON(): EmbedField {
		const { data } = this;
		const validatedData = validate(EmbedFieldObjectSchema, data);

		return validatedData;
	}
}

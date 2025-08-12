import { boolean, maxLength, minLength, object, optional, pipe, string } from "valibot";

const MAXIMUM_EMBED_FIELD_NAME_LENGTH = 256;
const MAXIMUM_EMBED_FIELD_VALUE_LENGTH = 1024;

export const EmbedFieldInlineSchema = optional(boolean());
export const EmbedFieldNameSchema = pipe(
	string(),
	minLength(1),
	maxLength(MAXIMUM_EMBED_FIELD_NAME_LENGTH),
);
export const EmbedFieldValueSchema = pipe(
	string(),
	minLength(1),
	maxLength(MAXIMUM_EMBED_FIELD_VALUE_LENGTH),
);

export const EmbedFieldSchema = object({
	inline: EmbedFieldInlineSchema,
	name: EmbedFieldNameSchema,
	value: EmbedFieldValueSchema,
});

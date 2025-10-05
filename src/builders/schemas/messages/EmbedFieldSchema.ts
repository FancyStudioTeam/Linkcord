import { boolean, instanceof as instanceof_, object, string, union } from "zod";
import { EmbedFieldBuilder } from "#builders/structures/messages/EmbedFieldBuilder.js";

const MAXIMUM_EMBED_FIELD_NAME_LENGTH = 256;
const MAXIMUM_EMBED_FIELD_VALUE_LENGTH = 1024;

export const EmbedFieldInlineSchema = boolean();
export const EmbedFieldNameSchema = string().min(1).max(MAXIMUM_EMBED_FIELD_NAME_LENGTH);
export const EmbedFieldValueSchema = string().min(1).max(MAXIMUM_EMBED_FIELD_VALUE_LENGTH);

export const EmbedFieldInstanceSchema = instanceof_(EmbedFieldBuilder).transform((builder) => builder.toJSON());
export const EmbedFieldObjectSchema = object({
	inline: EmbedFieldInlineSchema.optional(),
	name: EmbedFieldNameSchema,
	value: EmbedFieldValueSchema,
});

export const EmbedFieldSchema = union([EmbedFieldInstanceSchema, EmbedFieldObjectSchema]);

import { array, instanceof as instanceof_, iso, object, string, union } from "zod";
import { EmbedBuilder } from "#builders/structures/index.js";
import { ColorSchema, URLSchema } from "../Shared.js";
import { EmbedAuthorSchema } from "./EmbedAuthorSchema.js";
import { EmbedFieldSchema } from "./EmbedFieldSchema.js";
import { EmbedFooterSchema } from "./EmbedFooterSchema.js";

const MAXIMUM_EMBED_DESCRIPTION_LENGTH = 4096;
const MAXIMUM_EMBED_FIELDS_LENGTH = 25;
const MAXIMUM_EMBED_TITLE_LENGTH = 256;

export const EmbedColorSchema = ColorSchema;
export const EmbedDescriptionSchema = string().min(1).max(MAXIMUM_EMBED_DESCRIPTION_LENGTH);
export const EmbedFieldsSchema = array(EmbedFieldSchema).max(MAXIMUM_EMBED_FIELDS_LENGTH);
export const EmbedImageSchema = URLSchema.transform((url) => ({
	url,
}));
export const EmbedThumbnailSchema = URLSchema.transform((url) => ({
	url,
}));

export const EmbedTimestampInstanceSchema = instanceof_(Date).transform((date) => date.toISOString());
export const EmbedTimestampISOTimestampSchema = iso.datetime({
	offset: true,
});
export const EmbedTimestampSchema = union([
	EmbedTimestampInstanceSchema,
	EmbedTimestampISOTimestampSchema,
]);

export const EmbedTitleSchema = string().min(1).max(MAXIMUM_EMBED_TITLE_LENGTH);
export const EmbedURLSchema = URLSchema;

export const EmbedInstanceSchema = instanceof_(EmbedBuilder).transform((builder) => builder.toJSON());
export const EmbedObjectSchema = object({
	author: EmbedAuthorSchema.optional(),
	color: EmbedColorSchema.optional(),
	description: EmbedDescriptionSchema.optional(),
	fields: EmbedFieldsSchema.optional(),
	footer: EmbedFooterSchema.optional(),
	image: EmbedImageSchema.optional(),
	thumbnail: EmbedThumbnailSchema.optional(),
	timestamp: EmbedTimestampSchema.optional(),
	title: EmbedTitleSchema.optional(),
	url: EmbedURLSchema.optional(),
});

export const EmbedSchema = union([
	EmbedInstanceSchema,
	EmbedObjectSchema,
]);

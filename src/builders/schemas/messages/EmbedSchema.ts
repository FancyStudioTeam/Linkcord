import { array, hex, instanceof as instanceof_, iso, number, object, string, union, url } from "zod";
import { EmbedBuilder } from "#builders/structures/index.js";
import { EmbedAuthorSchema } from "./EmbedAuthorSchema.js";
import { EmbedFieldSchema } from "./EmbedFieldSchema.js";
import { EmbedFooterSchema } from "./EmbedFooterSchema.js";

const MAXIMUM_EMBED_DESCRIPTION_LENGTH = 4096;
const MAXIMUM_EMBED_FIELDS_LENGTH = 25;
const MAXIMUM_EMBED_TITLE_LENGTH = 256;

export const EmbedColorNumberSchema = number();
export const EmbedColorStringSchema = hex().transform((hex) => Number(`0x${hex.replace("#", "").toLowerCase()}`));
export const EmbedColorSchema = union([EmbedColorNumberSchema, EmbedColorStringSchema]);

export const EmbedDescriptionSchema = string().min(1).max(MAXIMUM_EMBED_DESCRIPTION_LENGTH);
export const EmbedFieldsSchema = array(EmbedFieldSchema).max(MAXIMUM_EMBED_FIELDS_LENGTH);

export const EmbedImageInstanceSchema = instanceof_(URL).transform((url) => url.toString());
export const EmbedImageStringSchema = url();
export const EmbedImageSchema = union([EmbedImageInstanceSchema, EmbedImageStringSchema]).transform((url) => ({
	url,
}));

export const EmbedThumbnailInstanceSchema = instanceof_(URL).transform((url) => url.toString());
export const EmbedThumbnailStringSchema = url();
export const EmbedThumbnailSchema = union([EmbedThumbnailInstanceSchema, EmbedThumbnailStringSchema]).transform(
	(url) => ({
		url,
	}),
);

export const EmbedTimestampInstanceSchema = instanceof_(Date).transform((date) => date.toISOString());
export const EmbedTimestampISOTimestampSchema = iso.datetime({
	offset: true,
});
export const EmbedTimestampSchema = union([EmbedTimestampInstanceSchema, EmbedTimestampISOTimestampSchema]);

export const EmbedTitleSchema = string().min(1).max(MAXIMUM_EMBED_TITLE_LENGTH);

export const EmbedURLInstanceSchema = instanceof_(URL).transform((url) => url.toString());
export const EmbedURLStringSchema = url();
export const EmbedURLSchema = union([EmbedURLInstanceSchema, EmbedURLStringSchema]);

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

export const EmbedSchema = union([EmbedInstanceSchema, EmbedObjectSchema]);

import {
	array,
	hexColor,
	instance,
	isoTimestamp,
	maxLength,
	minLength,
	number,
	object,
	optional,
	pipe,
	string,
	transform,
	union,
	url,
} from "valibot";
import { EmbedAuthorBuilder } from "#builders/structures/messages/EmbedAuthorBuilder.js";
import { EmbedFieldBuilder } from "#builders/structures/messages/EmbedFieldBuilder.js";
import { EmbedFooterBuilder } from "#builders/structures/messages/EmbedFooterBuilder.js";
import { EmbedAuthorSchema as _EmbedAuthorSchema } from "./EmbedAuthorSchema.js";
import { EmbedFieldSchema as _EmbedFieldSchema } from "./EmbedFieldSchema.js";
import { EmbedFooterSchema as _EmbedFooterSchema } from "./EmbedFooterSchema.js";

const MAXIMUM_EMBED_DESCRIPTION_LENGTH = 4096;
const MAXIMUM_EMBED_FIELDS_LENGTH = 25;
const MAXIMUM_EMBED_TITLE_LENGTH = 256;

export const EmbedAuthorInstanceSchema = pipe(
	instance(EmbedAuthorBuilder),
	transform((builder) => builder.toJSON()),
);
export const EmbedAuthorObjectSchema = _EmbedAuthorSchema;
export const EmbedAuthorSchema = union([EmbedAuthorInstanceSchema, EmbedAuthorObjectSchema]);

export const EmbedColorNumberSchema = pipe(number());
export const EmbedColorStringSchema = pipe(
	string(),
	hexColor(),
	transform((hex) => Number(`0x${hex.replace("#", "").toLowerCase()}`)),
);
export const EmbedColorSchema = union([EmbedColorNumberSchema, EmbedColorStringSchema]);

export const EmbedDescriptionSchema = pipe(
	string(),
	minLength(1),
	maxLength(MAXIMUM_EMBED_DESCRIPTION_LENGTH),
);

export const EmbedFieldInstanceSchema = pipe(
	instance(EmbedFieldBuilder),
	transform((builder) => builder.toJSON()),
);
export const EmbedFieldObjectSchema = _EmbedFieldSchema;
export const EmbedFieldSchema = union([EmbedFieldInstanceSchema, EmbedFieldObjectSchema]);
export const EmbedFieldsSchema = pipe(
	array(EmbedFieldSchema),
	maxLength(MAXIMUM_EMBED_FIELDS_LENGTH),
);

export const EmbedFooterInstanceSchema = pipe(
	instance(EmbedFooterBuilder),
	transform((builder) => builder.toJSON()),
);
export const EmbedFooterObjectSchema = _EmbedFooterSchema;
export const EmbedFooterSchema = union([EmbedFooterInstanceSchema, EmbedFooterObjectSchema]);

export const EmbedImageInstanceSchema = pipe(
	instance(URL),
	transform((url) => url.toString()),
);
export const EmbedImageStringSchema = pipe(string(), url());
export const EmbedImageSchema = pipe(
	union([EmbedImageInstanceSchema, EmbedImageStringSchema]),
	transform((url) => ({
		url,
	})),
);

export const EmbedThumbnailInstanceSchema = pipe(
	instance(URL),
	transform((url) => url.toString()),
);
export const EmbedThumbnailStringSchema = pipe(string(), url());
export const EmbedThumbnailSchema = pipe(
	union([EmbedThumbnailInstanceSchema, EmbedThumbnailStringSchema]),
	transform((url) => ({
		url,
	})),
);

export const EmbedTimestampInstanceSchema = pipe(
	instance(Date),
	transform((date) => date.toISOString()),
);
export const EmbedTimestampISOTimestampSchema = pipe(string(), isoTimestamp());
export const EmbedTimestampSchema = union([
	EmbedTimestampInstanceSchema,
	EmbedTimestampISOTimestampSchema,
]);

export const EmbedTitleSchema = pipe(string(), minLength(1), maxLength(MAXIMUM_EMBED_TITLE_LENGTH));

export const EmbedURLInstanceSchema = pipe(
	instance(URL),
	transform((url) => url.toString()),
);
export const EmbedURLStringSchema = pipe(string(), url());
export const EmbedURLSchema = union([EmbedURLInstanceSchema, EmbedURLStringSchema]);

export const EmbedSchema = object({
	author: optional(EmbedAuthorSchema),
	color: optional(EmbedColorSchema),
	description: optional(EmbedDescriptionSchema),
	fields: optional(EmbedFieldsSchema),
	footer: optional(EmbedFooterSchema),
	image: optional(EmbedImageSchema),
	thumbnail: optional(EmbedThumbnailSchema),
	timestamp: optional(EmbedTimestampSchema),
	title: optional(EmbedTitleSchema),
	url: optional(EmbedURLSchema),
});

import { instanceof as instanceof_, object, string, union, url } from "zod";
import { EmbedAuthorBuilder } from "#builders/structures/messages/EmbedAuthorBuilder.js";

const MAXIMUM_EMBED_AUTHOR_NAME_LENGTH = 256;

export const EmbedAuthorIconURLInstanceSchema = instanceof_(URL).transform((url) => url.toString());
export const EmbedAuthorIconURLStringSchema = url();
export const EmbedAuthorIconURLSchema = union([EmbedAuthorIconURLInstanceSchema, EmbedAuthorIconURLStringSchema]);

export const EmbedAuthorNameSchema = string().min(1).max(MAXIMUM_EMBED_AUTHOR_NAME_LENGTH);

export const EmbedAuthorURLInstanceSchema = instanceof_(URL).transform((url) => url.toString());
export const EmbedAuthorURLStringSchema = url();
export const EmbedAuthorURLSchema = union([EmbedAuthorURLInstanceSchema, EmbedAuthorURLStringSchema]);

export const EmbedAuthorInstanceSchema = instanceof_(EmbedAuthorBuilder).transform((builder) => builder.toJSON());
export const EmbedAuthorObjectSchema = object({
	iconURL: EmbedAuthorIconURLSchema.optional(),
	name: EmbedAuthorNameSchema,
	url: EmbedAuthorURLSchema.optional(),
});

export const EmbedAuthorSchema = union([EmbedAuthorObjectSchema]);

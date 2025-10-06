import { instanceof as instanceof_, object, string, union } from "zod";
import { EmbedAuthorBuilder } from "#builders/structures/messages/EmbedAuthorBuilder.js";
import { URLSchema } from "../Shared.js";

const MAXIMUM_EMBED_AUTHOR_NAME_LENGTH = 256;

export const EmbedAuthorIconURLSchema = URLSchema;
export const EmbedAuthorNameSchema = string().min(1).max(MAXIMUM_EMBED_AUTHOR_NAME_LENGTH);
export const EmbedAuthorURLSchema = URLSchema;

export const EmbedAuthorInstanceSchema = instanceof_(EmbedAuthorBuilder).transform((builder) => builder.toJSON());
export const EmbedAuthorObjectSchema = object({
	iconURL: EmbedAuthorIconURLSchema.optional(),
	name: EmbedAuthorNameSchema,
	url: EmbedAuthorURLSchema.optional(),
});

export const EmbedAuthorSchema = union([EmbedAuthorObjectSchema]);

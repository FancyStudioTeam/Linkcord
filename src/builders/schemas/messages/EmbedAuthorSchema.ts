import { instanceof as instanceof_, object, string, union } from "zod";
import { EmbedAuthorBuilder } from "../../structures/messages/EmbedAuthorBuilder.js";
import { URLSchema } from "../Shared.js";

const MAXIMUM_EMBED_AUTHOR_NAME_LENGTH = 256;

export const EmbedAuthorIconUrlSchema = URLSchema;
export const EmbedAuthorNameSchema = string().min(1).max(MAXIMUM_EMBED_AUTHOR_NAME_LENGTH);
export const EmbedAuthorUrlSchema = URLSchema;

export const EmbedAuthorInstanceSchema = instanceof_(EmbedAuthorBuilder).transform((builder) => builder.toJSON());
export const EmbedAuthorObjectSchema = object({
	iconURL: EmbedAuthorIconUrlSchema.optional(),
	name: EmbedAuthorNameSchema,
	url: EmbedAuthorUrlSchema.optional(),
});

export const EmbedAuthorSchema = union([
	EmbedAuthorInstanceSchema,
	EmbedAuthorObjectSchema,
]);

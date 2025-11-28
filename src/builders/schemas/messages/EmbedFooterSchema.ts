import { instanceof as instanceof_, object, string, union } from "zod";
import { EmbedFooterBuilder } from "../../structures/messages/EmbedFooterBuilder.js";
import { UrlSchema } from "../Shared.js";

const MAXIMUM_EMBED_FOOTER_TEXT_LENGTH = 2048;

export const EmbedFooterIconUrlSchema = UrlSchema;
export const EmbedFooterTextSchema = string().min(1).max(MAXIMUM_EMBED_FOOTER_TEXT_LENGTH);

export const EmbedFooterInstanceSchema = instanceof_(EmbedFooterBuilder).transform((builder) => builder.toJSON());
export const EmbedFooterObjectSchema = object({
	iconURL: EmbedFooterIconUrlSchema.optional(),
	text: EmbedFooterTextSchema,
});

export const EmbedFooterSchema = union([
	EmbedFooterInstanceSchema,
	EmbedFooterObjectSchema,
]);

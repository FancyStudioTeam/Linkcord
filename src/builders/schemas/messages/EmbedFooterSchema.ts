import { instanceof as instanceof_, object, string, union } from "zod";
import { EmbedFooterBuilder } from "../../structures/messages/EmbedFooterBuilder.js";
import { URLSchema } from "../Shared.js";

const MAXIMUM_EMBED_FOOTER_TEXT_LENGTH = 2048;

export const EmbedFooterIconURLSchema = URLSchema;
export const EmbedFooterTextSchema = string().min(1).max(MAXIMUM_EMBED_FOOTER_TEXT_LENGTH);

export const EmbedFooterInstanceSchema = instanceof_(EmbedFooterBuilder).transform((builder) => builder.toJSON());
export const EmbedFooterObjectSchema = object({
	iconURL: EmbedFooterIconURLSchema.optional(),
	text: EmbedFooterTextSchema,
});

export const EmbedFooterSchema = union([
	EmbedFooterInstanceSchema,
	EmbedFooterObjectSchema,
]);

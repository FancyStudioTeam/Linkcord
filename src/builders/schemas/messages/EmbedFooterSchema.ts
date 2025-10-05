import { instanceof as instanceof_, object, string, union, url } from "zod";
import { EmbedFooterBuilder } from "#builders/structures/messages/EmbedFooterBuilder.js";

const MAXIMUM_EMBED_FOOTER_TEXT_LENGTH = 2048;

export const EmbedFooterIconURLInstanceSchema = instanceof_(URL).transform((url) => url.toString());
export const EmbedFooterIconURLStringSchema = url();
export const EmbedFooterIconURLSchema = union([EmbedFooterIconURLInstanceSchema, EmbedFooterIconURLStringSchema]);

export const EmbedFooterTextSchema = string().min(1).max(MAXIMUM_EMBED_FOOTER_TEXT_LENGTH);

export const EmbedFooterInstanceSchema = instanceof_(EmbedFooterBuilder).transform((builder) => builder.toJSON());
export const EmbedFooterObjectSchema = object({
	iconURL: EmbedFooterIconURLSchema.optional(),
	text: EmbedFooterTextSchema,
});

export const EmbedFooterSchema = union([EmbedFooterInstanceSchema, EmbedFooterObjectSchema]);

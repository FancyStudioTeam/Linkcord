import { instanceof as instanceof_, literal, object, string, union } from "zod";
import { TextDisplayBuilder } from "#builders/structures/messages/TextDisplayBuilder.js";
import { ComponentTypes } from "#types/index.js";
import { IDSchema } from "../Shared.js";

const MAXIMUM_TEXT_DISPLAY_CONTENT_LENGTH = 4000;

export const TextDisplayContentSchema = string().min(1).max(MAXIMUM_TEXT_DISPLAY_CONTENT_LENGTH);
export const TextDisplayIDSchema = IDSchema;
export const TextDisplayTypeSchema = literal(ComponentTypes.TextDisplay);

export const TextDisplayInstanceSchema = instanceof_(TextDisplayBuilder).transform((builder) => builder.toJSON());
export const TextDisplayObjectSchema = object({
	content: TextDisplayContentSchema,
	id: TextDisplayIDSchema.optional(),
	type: TextDisplayTypeSchema,
});

export const TextDisplaySchema = union([TextDisplayInstanceSchema, TextDisplayObjectSchema]);

import { literal, maxLength, minLength, minValue, number, object, optional, pipe, string } from "valibot";
import { ComponentTypes } from "#types/index.js";

const MAXIMUM_TEXT_DISPLAY_CONTENT_LENGTH = 4000;

export const TextDisplayContentSchema = pipe(string(), minLength(1), maxLength(MAXIMUM_TEXT_DISPLAY_CONTENT_LENGTH));

export const TextDisplayIDSchema = pipe(number(), minValue(0));
export const TextDisplayTypeSchema = literal(ComponentTypes.TextDisplay);

export const TextDisplaySchema = object({
	content: TextDisplayContentSchema,
	id: optional(TextDisplayIDSchema),
	type: TextDisplayTypeSchema,
});

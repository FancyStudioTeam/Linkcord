import { literal, object, string } from 'zod';
import { IdSchema } from '#builders/schemas/shared/IdSchema.js';
import { ComponentType } from '#types/index.js';

const MAXIMUM_TEXT_DISPLAY_CONTENT_LENGTH = 4_000;

export const TextDisplayContentSchema = string().min(1).max(MAXIMUM_TEXT_DISPLAY_CONTENT_LENGTH);
export const TextDisplayIdSchema = IdSchema;
export const TextDisplayTypeSchema = literal(ComponentType.TextDisplay);

export const TextDisplaySchema = object({
	content: TextDisplayContentSchema,
	id: TextDisplayIdSchema.optional(),
	type: TextDisplayTypeSchema,
});

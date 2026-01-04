import { instanceof as instanceof_, literal, object, string, union } from 'zod';
import { TextDisplay } from '#builders/structures/v2/TextDisplay.js';
import { ComponentType } from '#types/index.js';
import { IdSchema } from '../shared/IdSchema.js';

const MAXIMUM_TEXT_DISPLAY_CONTENT_LENGTH = 4_000;

export const TextDisplayContentSchema = string().min(1).max(MAXIMUM_TEXT_DISPLAY_CONTENT_LENGTH);
export const TextDisplayIdSchema = IdSchema;
export const TextDisplayTypeSchema = literal(ComponentType.TextDisplay);

export const TextDisplayInstanceSchema = instanceof_(TextDisplay);
export const TextDisplayObjectSchema = object({
	content: TextDisplayContentSchema,
	id: TextDisplayIdSchema.optional(),
	type: TextDisplayTypeSchema,
});

export const TextDisplaySchema = union([
	TextDisplayInstanceSchema,
	TextDisplayObjectSchema,
]);

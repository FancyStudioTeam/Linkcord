import { boolean, enum as enum_, literal, object } from 'zod';
import { IdSchema } from '#builders/schemas/shared/IdSchema.js';
import { ComponentType, SeparatorSpacingSize } from '#types/index.js';

export const SeparatorDividerSchema = boolean();
export const SeparatorIdSchema = IdSchema;
export const SeparatorSpacingSchema = enum_(SeparatorSpacingSize);
export const SeparatorTypeSchema = literal(ComponentType.Separator);

export const SeparatorSchema = object({
	divider: SeparatorDividerSchema.optional(),
	id: SeparatorIdSchema.optional(),
	spacing: SeparatorSpacingSchema.optional(),
	type: SeparatorTypeSchema,
});

import { boolean, enum as enum_, literal, object } from 'zod';
import { ComponentType, SeparatorSpacingSize } from '#types/index.js';
import { IdSchema } from '../../shared/IdSchema.js';

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

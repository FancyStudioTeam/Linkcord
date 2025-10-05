import { boolean, enum as enum_, instanceof as instanceof_, literal, number, object, union } from "zod";
import { SeparatorBuilder } from "#builders/structures/index.js";
import { ComponentTypes, SeparatorSpacingSizes } from "#types/index.js";

export const SeparatorDividerSchema = boolean();
export const SeparatorIDSchema = number().int();
export const SeparatorSpacingSchema = enum_(SeparatorSpacingSizes);
export const SeparatorTypeSchema = literal(ComponentTypes.Separator);

export const SeparatorInstanceSchema = instanceof_(SeparatorBuilder).transform((builder) => builder.toJSON());
export const SeparatorObjectSchema = object({
	divider: SeparatorDividerSchema.optional(),
	id: SeparatorIDSchema.optional(),
	spacing: SeparatorSpacingSchema.optional(),
	type: SeparatorTypeSchema,
});

export const SeparatorSchema = union([SeparatorInstanceSchema, SeparatorObjectSchema]);

import { boolean, enum as enum_, instanceof as instanceof_, literal, object, union } from "zod";
import { SeparatorBuilder } from "#builders/structures/index.js";
import { ComponentTypes, SeparatorSpacingSize } from "#types/index.js";
import { IDSchema } from "../Shared.js";

export const SeparatorDividerSchema = boolean();
export const SeparatorIDSchema = IDSchema;
export const SeparatorSpacingSchema = enum_(SeparatorSpacingSize);
export const SeparatorTypeSchema = literal(ComponentTypes.Separator);

export const SeparatorInstanceSchema = instanceof_(SeparatorBuilder).transform((builder) => builder.toJSON());
export const SeparatorObjectSchema = object({
	divider: SeparatorDividerSchema.optional(),
	id: SeparatorIDSchema.optional(),
	spacing: SeparatorSpacingSchema.optional(),
	type: SeparatorTypeSchema,
});

export const SeparatorSchema = union([SeparatorInstanceSchema, SeparatorObjectSchema]);

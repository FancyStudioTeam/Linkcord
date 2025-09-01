import { boolean, enum_, literal, minValue, number, object, optional, pipe } from "valibot";
import { ComponentTypes, SeparatorSpacingSizes } from "#types/index.js";

export const SeparatorDividerSchema = boolean();
export const SeparatorIDSchema = pipe(number(), minValue(0));
export const SeparatorSpacingSchema = enum_(SeparatorSpacingSizes);
export const SeparatorTypeSchema = literal(ComponentTypes.Separator);

export const SeparatorSchema = object({
	divider: optional(SeparatorDividerSchema),
	id: optional(SeparatorIDSchema),
	spacing: optional(SeparatorSpacingSchema),
	type: SeparatorTypeSchema,
});

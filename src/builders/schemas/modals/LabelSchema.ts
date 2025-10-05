import { literal, number, object, string, union } from "zod";
import { ComponentTypes } from "#types/index.js";
import { TextInputSchema } from "./TextInputSchema.js";

const MAXIMUM_LABEL_DESCRIPTION_LENGTH = 100;
const MAXIMUM_LABEL_LABEL_LENGTH = 45;

export const LabelComponentSchema = union([TextInputSchema]);
export const LabelDescriptionSchema = string().min(1).max(MAXIMUM_LABEL_DESCRIPTION_LENGTH);
export const LabelIDSchema = number().int();
export const LabelLabelSchema = string().min(1).max(MAXIMUM_LABEL_LABEL_LENGTH);
export const LabelTypeSchema = literal(ComponentTypes.Label);

export const LabelObjectSchema = object({
	component: LabelComponentSchema,
	description: LabelDescriptionSchema.optional(),
	id: LabelIDSchema.optional(),
	label: LabelLabelSchema,
	type: LabelTypeSchema,
});

export const LabelSchema = union([LabelObjectSchema]);

import { boolean, instanceof as instanceof_, literal, number, object, string, union } from "zod";
import { ComponentTypes, TextInputStyle } from "#types/index.js";
import { TextInputBuilder } from "../../structures/modals/TextInputBuilder.js";
import { CustomIDSchema, IDSchema } from "../Shared.js";

const MAXIMUM_TEXT_INPUT_PLACEHOLDER_LENGTH = 100;
const MAXIMUM_TEXT_INPUT_VALUE_LENGTH = 4000;

const PARAGRAPH_STYLE_LITERAL = literal(TextInputStyle.Paragraph);
const SHORT_STYLE_LITERAL = literal(TextInputStyle.Short);

export const TextInputCustomIDSchema = CustomIDSchema;
export const TextInputIDSchema = IDSchema;
export const TextInputMaxValueSchema = number().int().min(1).max(MAXIMUM_TEXT_INPUT_VALUE_LENGTH);
export const TextInputMinValueSchema = number().int().min(0).max(MAXIMUM_TEXT_INPUT_VALUE_LENGTH);
export const TextInputPlaceholderSchema = string().min(1).max(MAXIMUM_TEXT_INPUT_PLACEHOLDER_LENGTH);
export const TextInputRequiredSchema = boolean();
export const TextInputStyleSchema = union([PARAGRAPH_STYLE_LITERAL, SHORT_STYLE_LITERAL]);
export const TextInputTypeSchema = literal(ComponentTypes.TextInput);
export const TextInputValueSchema = string().min(1).max(MAXIMUM_TEXT_INPUT_VALUE_LENGTH);

export const TextInputInstanceSchema = instanceof_(TextInputBuilder).transform((builder) => builder.toJSON());
export const TextInputObjectSchema = object({
	customId: TextInputCustomIDSchema,
	id: TextInputIDSchema.optional(),
	maxLength: TextInputMaxValueSchema.optional(),
	minLength: TextInputMinValueSchema.optional(),
	placeholder: TextInputPlaceholderSchema.optional(),
	required: TextInputRequiredSchema.optional(),
	style: TextInputStyleSchema,
	type: TextInputTypeSchema,
	value: TextInputValueSchema.optional(),
});

export const TextInputSchema = union([TextInputInstanceSchema, TextInputObjectSchema]);

import {
	boolean,
	integer,
	literal,
	maxLength,
	maxValue,
	minLength,
	minValue,
	number,
	object,
	optional,
	pipe,
	string,
	union,
} from "valibot";
import { ComponentTypes, TextInputStyles } from "#types/index.js";

const MAXIMUM_TEXT_INPUT_CUSTOM_ID_LENGTH = 100;
const MAXIMUM_TEXT_INPUT_PLACEHOLDER_LENGTH = 100;
const MAXIMUM_TEXT_INPUT_VALUE_LENGTH = 4000;

export const TextInputCustomIDSchema = pipe(string(), minLength(1), maxLength(MAXIMUM_TEXT_INPUT_CUSTOM_ID_LENGTH));

export const TextInputIDSchema = pipe(number(), minValue(0));

export const TextInputMaxValueLengthSchema = pipe(
	number(),
	integer(),
	minValue(1),
	maxValue(MAXIMUM_TEXT_INPUT_VALUE_LENGTH),
);

export const TextInputMinValueSchema = pipe(
	number(),
	integer(),
	minValue(0),
	maxValue(MAXIMUM_TEXT_INPUT_VALUE_LENGTH),
);

export const TextInputPlaceholderSchema = pipe(
	string(),
	minLength(1),
	maxLength(MAXIMUM_TEXT_INPUT_PLACEHOLDER_LENGTH),
);

export const TextInputRequiredSchema = boolean();

export const TextInputStyleSchema = union([literal(TextInputStyles.Paragraph), literal(TextInputStyles.Short)]);

export const TextInputTypeSchema = literal(ComponentTypes.TextInput);

export const TextInputValueSchema = pipe(string(), minLength(1), maxLength(MAXIMUM_TEXT_INPUT_VALUE_LENGTH));

export const TextInputSchema = object({
	customId: TextInputCustomIDSchema,
	id: optional(TextInputIDSchema),
	maxLength: optional(TextInputMaxValueLengthSchema),
	minLength: optional(TextInputMinValueSchema),
	placeholder: optional(TextInputPlaceholderSchema),
	required: optional(TextInputRequiredSchema),
	style: TextInputStyleSchema,
	type: TextInputTypeSchema,
	value: optional(TextInputValueSchema),
});

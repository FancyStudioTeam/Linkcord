import { literal, object, string, union } from "valibot";
import { SelectMenuDefaultValueTypes } from "#types/index.js";

export const SelectMenuDefaultValueIDSchema = string();

export const SelectMenuDefaultValueTypeSchema = union([
	literal(SelectMenuDefaultValueTypes.Channel),
	literal(SelectMenuDefaultValueTypes.Role),
	literal(SelectMenuDefaultValueTypes.User),
]);

export const SelectMenuDefaultValueSchema = object({
	id: SelectMenuDefaultValueIDSchema,
	type: SelectMenuDefaultValueTypeSchema,
});

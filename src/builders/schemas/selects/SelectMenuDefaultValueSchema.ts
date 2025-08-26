import { literal, object, pipe, string, transform, union } from "valibot";
import { SelectMenuDefaultValueTypes } from "#types/index.js";
import { SnowflakeUtils } from "#utils/helpers/SnowflakeUtils.js";

export const SelectMenuDefaultValueIDSchema = pipe(
	string(),
	transform((value) => SnowflakeUtils.cast(value)),
);

export const SelectMenuDefaultValueTypeSchema = union([
	literal(SelectMenuDefaultValueTypes.Channel),
	literal(SelectMenuDefaultValueTypes.Role),
	literal(SelectMenuDefaultValueTypes.User),
]);

export const SelectMenuDefaultValueSchema = object({
	id: SelectMenuDefaultValueIDSchema,
	type: SelectMenuDefaultValueTypeSchema,
});

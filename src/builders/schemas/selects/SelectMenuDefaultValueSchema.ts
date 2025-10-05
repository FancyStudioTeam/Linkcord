import { instanceof as instanceof_, literal, object, string, union } from "zod";
import { SelectMenuDefaultValueBuilder } from "#builders/structures/selects/SelectMenuDefaultValueBuilder.js";
import { SelectMenuDefaultValueType } from "#types/index.js";
import { SnowflakeUtils } from "#utils/helpers/SnowflakeUtils.js";

const CHANNEL_TYPE_LITERAL = literal(SelectMenuDefaultValueType.Channel);
const ROLE_TYPE_LITERAL = literal(SelectMenuDefaultValueType.Role);
const USER_TYPE_LITERAL = literal(SelectMenuDefaultValueType.User);

export const SelectMenuDefaultValueIDSchema = string().transform(SnowflakeUtils.cast);
export const SelectMenuDefaultValueTypeSchema = union([CHANNEL_TYPE_LITERAL, ROLE_TYPE_LITERAL, USER_TYPE_LITERAL]);

export const SelectMenuDefaultValueInstanceSchema = instanceof_(SelectMenuDefaultValueBuilder);
export const SelectMenuDefaultValueObjectSchema = object({
	id: SelectMenuDefaultValueIDSchema,
	type: SelectMenuDefaultValueTypeSchema,
});

export const SelectMenuDefaultValueSchema = union([
	SelectMenuDefaultValueInstanceSchema,
	SelectMenuDefaultValueObjectSchema,
]);

import {
	array,
	boolean,
	hexColor,
	instance,
	literal,
	minLength,
	minValue,
	number,
	object,
	optional,
	pipe,
	string,
	transform,
	union,
} from "valibot";
import { SeparatorBuilder } from "#builders/structures/messages/SeparatorBuilder.js";
import { ComponentTypes } from "#types/index.js";
import { SeparatorSchema } from "./SeparatorSchema.js";

export const ContainerSeparatorComponentInstanceSchema = pipe(
	instance(SeparatorBuilder),
	transform((builder) => builder.toJSON()),
);
export const ContainerSeparatorComponentObjectSchema = SeparatorSchema;
export const ContainerSeparatorComponentSchema = union([
	ContainerSeparatorComponentInstanceSchema,
	ContainerSeparatorComponentObjectSchema,
]);

export const ContainerAccentColorNumberSchema = pipe(number());
export const ContainerAccentColorStringSchema = pipe(
	string(),
	hexColor(),
	transform((hex) => Number(`0x${hex.replace("#", "").toLowerCase()}`)),
);
export const ContainerAccentColorSchema = union([
	ContainerAccentColorNumberSchema,
	ContainerAccentColorStringSchema,
]);

export const ContainerComponentSchema = union([ContainerSeparatorComponentSchema]);
export const ContainerComponentsSchema = pipe(array(ContainerComponentSchema), minLength(1));

export const ContainerIDSchema = pipe(number(), minValue(0));
export const ContainerSpoilerSchema = boolean();
export const ContainerTypeSchema = literal(ComponentTypes.Container);

export const ContainerSchema = object({
	accentColor: optional(ContainerAccentColorSchema),
	components: ContainerComponentsSchema,
	id: optional(ContainerIDSchema),
	spoiler: optional(ContainerSpoilerSchema),
	type: ContainerTypeSchema,
});

import { array, boolean, hex, instanceof as instanceof_, literal, number, object, union } from "zod";
import { ContainerBuilder } from "#builders/structures/messages/ContainerBuilder.js";
import { ComponentTypes } from "#types/index.js";
import { SeparatorSchema } from "./SeparatorSchema.js";
import { TextDisplaySchema } from "./TextDisplaySchema.js";

export const ContainerAccentColorNumberSchema = number();
export const ContainerAccentColorStringSchema = hex().transform((hex) =>
	Number(`0x${hex.replace("#", "").toLowerCase()}`),
);
export const ContainerAccentColorSchema = union([ContainerAccentColorNumberSchema, ContainerAccentColorStringSchema]);

export const ContainerComponentSchema = union([SeparatorSchema, TextDisplaySchema]);
export const ContainerComponentsSchema = array(ContainerComponentSchema).min(1);

export const ContainerIDSchema = number().int();
export const ContainerSpoilerSchema = boolean();
export const ContainerTypeSchema = literal(ComponentTypes.Container);

export const ContainerInstanceSchema = instanceof_(ContainerBuilder).transform((builder) => builder.toJSON());
export const ContainerObjectSchema = object({
	accentColor: ContainerAccentColorSchema.optional(),
	components: ContainerComponentsSchema,
	id: ContainerIDSchema.optional(),
	spoiler: ContainerSpoilerSchema.optional(),
	type: ContainerTypeSchema,
});

export const ContainerSchema = union([ContainerInstanceSchema, ContainerObjectSchema]);

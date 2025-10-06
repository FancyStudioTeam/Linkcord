import { array, boolean, instanceof as instanceof_, literal, object, union } from "zod";
import { ContainerBuilder } from "#builders/structures/messages/ContainerBuilder.js";
import { ComponentTypes } from "#types/index.js";
import { ColorSchema, IDSchema } from "../Shared.js";
import { FileSchema } from "./FileSchema.js";
import { SeparatorSchema } from "./SeparatorSchema.js";
import { TextDisplaySchema } from "./TextDisplaySchema.js";

export const ContainerAccentColorSchema = ColorSchema;

export const ContainerComponentSchema = union([FileSchema, SeparatorSchema, TextDisplaySchema]);
export const ContainerComponentsSchema = array(ContainerComponentSchema).min(1);

export const ContainerIDSchema = IDSchema;
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

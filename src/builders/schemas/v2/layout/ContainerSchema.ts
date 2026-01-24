import { array, boolean, literal, number, object, union } from 'zod';
import { IdSchema } from '#builders/schemas/shared/IdSchema.js';
import { ComponentType } from '#types/index.js';
import { TextDisplaySchema } from '../content/TextDisplaySchema.js';
import { SeparatorSchema } from './SeparatorSchema.js';

export const ContainerAccentColorSchema = number();

export const ContainerComponentSchema = union([
	SeparatorSchema,
	TextDisplaySchema,
]);
export const ContainerComponentsSchema = array(ContainerComponentSchema).min(1);

export const ContainerIdSchema = IdSchema;
export const ContainerSpoilerSchema = boolean();
export const ContainerTypeSchema = literal(ComponentType.Container);

export const ContainerSchema = object({
	accentColor: ContainerAccentColorSchema.optional(),
	components: ContainerComponentsSchema,
	id: ContainerIdSchema.optional(),
	spoiler: ContainerSpoilerSchema.optional(),
	type: ContainerTypeSchema,
});

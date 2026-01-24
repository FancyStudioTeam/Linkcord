import { array, literal, number, object, union } from 'zod';
import { ComponentType } from '#types/index.js';
import { IdSchema } from '../../shared/IdSchema.js';
import { TextDisplaySchema } from '../content/TextDisplaySchema.js';
import { SeparatorSchema } from '../SeparatorSchema.js';

export const ContainerAccentColorSchema = number();

export const ContainerComponentSchema = union([
	SeparatorSchema,
	TextDisplaySchema,
]);
export const ContainerComponentsSchema = array(ContainerComponentSchema).min(1);

export const ContainerIdSchema = IdSchema;
export const ContainerTypeSchema = literal(ComponentType.Container);

export const ContainerSchema = object({
	accentColor: ContainerAccentColorSchema.optional(),
	components: ContainerComponentsSchema,
	id: ContainerIdSchema.optional(),
	type: ContainerTypeSchema,
});
